import axios from "axios";

// PERMET D'APPELLER L'API
async function apiUse({
  method = "GET",
  resource,
  params = null,
  data = null
}) {
  return axios({
    method: method,
    baseURL: "https://supdevinci.nine1000.tech",
    url: resource,
    params,
    data,
    headers: {
      "x-token":
        "a5b25f50499c81b905bde2f5a81fbfd9bc38863faa6d82691361556f19925c4bf658039523b64e2b92bcb288ca4ede24b4c9b62afff0dc27e32cd1d975fe7dd9f3e8add6b7a14436649be024fac22be2970b6d89e8f2ada4b2c420f0d12e8648d211b2c778f52d42806965756a0e381e7722c8cadaa336d1d43badb9d1f799ddd82112a534b33ce2c0e93b729cae5052c42ec11025e3310d38b7ffee0163be43efec5983e719ac0eb14186b28f03507cdfa74dbb8ccac36e1ae5bbbbf8586d120e4d105554ce052c8d9e8edaeb97d639946334510a4f216c955aebaff8a811ee396982aaa809b5838f00e0e9261d9b1ed91cb0bf770714f95a2f77e0c3093c92"
    }
  }).then((res) => res.data);
}

export default apiUse;
