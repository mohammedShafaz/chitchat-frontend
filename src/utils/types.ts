export interface UserRegistration {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    profilePicture?: File | string;
    coverPicture?: File | string;
    profileBio?: string;
};