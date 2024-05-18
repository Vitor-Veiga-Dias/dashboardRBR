import { UserRoleEnum } from '../../common/users/enums/userRole.enum';

export interface SignInBody {
  email: string;
  password: string;
}

export interface SignUpBody {
  name: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}
