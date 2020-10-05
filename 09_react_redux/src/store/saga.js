import { takeEvery, put } from "redux-saga/effects"
import axios from "axios"
import { FETCH_HOME_MULTIDATA } from './constants'; // 拦截action，想在action之前做操作的(action)
import { changeBannerAction, changeRecommendAction } from './actionCreators'; // 拦截action，做完操作之后要触发的action


function* fetchHomeDataAction(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  // console.log(res);
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;
  yield put(changeBannerAction(banners));
  yield put(changeRecommendAction(recommends));
}

function* mySage() { // 使用拦截action的action
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeDataAction)
}


export default mySage