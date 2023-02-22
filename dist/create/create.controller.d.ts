import { qrCodeObj } from './qrCodeObj/qrcodeObj';
export declare class CreateController {
    function(): string;
    createQrCode(qrCodeObj: qrCodeObj): Promise<any>;
}
