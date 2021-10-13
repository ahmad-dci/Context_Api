import React, {useContext} from 'react';
import { StorageContext } from '../context/StorageContext';

export default function Gallery() {
    const mainState = useContext(StorageContext);
    switch (mainState.state.searchStatus) {
        case 'DONE':
            // return rendered images
            
            break;
        case 'LOADING':
                // return it is still loading 
                
                break;
        case 'ERROR':
                // return error message
                    
                    break;
    
        default:
            // return nothing
            return (
                <div>
                    
                </div>
            )
            break;
    }
    
}
