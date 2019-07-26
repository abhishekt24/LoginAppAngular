import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });
  it('should create obejct with user defined values',()=>{
    let login:Login=new Login({
      'userName':'abhi',
      'password':'shek'
    });
    expect(login.userName).toEqual('abhi');
    expect(login.password).toEqual('shek');

  });
});
