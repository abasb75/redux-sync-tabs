import { configureStore as toolkitConfigureStore } from "@reduxjs/toolkit";
import { ConfigureStoreOptions } from "@reduxjs/toolkit";
import { PREFIX } from "./createSlice";

function configureStore(options:ConfigureStoreOptions){
    
    const store = toolkitConfigureStore(options);
        
    window.addEventListener('storage',(e:StorageEvent)=>{
        if(!e.key?.includes(PREFIX)){
            return;
        }
        if(e.newValue === e.oldValue){
            return;
        }
        try{
            const data = JSON.parse(e.newValue || '');
            const key = data.key;
            const payload = data.value;
            console.log(key,payload)
            store.dispatch({
                type:'SYNC_DATA_REDUX_TOOLKIT_CROSS_TABS_SYNCS',
                key:data.key,
                payload:data.value,
            });
        }catch{

        }
    });

    return store;
}

export default configureStore;