import {BaseApiService} from "./baseApiService.ts";
import {Profiles} from "../../entities";


class ProfileService extends BaseApiService {

    private userEndpoints = {
        profile: `${this.backendURL}/profile`
    };

    profile(): Promise<Profiles> {
        return this._request('GET', this.userEndpoints.profile);
    }

}

const profileService = new ProfileService();

export default profileService;