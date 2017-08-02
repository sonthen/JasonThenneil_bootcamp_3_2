<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\transaksi;
use Illuminate\Support\Facades\DB;

class hotelController extends Controller
{
    function getData(){
        
        //eloquent
        $roomList = RoomList::get();



        return response()->json($roomList,200);
        //pengganti return $userList;
    }

    function addData(Request $request){

        //untuk rollback data jika ada yang error sebagian
        DB::beginTransaction();

        try{
            

            $this->validate($request, [
                'customer_id' => 'required',
                'room_id'=> 'required'
            ]);

            $customer_id = $request->input('customer_id');
            $room_id = $request->input('room_id');
            

            //save ke database(eloquent)

            $transaction = new transaksi;
            $transaction->id_pelanggan = $customer_id;
            $transaction->id_kamar = $room_id;
            
            //$usr->save adalah untuk insert
            $transaction->save();

            $roomList= UserList::get();
            //temannya beginTransaction(); untuk commit data
            DB::commit();
            return response()->json($roomList, 200);
        }
        catch(\Exception $e){

            //temannya beginTransaction(); untuk rollback
            DB::rollback();
            return response()->json(["message" => $e->getMessage()], 500);
        }


    }
}
