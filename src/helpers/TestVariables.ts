import * as dotenv from 'dotenv';
dotenv.config();

class TestVariables {
  private readonly _validEmail: string;
  private readonly _validPassword: string;
  private readonly _registeredEmail: string;
  private readonly _unregisteredEmail: string;
  private readonly _invalidToken: string;
  private readonly _todoText: string;

  constructor(processEnv: NodeJS.ProcessEnv = process.env) {
    this.validateEnvVariables(processEnv);

    this._validEmail = processEnv.VALID_EMAIL as string;
    this._validPassword = processEnv.VALID_PASSWORD as string;
    this._registeredEmail = processEnv.REGISTERED_EMAIL as string;
    this._unregisteredEmail = processEnv.UNREGISTERED_EMAIL as string;
    this._invalidToken = processEnv.INVALID_TOKEN as string;
    this._todoText = processEnv.INVALID_TOKEN as string;
  }

  public get validEmail() {
    return this._validEmail;
  }

  public get validPassword() {
    return this._validPassword;
  }

  public get registeredEmail() {
    return this._registeredEmail;
  }

  public get unregisteredEmail() {
    return this._unregisteredEmail;
  }

  public get invalidToken() {
    return this._invalidToken;
  }

  public get todoText() {
    return this._todoText;
  }

  private validateEnvVariables(processEnv: NodeJS.ProcessEnv) {
    if (
      !processEnv.VALID_EMAIL ||
      !processEnv.VALID_PASSWORD ||
      !processEnv.REGISTERED_EMAIL ||
      !processEnv.REFRESH_SECRET ||
      !processEnv.UNREGISTERED_EMAIL ||
      !processEnv.INVALID_TOKEN
    ) {
      throw new Error('Test enviroment variables missing');
    }
  }
}

export default TestVariables;
