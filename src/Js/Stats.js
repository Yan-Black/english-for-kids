import { data } from "./assets"

let statsObject = {
    attemps: 0,
    success: 0,
    failure: 0,
    failWin: function() { 
        let percent =  (this.success + this.failure) / 2 * 100 + '%'  
            return percent
    }
} 

let map = new Map()

for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[i].length; j++) {
        map.set(arr[i][j].word, statsObject)
    }
}

// export let statsObject = {
//       cry: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//         },
//       dance: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       dive: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       draw: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       fish: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       fly: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       hug: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       jump: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       open: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       play: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       point: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       ride: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       run: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       sing: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       skip: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       swim: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       argue: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       build: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       carry: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       catch: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       drive: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       drop: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       pull: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       push: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       big: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       small: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       fast: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       slow: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       friendly: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       unfriendly: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       old: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       young: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       cat: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       chick: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       chicken: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       dog: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       horse: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       pig: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       rabbit: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       sheep: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       bird: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       fish: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       frog: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       giraffe: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       lion: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       mouse: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       turtle: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       dolphin: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       skirt: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       pants: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       blouse: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       dress: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       boot: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       shirt: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       coat: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       shoe: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       sad: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       angry: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       happy: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       tired: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       surprised: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       scared: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       smile: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       },
//       laugh: {
//         attemps: 0,
//         success: 0,
//         failure: 0,
//         failWin: function(success, failure) { 
//             let percent =  (success +failure) / 2 * 100 + '%'  
//             return percent
//         } 
//       }
//   }