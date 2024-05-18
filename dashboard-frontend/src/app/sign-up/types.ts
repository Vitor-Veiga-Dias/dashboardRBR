import { UserRoleEnum } from '@/common/users/enums/userRole.enum';

export interface SignUpDataProps {
  name: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}
