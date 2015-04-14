import {Dispatcher} from 'flux';


class AppDisptacher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
}

let _AppDipacther = new AppDisptacher();

export default _AppDipacther;