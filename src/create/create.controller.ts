import { Controller, Get, Post, Body } from '@nestjs/common';
import { qrCodeObj } from './qrCodeObj/qrcodeObj';
var QRCode = require('qrcode');

@Controller('create')
export class CreateController {
    @Get()
    function() {
        // Returns error message
        return "Must be a POST request";
    }

    @Post()
    async createQrCode(@Body() qrCodeObj: qrCodeObj) : Promise<any> {
        // Creates a qrCodeObj with body varaiables
        // We can access qrCodeObj.url and qrCodeObj.size

        // Creates a QRCode and stores the data url in the newQRCode variable
        var newQRCode = await QRCode.toDataURL(qrCodeObj.url)
            .then(url => {
                // Returns our data url
                return url;
            })
            .catch(err => {
                // Returns error image location
                return "/8.svg";
        });

        // Returns newQRCode as a string
        return {"data": newQRCode};
    }
}
