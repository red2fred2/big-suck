#include <iostream>

#include "ydlidar_sdk/Lidar/LIDARDevice.h"

int main(int argc, char* argv[]) {

    //check for right number of args
    if(argc != 2) {
        std::cout << "Bad usage!\n"
                     "./driver [usb interface]\n"
                     "Example: ./driver /dev/ttyUSB0\n";
    }





    return 0;
}