import React, {useState, useContext} from 'react'
import { searchData } from '../api';

import { StorageContext } from '../context/StorageContext';
import { doneAction, errorAction, loadingAction } from '../actions';

export default function SearchComponent() {
    const mainState = useContext(StorageContext);
    const [searchWord, setSearchWord] = useState('');
    const searchWordChange = e => {
        setSearchWord(e.target.value);
    }

    const searchBtnClick = () => {
        mainState.dispatch(loadingAction())
        searchData(searchWord).then(data => {
            //console.log(data);
            mainState.dispatch(doneAction(data.hits))
        }).catch(error => {
            // console.log(error);
            mainState.dispatch(errorAction())
        })
    }

    console.log(mainState);
    return (
        <div className="row">
            <div className="col-12">
                <div className="input-group mt-3">
                    <div className="input-group-prepend">
                        <button 
                        className="btn btn-outline-secondary" 
                        onClick={searchBtnClick} 
                        type="button">Search</button>
                    </div>
                    <input 
                    type="text" 
                    className="form-control"
                    value={searchWord}
                    onChange={searchWordChange}

                      />
                </div>
            </div>
        </div>
    )
}

