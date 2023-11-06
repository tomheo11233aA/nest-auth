import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() signUpDTO: SignupDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDTO);
  }
  @Get('/login')
  login(@Body() loginDTO: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDTO);
  }
}
