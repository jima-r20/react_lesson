import _ from 'lodash';
import { READ_EVENTS } from '../actions';
import events_index from '../components/events_index';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // 配列構造
            // [
            //  {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
            //  {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."},
            //  ....
            // ]
            // ↓のようなデータ構造に変更(_.mapKeys())
            // オブジェクト
            // {
            //  1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
            //  2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."},
            //  ....
            // }
            return _.mapKeys(action.response.data, 'id');
        default:
            return events;
    }
}