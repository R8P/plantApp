export type InitialState = {
  isWelcomeDone: boolean;
  premium_modal_visible: boolean;
};

export type WelcomeStackParams = {
  WelcomeScreen: undefined;
};

export type AppStackParams = {
  HomeScreen: undefined;
  DiagnoseScreen: undefined;
  MyGardenScreen: undefined;
  ProfileScreen: undefined;
  CameraScreen: undefined;
};

export type QuestionsType = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};
export type CategoriesType = {
  id: number;
  name: string;
  title: string;
  image: any;
};
