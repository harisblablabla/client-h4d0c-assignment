import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable()
export class RequestHelper {

    private contentPathURL: string;
    private pathParameters: Map<string, string>;

    constructor(private http: HttpClient) {

    }


    get(path, parameters) {
        this.setContentPathURL(path);
        this.setPathParameters(parameters);
        return this.requestGet();
      }

      requestGet(): any {
        return this.http
            .get(this.getFullRequestURL())
            .pipe(
                map((response) => {
                    return response
                }),
                catchError((error) => {
                    return throwError(error);
                  })
            );
    }


    setPathParameters(pathParameters: Map<string, string>): RequestHelper {
        this.pathParameters = pathParameters;
        return this;
    }

    setContentPathURL(contentPathURL: string): RequestHelper {
        this.contentPathURL = contentPathURL;
        return this;
    }

    getContentPathURL() {
        return this.contentPathURL;
    }

    getFullRequestURL() {
        let fullRequestURL =  this.getContentPathURL();

        if(this.pathParameters) {
            const copyParams = Object.assign({}, this.pathParameters)
            fullRequestURL = fullRequestURL+'?'

            Object.keys(copyParams).forEach(key => {
                const currentParam = copyParams[key]
                fullRequestURL = `${fullRequestURL+key}=${currentParam}&`
            })

            fullRequestURL = fullRequestURL.slice(0,-1)
            return fullRequestURL
        }

        return fullRequestURL;
    }


}