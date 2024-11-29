import { URL } from 'url';
import { parse } from 'url';

export const getURL = () => {
    const adr = "http://localhost:8080/default.htm?year=2017&month=february"
    const q = parse(adr,true)
    return q.search
}