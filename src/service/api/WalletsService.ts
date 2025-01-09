import {BaseApiService} from "./baseApiService.ts";
import {Wallets} from "../../entities";


class WalletsService extends BaseApiService{

    private walletsEndpoints = {
        wallets: `${this.backendURL}/wallets`
    };

    wallets():Promise<Wallets[]> {
        return this._request('GET',this.walletsEndpoints.wallets);
    }

}
const walletsService = new WalletsService();
export default walletsService;