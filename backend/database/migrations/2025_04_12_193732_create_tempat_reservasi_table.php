<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tempat_reservasi', function (Blueprint $table) {
            $table->id('tempat_reservasi_id');
            $table->string('lokasi');
            $table->double('kapasitas')->nullable();
            $table->string('image')->nullable();
            $table->text('keterangan')->nullable();
            $table->double('biaya')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
