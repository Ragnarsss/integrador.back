
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProfessionalInput {
    exampleField?: Nullable<number>;
}

export interface UpdateProfessionalInput {
    id: number;
}

export interface CreateServiceInput {
    exampleField?: Nullable<number>;
}

export interface UpdateServiceInput {
    id: number;
}

export interface CreateUserInput {
    userName: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    userName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Professional {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    professionals(): Nullable<Professional>[] | Promise<Nullable<Professional>[]>;
    professional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    services(): Nullable<Service>[] | Promise<Nullable<Service>[]>;
    service(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createProfessional(createProfessionalInput: CreateProfessionalInput): Professional | Promise<Professional>;
    updateProfessional(updateProfessionalInput: UpdateProfessionalInput): Professional | Promise<Professional>;
    removeProfessional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    createService(createServiceInput: CreateServiceInput): Service | Promise<Service>;
    updateService(updateServiceInput: UpdateServiceInput): Service | Promise<Service>;
    removeService(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    createUser(input: CreateUserInput): User | Promise<User>;
    updateUser(id: string, input: UpdateUserInput): User | Promise<User>;
    deleteUser(id: string): User | Promise<User>;
}

export interface Service {
    exampleField?: Nullable<number>;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type Nullable<T> = T | null;
