import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  // constructor(private readonly reflector: Reflector) {
  //   super();
  // }
  // canActivate(context: ExecutionContext) {
  //   const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  //     context.getHandler(),
  //     context.getClass(),
  //   ]);
  //   if (isPublic) {
  //     return true;
  //   }
  //   return super.canActivate(context);
  // }
}
