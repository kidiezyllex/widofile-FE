export interface IUserRequest {
    username?: string
    password?: string
    rank?: string
    position?: string
    gender?: boolean
    dob?: string
    department?: string
    division?: string
    is_active?: boolean
    fullname?: string
    role?: string
  }
  export interface IPasswordRequest {
    old_password?: string
    new_password?: string
   
  }

export interface IUpdateUser {
  name?: string;
  fullName?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
  bio?: string;
  position?: string;
  department?: string;
  skills?: string[];
  avatar?: string;
  role?: string;
}

export interface ICreateUserComment {
  content: string;
  userId: string;
}

export interface IUpdateUserComment {
  content: string;
}

export interface IGetUserCommentsParams {
  userId: string;
}
