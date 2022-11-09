export interface iTechs {
  html?: boolean;
  css?: boolean;
  js?: boolean;
  react?: boolean;
  ts?: boolean;
  angular?: boolean;
  vuejs?: boolean;
  php?: boolean;
  c?: boolean;
  sass?: boolean;
  node?: boolean;
}

export interface iFormEditProfile {
  bio: string;
  name: string;
  email: string;
  password: string;
  isRecruiter: true;
  city: string;
  escolaridade: string;
  cargo: string;
  isWork: boolean;
  linkedin: string;
  github: string;
  portfolio: string;
  tech?: iTechs;
  fotoDoPerfil: string;


}

export interface iApiError {
  error: string;
}
