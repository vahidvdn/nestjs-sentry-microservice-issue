import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class MyAppGuard {
  constructor() {}

  canActivate(context: ExecutionContext) {
    console.log(context.getType()); // rpc

    // this work in http request
    // but in mqtt, it generates a weird error
    return false;
  }
}
