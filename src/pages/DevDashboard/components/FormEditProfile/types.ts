export interface iTechs {
  html: true;
  css: true;
  js: true;
  react: true;
  ts: true;
  angular: true;
  vuejs: true;
  php: true;
  c: true;
}

export interface iFormEditProfile {
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
  tech: iTechs;
}
