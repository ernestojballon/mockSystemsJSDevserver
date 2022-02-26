import { of } from "rxjs";


export const getStateObservable = ()=>of({auth:false,token:"hola from store"})

