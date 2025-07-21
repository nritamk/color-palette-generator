import { configureStore, createSlice } from "@reduxjs/toolkit";


// {
//     id:index+1,
//     type:(()=>{
//       if(index===0){
//         return 'Background Primary'
//       }
//       else if(index===1){
//         return 'Background Secondary'
//       }
//       else if(index===2){
//         return 'Primary Accent'
//       }
//       else if(index===3){
//         return 'Secondary Accent'
//       }
//       else if(index===4){
//         return 'Text Color'
//       }
//     })(),
//     name: color?.name?.value,
//     hex: color?.hex?.value,
//     tempHex: color?.hex?.value,
//     lock:false
//   }



const colorSlice=createSlice({
    name:'colors',
    initialState:{
        colors:[
            {
                id:1,
                type:'Background Primary',
                name: 'Slate dark',
                hex: '#0f172a',
                tempHex: '#0f172a',
                lock:false
            },
            {
                id:2,
                type:'Background Secondary',
                name: 'Slate light',
                hex: '#1e293b',
                tempHex: '#1e293b',
                lock:false
            },
            {
                id:3,
                type:'Primary Accent',
                name: 'Cyan',
                hex: '#22d3ee',
                tempHex: '#22d3ee',
                lock:false
            },
            {
                id:4,
                type:'Secondary Accent',
                name: 'Blue',
                hex: '#3b82f6',
                tempHex: '#3b82f6',
                lock:false
            },
            {
                id:5,
                type:'Text Color',
                name: 'Gray',
                hex: '#d1d5db',
                tempHex: '#d1d5db',
                lock:false
            }
        ]
    },
    reducers:{
        storeNewPalette:(state,action)=>{
            state.colors=action.payload;
        },
        bindTempHex:(state,action)=>{
            const color=state?.colors?.find((x)=>x.id===action.payload.id);
            if(color){
                color.tempHex=action.payload.hex;
            }
        },
        bindColor:(state,action)=>{
            const color=state?.colors?.find((x)=>x.id===action.payload.id);
            if(color){
                color.hex=action.payload.hex;
                color.name=action.payload.name;
            }
        },
        lockColor:(state,action)=>{
            state.colors=state.colors.map((x)=>{
                if(x.id===action.payload.id){
                    return {
                        ...x,
                        lock:!x?.lock
                    }
                }
                else{
                    return {
                        ...x,
                        lock:false
                    }
                };
            })
        },
    }
});


export const store=configureStore({
    reducer:colorSlice.reducer
})

export const {storeNewPalette,bindTempHex,bindColor,lockColor}=colorSlice.actions;