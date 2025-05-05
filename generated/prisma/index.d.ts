
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_profiles
 * 
 */
export type user_profiles = $Result.DefaultSelection<Prisma.$user_profilesPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model product_material
 * 
 */
export type product_material = $Result.DefaultSelection<Prisma.$product_materialPayload>
/**
 * Model units
 * 
 */
export type units = $Result.DefaultSelection<Prisma.$unitsPayload>
/**
 * Model suppliers
 * 
 */
export type suppliers = $Result.DefaultSelection<Prisma.$suppliersPayload>
/**
 * Model materials
 * 
 */
export type materials = $Result.DefaultSelection<Prisma.$materialsPayload>
/**
 * Model material_stock
 * 
 */
export type material_stock = $Result.DefaultSelection<Prisma.$material_stockPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_profiles`: Exposes CRUD operations for the **user_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_profiles
    * const user_profiles = await prisma.user_profiles.findMany()
    * ```
    */
  get user_profiles(): Prisma.user_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_material`: Exposes CRUD operations for the **product_material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_materials
    * const product_materials = await prisma.product_material.findMany()
    * ```
    */
  get product_material(): Prisma.product_materialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.units`: Exposes CRUD operations for the **units** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.units.findMany()
    * ```
    */
  get units(): Prisma.unitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material_stock`: Exposes CRUD operations for the **material_stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Material_stocks
    * const material_stocks = await prisma.material_stock.findMany()
    * ```
    */
  get material_stock(): Prisma.material_stockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    user_profiles: 'user_profiles',
    roles: 'roles',
    categories: 'categories',
    products: 'products',
    product_material: 'product_material',
    units: 'units',
    suppliers: 'suppliers',
    materials: 'materials',
    material_stock: 'material_stock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "user_profiles" | "roles" | "categories" | "products" | "product_material" | "units" | "suppliers" | "materials" | "material_stock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_profiles: {
        payload: Prisma.$user_profilesPayload<ExtArgs>
        fields: Prisma.user_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findFirst: {
            args: Prisma.user_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findMany: {
            args: Prisma.user_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          create: {
            args: Prisma.user_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          createMany: {
            args: Prisma.user_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          delete: {
            args: Prisma.user_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          update: {
            args: Prisma.user_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          deleteMany: {
            args: Prisma.user_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          upsert: {
            args: Prisma.user_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          aggregate: {
            args: Prisma.User_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_profiles>
          }
          groupBy: {
            args: Prisma.user_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<User_profilesCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      product_material: {
        payload: Prisma.$product_materialPayload<ExtArgs>
        fields: Prisma.product_materialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_materialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_materialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          findFirst: {
            args: Prisma.product_materialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_materialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          findMany: {
            args: Prisma.product_materialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>[]
          }
          create: {
            args: Prisma.product_materialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          createMany: {
            args: Prisma.product_materialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_materialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>[]
          }
          delete: {
            args: Prisma.product_materialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          update: {
            args: Prisma.product_materialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          deleteMany: {
            args: Prisma.product_materialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_materialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_materialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>[]
          }
          upsert: {
            args: Prisma.product_materialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_materialPayload>
          }
          aggregate: {
            args: Prisma.Product_materialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_material>
          }
          groupBy: {
            args: Prisma.product_materialGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_materialGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_materialCountArgs<ExtArgs>
            result: $Utils.Optional<Product_materialCountAggregateOutputType> | number
          }
        }
      }
      units: {
        payload: Prisma.$unitsPayload<ExtArgs>
        fields: Prisma.unitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findFirst: {
            args: Prisma.unitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findMany: {
            args: Prisma.unitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          create: {
            args: Prisma.unitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          createMany: {
            args: Prisma.unitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          delete: {
            args: Prisma.unitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          update: {
            args: Prisma.unitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          deleteMany: {
            args: Prisma.unitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          upsert: {
            args: Prisma.unitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          aggregate: {
            args: Prisma.UnitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnits>
          }
          groupBy: {
            args: Prisma.unitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.unitsCountArgs<ExtArgs>
            result: $Utils.Optional<UnitsCountAggregateOutputType> | number
          }
        }
      }
      suppliers: {
        payload: Prisma.$suppliersPayload<ExtArgs>
        fields: Prisma.suppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findFirst: {
            args: Prisma.suppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findMany: {
            args: Prisma.suppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          create: {
            args: Prisma.suppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          createMany: {
            args: Prisma.suppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          delete: {
            args: Prisma.suppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          update: {
            args: Prisma.suppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          deleteMany: {
            args: Prisma.suppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          upsert: {
            args: Prisma.suppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.suppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.suppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      materials: {
        payload: Prisma.$materialsPayload<ExtArgs>
        fields: Prisma.materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findFirst: {
            args: Prisma.materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          findMany: {
            args: Prisma.materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          create: {
            args: Prisma.materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          createMany: {
            args: Prisma.materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.materialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          delete: {
            args: Prisma.materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          update: {
            args: Prisma.materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          deleteMany: {
            args: Prisma.materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.materialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>[]
          }
          upsert: {
            args: Prisma.materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$materialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.materialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      material_stock: {
        payload: Prisma.$material_stockPayload<ExtArgs>
        fields: Prisma.material_stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.material_stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.material_stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          findFirst: {
            args: Prisma.material_stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.material_stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          findMany: {
            args: Prisma.material_stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>[]
          }
          create: {
            args: Prisma.material_stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          createMany: {
            args: Prisma.material_stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.material_stockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>[]
          }
          delete: {
            args: Prisma.material_stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          update: {
            args: Prisma.material_stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          deleteMany: {
            args: Prisma.material_stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.material_stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.material_stockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>[]
          }
          upsert: {
            args: Prisma.material_stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$material_stockPayload>
          }
          aggregate: {
            args: Prisma.Material_stockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial_stock>
          }
          groupBy: {
            args: Prisma.material_stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<Material_stockGroupByOutputType>[]
          }
          count: {
            args: Prisma.material_stockCountArgs<ExtArgs>
            result: $Utils.Optional<Material_stockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    user_profiles?: user_profilesOmit
    roles?: rolesOmit
    categories?: categoriesOmit
    products?: productsOmit
    product_material?: product_materialOmit
    units?: unitsOmit
    suppliers?: suppliersOmit
    materials?: materialsOmit
    material_stock?: material_stockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_material: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_material?: boolean | ProductsCountOutputTypeCountProduct_materialArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_materialWhereInput
  }


  /**
   * Count Type UnitsCountOutputType
   */

  export type UnitsCountOutputType = {
    materials: number
  }

  export type UnitsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | UnitsCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsCountOutputType
     */
    select?: UnitsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    materials: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | SuppliersCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
  }


  /**
   * Count Type MaterialsCountOutputType
   */

  export type MaterialsCountOutputType = {
    material_stock: number
  }

  export type MaterialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material_stock?: boolean | MaterialsCountOutputTypeCountMaterial_stockArgs
  }

  // Custom InputTypes
  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialsCountOutputType
     */
    select?: MaterialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeCountMaterial_stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_stockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    usr_id: number | null
    rol_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    usr_id: number | null
    rol_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    usr_id: number | null
    rol_id: number | null
    username: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    address: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    usr_id: number | null
    rol_id: number | null
    username: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    address: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    usr_id: number
    rol_id: number
    username: number
    email: number
    first_name: number
    last_name: number
    phone_number: number
    address: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    usr_id?: true
    rol_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type UsersSumAggregateInputType = {
    usr_id?: true
    rol_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type UsersMinAggregateInputType = {
    usr_id?: true
    rol_id?: true
    username?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type UsersMaxAggregateInputType = {
    usr_id?: true
    rol_id?: true
    username?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type UsersCountAggregateInputType = {
    usr_id?: true
    rol_id?: true
    username?: true
    email?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    usr_id: number
    rol_id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usr_id?: boolean
    rol_id?: boolean
    username?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    user_profiles?: boolean | users$user_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usr_id?: boolean
    rol_id?: boolean
    username?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usr_id?: boolean
    rol_id?: boolean
    username?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    usr_id?: boolean
    rol_id?: boolean
    username?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usr_id" | "rol_id" | "username" | "email" | "first_name" | "last_name" | "phone_number" | "address" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    user_profiles?: boolean | users$user_profilesArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | rolesDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      roles: Prisma.$rolesPayload<ExtArgs>
      user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      usr_id: number
      rol_id: number
      username: string
      email: string
      first_name: string
      last_name: string
      phone_number: string
      address: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `usr_id`
     * const usersWithUsr_idOnly = await prisma.users.findMany({ select: { usr_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `usr_id`
     * const usersWithUsr_idOnly = await prisma.users.createManyAndReturn({
     *   select: { usr_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `usr_id`
     * const usersWithUsr_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { usr_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_profiles<T extends users$user_profilesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_profilesArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly usr_id: FieldRef<"users", 'Int'>
    readonly rol_id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly ctime: FieldRef<"users", 'DateTime'>
    readonly cusr_id: FieldRef<"users", 'Int'>
    readonly mtime: FieldRef<"users", 'DateTime'>
    readonly musr_id: FieldRef<"users", 'Int'>
    readonly dtime: FieldRef<"users", 'DateTime'>
    readonly dusr_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_profiles
   */
  export type users$user_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    where?: user_profilesWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model user_profiles
   */

  export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  export type User_profilesAvgAggregateOutputType = {
    usp_id: number | null
    usr_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type User_profilesSumAggregateOutputType = {
    usp_id: number | null
    usr_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type User_profilesMinAggregateOutputType = {
    usp_id: number | null
    usr_id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    birth_date: string | null
    gender: string | null
    phone_number: string | null
    address: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type User_profilesMaxAggregateOutputType = {
    usp_id: number | null
    usr_id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    birth_date: string | null
    gender: string | null
    phone_number: string | null
    address: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type User_profilesCountAggregateOutputType = {
    usp_id: number
    usr_id: number
    first_name: number
    middle_name: number
    last_name: number
    birth_date: number
    gender: number
    phone_number: number
    address: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type User_profilesAvgAggregateInputType = {
    usp_id?: true
    usr_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type User_profilesSumAggregateInputType = {
    usp_id?: true
    usr_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type User_profilesMinAggregateInputType = {
    usp_id?: true
    usr_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    birth_date?: true
    gender?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type User_profilesMaxAggregateInputType = {
    usp_id?: true
    usr_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    birth_date?: true
    gender?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type User_profilesCountAggregateInputType = {
    usp_id?: true
    usr_id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    birth_date?: true
    gender?: true
    phone_number?: true
    address?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type User_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to aggregate.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_profiles
    **/
    _count?: true | User_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_profilesMaxAggregateInputType
  }

  export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_profiles[P]>
      : GetScalarType<T[P], AggregateUser_profiles[P]>
  }




  export type user_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithAggregationInput | user_profilesOrderByWithAggregationInput[]
    by: User_profilesScalarFieldEnum[] | User_profilesScalarFieldEnum
    having?: user_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_profilesCountAggregateInputType | true
    _avg?: User_profilesAvgAggregateInputType
    _sum?: User_profilesSumAggregateInputType
    _min?: User_profilesMinAggregateInputType
    _max?: User_profilesMaxAggregateInputType
  }

  export type User_profilesGroupByOutputType = {
    usp_id: number
    usr_id: number
    first_name: string
    middle_name: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
        }
      >
    >


  export type user_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usp_id?: boolean
    usr_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usp_id?: boolean
    usr_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usp_id?: boolean
    usr_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectScalar = {
    usp_id?: boolean
    usr_id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    gender?: boolean
    phone_number?: boolean
    address?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type user_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usp_id" | "usr_id" | "first_name" | "middle_name" | "last_name" | "birth_date" | "gender" | "phone_number" | "address" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["user_profiles"]>
  export type user_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_profiles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usp_id: number
      usr_id: number
      first_name: string
      middle_name: string | null
      last_name: string
      birth_date: string
      gender: string
      phone_number: string
      address: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["user_profiles"]>
    composites: {}
  }

  type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = $Result.GetResult<Prisma.$user_profilesPayload, S>

  type user_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_profilesCountAggregateInputType | true
    }

  export interface user_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'], meta: { name: 'user_profiles' } }
    /**
     * Find zero or one User_profiles that matches the filter.
     * @param {user_profilesFindUniqueArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profilesFindUniqueArgs>(args: SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_profilesFindUniqueOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profilesFindFirstArgs>(args?: SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profiles.findMany()
     * 
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profiles.findMany({ take: 10 })
     * 
     * // Only select the `usp_id`
     * const user_profilesWithUsp_idOnly = await prisma.user_profiles.findMany({ select: { usp_id: true } })
     * 
     */
    findMany<T extends user_profilesFindManyArgs>(args?: SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_profiles.
     * @param {user_profilesCreateArgs} args - Arguments to create a User_profiles.
     * @example
     * // Create one User_profiles
     * const User_profiles = await prisma.user_profiles.create({
     *   data: {
     *     // ... data to create a User_profiles
     *   }
     * })
     * 
     */
    create<T extends user_profilesCreateArgs>(args: SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_profiles.
     * @param {user_profilesCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_profilesCreateManyArgs>(args?: SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profilesCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_profiles and only return the `usp_id`
     * const user_profilesWithUsp_idOnly = await prisma.user_profiles.createManyAndReturn({
     *   select: { usp_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_profiles.
     * @param {user_profilesDeleteArgs} args - Arguments to delete one User_profiles.
     * @example
     * // Delete one User_profiles
     * const User_profiles = await prisma.user_profiles.delete({
     *   where: {
     *     // ... filter to delete one User_profiles
     *   }
     * })
     * 
     */
    delete<T extends user_profilesDeleteArgs>(args: SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_profiles.
     * @param {user_profilesUpdateArgs} args - Arguments to update one User_profiles.
     * @example
     * // Update one User_profiles
     * const user_profiles = await prisma.user_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_profilesUpdateArgs>(args: SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_profiles.
     * @param {user_profilesDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_profilesUpdateManyArgs>(args: SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles and returns the data updated in the database.
     * @param {user_profilesUpdateManyAndReturnArgs} args - Arguments to update many User_profiles.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_profiles and only return the `usp_id`
     * const user_profilesWithUsp_idOnly = await prisma.user_profiles.updateManyAndReturn({
     *   select: { usp_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_profiles.
     * @param {user_profilesUpsertArgs} args - Arguments to update or create a User_profiles.
     * @example
     * // Update or create a User_profiles
     * const user_profiles = await prisma.user_profiles.upsert({
     *   create: {
     *     // ... data to create a User_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profiles we want to update
     *   }
     * })
     */
    upsert<T extends user_profilesUpsertArgs>(args: SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profiles.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profilesCountArgs>(
      args?: Subset<T, user_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_profilesAggregateArgs>(args: Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>

    /**
     * Group by User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_profilesGroupByArgs['orderBy'] }
        : { orderBy?: user_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_profiles model
   */
  readonly fields: user_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_profiles model
   */
  interface user_profilesFieldRefs {
    readonly usp_id: FieldRef<"user_profiles", 'Int'>
    readonly usr_id: FieldRef<"user_profiles", 'Int'>
    readonly first_name: FieldRef<"user_profiles", 'String'>
    readonly middle_name: FieldRef<"user_profiles", 'String'>
    readonly last_name: FieldRef<"user_profiles", 'String'>
    readonly birth_date: FieldRef<"user_profiles", 'String'>
    readonly gender: FieldRef<"user_profiles", 'String'>
    readonly phone_number: FieldRef<"user_profiles", 'String'>
    readonly address: FieldRef<"user_profiles", 'String'>
    readonly ctime: FieldRef<"user_profiles", 'DateTime'>
    readonly cusr_id: FieldRef<"user_profiles", 'Int'>
    readonly mtime: FieldRef<"user_profiles", 'DateTime'>
    readonly musr_id: FieldRef<"user_profiles", 'Int'>
    readonly dtime: FieldRef<"user_profiles", 'DateTime'>
    readonly dusr_id: FieldRef<"user_profiles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_profiles findUnique
   */
  export type user_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findUniqueOrThrow
   */
  export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findFirst
   */
  export type user_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findFirstOrThrow
   */
  export type user_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findMany
   */
  export type user_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles create
   */
  export type user_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_profiles.
     */
    data: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
  }

  /**
   * user_profiles createMany
   */
  export type user_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profiles createManyAndReturn
   */
  export type user_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profiles update
   */
  export type user_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_profiles.
     */
    data: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
    /**
     * Choose, which user_profiles to update.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles updateMany
   */
  export type user_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
  }

  /**
   * user_profiles updateManyAndReturn
   */
  export type user_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_profiles upsert
   */
  export type user_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_profiles to update in case it exists.
     */
    where: user_profilesWhereUniqueInput
    /**
     * In case the user_profiles found by the `where` argument doesn't exist, create a new user_profiles with this data.
     */
    create: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
    /**
     * In case the user_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
  }

  /**
   * user_profiles delete
   */
  export type user_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
    /**
     * Filter which user_profiles to delete.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles deleteMany
   */
  export type user_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to delete.
     */
    limit?: number
  }

  /**
   * user_profiles without action
   */
  export type user_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_profilesInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    rol_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type RolesSumAggregateOutputType = {
    rol_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type RolesMinAggregateOutputType = {
    rol_id: number | null
    role_code: string | null
    role_name: string | null
    role_description: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type RolesMaxAggregateOutputType = {
    rol_id: number | null
    role_code: string | null
    role_name: string | null
    role_description: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type RolesCountAggregateOutputType = {
    rol_id: number
    role_code: number
    role_name: number
    role_description: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    rol_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type RolesSumAggregateInputType = {
    rol_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type RolesMinAggregateInputType = {
    rol_id?: true
    role_code?: true
    role_name?: true
    role_description?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type RolesMaxAggregateInputType = {
    rol_id?: true
    role_code?: true
    role_name?: true
    role_description?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type RolesCountAggregateInputType = {
    rol_id?: true
    role_code?: true
    role_name?: true
    role_description?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    rol_id: number
    role_code: string
    role_name: string
    role_description: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rol_id?: boolean
    role_code?: boolean
    role_name?: boolean
    role_description?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rol_id?: boolean
    role_code?: boolean
    role_name?: boolean
    role_description?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rol_id?: boolean
    role_code?: boolean
    role_name?: boolean
    role_description?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    rol_id?: boolean
    role_code?: boolean
    role_name?: boolean
    role_description?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rol_id" | "role_code" | "role_name" | "role_description" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      rol_id: number
      role_code: string
      role_name: string
      role_description: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `rol_id`
     * const rolesWithRol_idOnly = await prisma.roles.findMany({ select: { rol_id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `rol_id`
     * const rolesWithRol_idOnly = await prisma.roles.createManyAndReturn({
     *   select: { rol_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `rol_id`
     * const rolesWithRol_idOnly = await prisma.roles.updateManyAndReturn({
     *   select: { rol_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly rol_id: FieldRef<"roles", 'Int'>
    readonly role_code: FieldRef<"roles", 'String'>
    readonly role_name: FieldRef<"roles", 'String'>
    readonly role_description: FieldRef<"roles", 'String'>
    readonly ctime: FieldRef<"roles", 'DateTime'>
    readonly cusr_id: FieldRef<"roles", 'Int'>
    readonly mtime: FieldRef<"roles", 'DateTime'>
    readonly musr_id: FieldRef<"roles", 'Int'>
    readonly dtime: FieldRef<"roles", 'DateTime'>
    readonly dusr_id: FieldRef<"roles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    cat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    cat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    cat_id: number | null
    category_code: string | null
    category_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    cat_id: number | null
    category_code: string | null
    category_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    cat_id: number
    category_code: number
    category_name: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    cat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    cat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    cat_id?: true
    category_code?: true
    category_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type CategoriesMaxAggregateInputType = {
    cat_id?: true
    category_code?: true
    category_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type CategoriesCountAggregateInputType = {
    cat_id?: true
    category_code?: true
    category_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    cat_id: number
    category_code: string
    category_name: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cat_id?: boolean
    category_code?: boolean
    category_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cat_id?: boolean
    category_code?: boolean
    category_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cat_id?: boolean
    category_code?: boolean
    category_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    cat_id?: boolean
    category_code?: boolean
    category_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cat_id" | "category_code" | "category_name" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cat_id: number
      category_code: string
      category_name: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `cat_id`
     * const categoriesWithCat_idOnly = await prisma.categories.findMany({ select: { cat_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `cat_id`
     * const categoriesWithCat_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { cat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `cat_id`
     * const categoriesWithCat_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { cat_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly cat_id: FieldRef<"categories", 'Int'>
    readonly category_code: FieldRef<"categories", 'String'>
    readonly category_name: FieldRef<"categories", 'String'>
    readonly ctime: FieldRef<"categories", 'DateTime'>
    readonly cusr_id: FieldRef<"categories", 'Int'>
    readonly mtime: FieldRef<"categories", 'DateTime'>
    readonly musr_id: FieldRef<"categories", 'Int'>
    readonly dtime: FieldRef<"categories", 'DateTime'>
    readonly dusr_id: FieldRef<"categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    prd_id: number | null
    cat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    prd_id: number | null
    cat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    prd_id: number | null
    cat_id: number | null
    product_code: string | null
    product_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    prd_id: number | null
    cat_id: number | null
    product_code: string | null
    product_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type ProductsCountAggregateOutputType = {
    prd_id: number
    cat_id: number
    product_code: number
    product_name: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    prd_id?: true
    cat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type ProductsSumAggregateInputType = {
    prd_id?: true
    cat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type ProductsMinAggregateInputType = {
    prd_id?: true
    cat_id?: true
    product_code?: true
    product_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type ProductsMaxAggregateInputType = {
    prd_id?: true
    cat_id?: true
    product_code?: true
    product_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type ProductsCountAggregateInputType = {
    prd_id?: true
    cat_id?: true
    product_code?: true
    product_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    prd_id: number
    cat_id: number
    product_code: string
    product_name: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prd_id?: boolean
    cat_id?: boolean
    product_code?: boolean
    product_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    product_material?: boolean | products$product_materialArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prd_id?: boolean
    cat_id?: boolean
    product_code?: boolean
    product_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prd_id?: boolean
    cat_id?: boolean
    product_code?: boolean
    product_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    prd_id?: boolean
    cat_id?: boolean
    product_code?: boolean
    product_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prd_id" | "cat_id" | "product_code" | "product_name" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    product_material?: boolean | products$product_materialArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
      product_material: Prisma.$product_materialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      prd_id: number
      cat_id: number
      product_code: string
      product_name: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `prd_id`
     * const productsWithPrd_idOnly = await prisma.products.findMany({ select: { prd_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `prd_id`
     * const productsWithPrd_idOnly = await prisma.products.createManyAndReturn({
     *   select: { prd_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `prd_id`
     * const productsWithPrd_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { prd_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product_material<T extends products$product_materialArgs<ExtArgs> = {}>(args?: Subset<T, products$product_materialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly prd_id: FieldRef<"products", 'Int'>
    readonly cat_id: FieldRef<"products", 'Int'>
    readonly product_code: FieldRef<"products", 'String'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly ctime: FieldRef<"products", 'DateTime'>
    readonly cusr_id: FieldRef<"products", 'Int'>
    readonly mtime: FieldRef<"products", 'DateTime'>
    readonly musr_id: FieldRef<"products", 'Int'>
    readonly dtime: FieldRef<"products", 'DateTime'>
    readonly dusr_id: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_material
   */
  export type products$product_materialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    where?: product_materialWhereInput
    orderBy?: product_materialOrderByWithRelationInput | product_materialOrderByWithRelationInput[]
    cursor?: product_materialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_materialScalarFieldEnum | Product_materialScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model product_material
   */

  export type AggregateProduct_material = {
    _count: Product_materialCountAggregateOutputType | null
    _avg: Product_materialAvgAggregateOutputType | null
    _sum: Product_materialSumAggregateOutputType | null
    _min: Product_materialMinAggregateOutputType | null
    _max: Product_materialMaxAggregateOutputType | null
  }

  export type Product_materialAvgAggregateOutputType = {
    pmt_id: number | null
    prd_id: number | null
    mat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type Product_materialSumAggregateOutputType = {
    pmt_id: number | null
    prd_id: number | null
    mat_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type Product_materialMinAggregateOutputType = {
    pmt_id: number | null
    prd_id: number | null
    mat_id: number | null
    quantity: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type Product_materialMaxAggregateOutputType = {
    pmt_id: number | null
    prd_id: number | null
    mat_id: number | null
    quantity: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type Product_materialCountAggregateOutputType = {
    pmt_id: number
    prd_id: number
    mat_id: number
    quantity: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type Product_materialAvgAggregateInputType = {
    pmt_id?: true
    prd_id?: true
    mat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type Product_materialSumAggregateInputType = {
    pmt_id?: true
    prd_id?: true
    mat_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type Product_materialMinAggregateInputType = {
    pmt_id?: true
    prd_id?: true
    mat_id?: true
    quantity?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type Product_materialMaxAggregateInputType = {
    pmt_id?: true
    prd_id?: true
    mat_id?: true
    quantity?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type Product_materialCountAggregateInputType = {
    pmt_id?: true
    prd_id?: true
    mat_id?: true
    quantity?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type Product_materialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_material to aggregate.
     */
    where?: product_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_materials to fetch.
     */
    orderBy?: product_materialOrderByWithRelationInput | product_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_materials
    **/
    _count?: true | Product_materialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_materialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_materialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_materialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_materialMaxAggregateInputType
  }

  export type GetProduct_materialAggregateType<T extends Product_materialAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_material]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_material[P]>
      : GetScalarType<T[P], AggregateProduct_material[P]>
  }




  export type product_materialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_materialWhereInput
    orderBy?: product_materialOrderByWithAggregationInput | product_materialOrderByWithAggregationInput[]
    by: Product_materialScalarFieldEnum[] | Product_materialScalarFieldEnum
    having?: product_materialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_materialCountAggregateInputType | true
    _avg?: Product_materialAvgAggregateInputType
    _sum?: Product_materialSumAggregateInputType
    _min?: Product_materialMinAggregateInputType
    _max?: Product_materialMaxAggregateInputType
  }

  export type Product_materialGroupByOutputType = {
    pmt_id: number
    prd_id: number
    mat_id: number
    quantity: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: Product_materialCountAggregateOutputType | null
    _avg: Product_materialAvgAggregateOutputType | null
    _sum: Product_materialSumAggregateOutputType | null
    _min: Product_materialMinAggregateOutputType | null
    _max: Product_materialMaxAggregateOutputType | null
  }

  type GetProduct_materialGroupByPayload<T extends product_materialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_materialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_materialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_materialGroupByOutputType[P]>
            : GetScalarType<T[P], Product_materialGroupByOutputType[P]>
        }
      >
    >


  export type product_materialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pmt_id?: boolean
    prd_id?: boolean
    mat_id?: boolean
    quantity?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_material"]>

  export type product_materialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pmt_id?: boolean
    prd_id?: boolean
    mat_id?: boolean
    quantity?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_material"]>

  export type product_materialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pmt_id?: boolean
    prd_id?: boolean
    mat_id?: boolean
    quantity?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_material"]>

  export type product_materialSelectScalar = {
    pmt_id?: boolean
    prd_id?: boolean
    mat_id?: boolean
    quantity?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type product_materialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pmt_id" | "prd_id" | "mat_id" | "quantity" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["product_material"]>
  export type product_materialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_materialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_materialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_materialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_material"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pmt_id: number
      prd_id: number
      mat_id: number
      quantity: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["product_material"]>
    composites: {}
  }

  type product_materialGetPayload<S extends boolean | null | undefined | product_materialDefaultArgs> = $Result.GetResult<Prisma.$product_materialPayload, S>

  type product_materialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_materialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_materialCountAggregateInputType | true
    }

  export interface product_materialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_material'], meta: { name: 'product_material' } }
    /**
     * Find zero or one Product_material that matches the filter.
     * @param {product_materialFindUniqueArgs} args - Arguments to find a Product_material
     * @example
     * // Get one Product_material
     * const product_material = await prisma.product_material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_materialFindUniqueArgs>(args: SelectSubset<T, product_materialFindUniqueArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_materialFindUniqueOrThrowArgs} args - Arguments to find a Product_material
     * @example
     * // Get one Product_material
     * const product_material = await prisma.product_material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_materialFindUniqueOrThrowArgs>(args: SelectSubset<T, product_materialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialFindFirstArgs} args - Arguments to find a Product_material
     * @example
     * // Get one Product_material
     * const product_material = await prisma.product_material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_materialFindFirstArgs>(args?: SelectSubset<T, product_materialFindFirstArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialFindFirstOrThrowArgs} args - Arguments to find a Product_material
     * @example
     * // Get one Product_material
     * const product_material = await prisma.product_material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_materialFindFirstOrThrowArgs>(args?: SelectSubset<T, product_materialFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_materials
     * const product_materials = await prisma.product_material.findMany()
     * 
     * // Get first 10 Product_materials
     * const product_materials = await prisma.product_material.findMany({ take: 10 })
     * 
     * // Only select the `pmt_id`
     * const product_materialWithPmt_idOnly = await prisma.product_material.findMany({ select: { pmt_id: true } })
     * 
     */
    findMany<T extends product_materialFindManyArgs>(args?: SelectSubset<T, product_materialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_material.
     * @param {product_materialCreateArgs} args - Arguments to create a Product_material.
     * @example
     * // Create one Product_material
     * const Product_material = await prisma.product_material.create({
     *   data: {
     *     // ... data to create a Product_material
     *   }
     * })
     * 
     */
    create<T extends product_materialCreateArgs>(args: SelectSubset<T, product_materialCreateArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_materials.
     * @param {product_materialCreateManyArgs} args - Arguments to create many Product_materials.
     * @example
     * // Create many Product_materials
     * const product_material = await prisma.product_material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_materialCreateManyArgs>(args?: SelectSubset<T, product_materialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_materials and returns the data saved in the database.
     * @param {product_materialCreateManyAndReturnArgs} args - Arguments to create many Product_materials.
     * @example
     * // Create many Product_materials
     * const product_material = await prisma.product_material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_materials and only return the `pmt_id`
     * const product_materialWithPmt_idOnly = await prisma.product_material.createManyAndReturn({
     *   select: { pmt_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_materialCreateManyAndReturnArgs>(args?: SelectSubset<T, product_materialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_material.
     * @param {product_materialDeleteArgs} args - Arguments to delete one Product_material.
     * @example
     * // Delete one Product_material
     * const Product_material = await prisma.product_material.delete({
     *   where: {
     *     // ... filter to delete one Product_material
     *   }
     * })
     * 
     */
    delete<T extends product_materialDeleteArgs>(args: SelectSubset<T, product_materialDeleteArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_material.
     * @param {product_materialUpdateArgs} args - Arguments to update one Product_material.
     * @example
     * // Update one Product_material
     * const product_material = await prisma.product_material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_materialUpdateArgs>(args: SelectSubset<T, product_materialUpdateArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_materials.
     * @param {product_materialDeleteManyArgs} args - Arguments to filter Product_materials to delete.
     * @example
     * // Delete a few Product_materials
     * const { count } = await prisma.product_material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_materialDeleteManyArgs>(args?: SelectSubset<T, product_materialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_materials
     * const product_material = await prisma.product_material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_materialUpdateManyArgs>(args: SelectSubset<T, product_materialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_materials and returns the data updated in the database.
     * @param {product_materialUpdateManyAndReturnArgs} args - Arguments to update many Product_materials.
     * @example
     * // Update many Product_materials
     * const product_material = await prisma.product_material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_materials and only return the `pmt_id`
     * const product_materialWithPmt_idOnly = await prisma.product_material.updateManyAndReturn({
     *   select: { pmt_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_materialUpdateManyAndReturnArgs>(args: SelectSubset<T, product_materialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_material.
     * @param {product_materialUpsertArgs} args - Arguments to update or create a Product_material.
     * @example
     * // Update or create a Product_material
     * const product_material = await prisma.product_material.upsert({
     *   create: {
     *     // ... data to create a Product_material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_material we want to update
     *   }
     * })
     */
    upsert<T extends product_materialUpsertArgs>(args: SelectSubset<T, product_materialUpsertArgs<ExtArgs>>): Prisma__product_materialClient<$Result.GetResult<Prisma.$product_materialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialCountArgs} args - Arguments to filter Product_materials to count.
     * @example
     * // Count the number of Product_materials
     * const count = await prisma.product_material.count({
     *   where: {
     *     // ... the filter for the Product_materials we want to count
     *   }
     * })
    **/
    count<T extends product_materialCountArgs>(
      args?: Subset<T, product_materialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_materialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_materialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_materialAggregateArgs>(args: Subset<T, Product_materialAggregateArgs>): Prisma.PrismaPromise<GetProduct_materialAggregateType<T>>

    /**
     * Group by Product_material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_materialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_materialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_materialGroupByArgs['orderBy'] }
        : { orderBy?: product_materialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_materialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_materialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_material model
   */
  readonly fields: product_materialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_materialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_material model
   */
  interface product_materialFieldRefs {
    readonly pmt_id: FieldRef<"product_material", 'Int'>
    readonly prd_id: FieldRef<"product_material", 'Int'>
    readonly mat_id: FieldRef<"product_material", 'Int'>
    readonly quantity: FieldRef<"product_material", 'String'>
    readonly ctime: FieldRef<"product_material", 'DateTime'>
    readonly cusr_id: FieldRef<"product_material", 'Int'>
    readonly mtime: FieldRef<"product_material", 'DateTime'>
    readonly musr_id: FieldRef<"product_material", 'Int'>
    readonly dtime: FieldRef<"product_material", 'DateTime'>
    readonly dusr_id: FieldRef<"product_material", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_material findUnique
   */
  export type product_materialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter, which product_material to fetch.
     */
    where: product_materialWhereUniqueInput
  }

  /**
   * product_material findUniqueOrThrow
   */
  export type product_materialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter, which product_material to fetch.
     */
    where: product_materialWhereUniqueInput
  }

  /**
   * product_material findFirst
   */
  export type product_materialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter, which product_material to fetch.
     */
    where?: product_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_materials to fetch.
     */
    orderBy?: product_materialOrderByWithRelationInput | product_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_materials.
     */
    cursor?: product_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_materials.
     */
    distinct?: Product_materialScalarFieldEnum | Product_materialScalarFieldEnum[]
  }

  /**
   * product_material findFirstOrThrow
   */
  export type product_materialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter, which product_material to fetch.
     */
    where?: product_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_materials to fetch.
     */
    orderBy?: product_materialOrderByWithRelationInput | product_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_materials.
     */
    cursor?: product_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_materials.
     */
    distinct?: Product_materialScalarFieldEnum | Product_materialScalarFieldEnum[]
  }

  /**
   * product_material findMany
   */
  export type product_materialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter, which product_materials to fetch.
     */
    where?: product_materialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_materials to fetch.
     */
    orderBy?: product_materialOrderByWithRelationInput | product_materialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_materials.
     */
    cursor?: product_materialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_materials.
     */
    skip?: number
    distinct?: Product_materialScalarFieldEnum | Product_materialScalarFieldEnum[]
  }

  /**
   * product_material create
   */
  export type product_materialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * The data needed to create a product_material.
     */
    data: XOR<product_materialCreateInput, product_materialUncheckedCreateInput>
  }

  /**
   * product_material createMany
   */
  export type product_materialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_materials.
     */
    data: product_materialCreateManyInput | product_materialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_material createManyAndReturn
   */
  export type product_materialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * The data used to create many product_materials.
     */
    data: product_materialCreateManyInput | product_materialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_material update
   */
  export type product_materialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * The data needed to update a product_material.
     */
    data: XOR<product_materialUpdateInput, product_materialUncheckedUpdateInput>
    /**
     * Choose, which product_material to update.
     */
    where: product_materialWhereUniqueInput
  }

  /**
   * product_material updateMany
   */
  export type product_materialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_materials.
     */
    data: XOR<product_materialUpdateManyMutationInput, product_materialUncheckedUpdateManyInput>
    /**
     * Filter which product_materials to update
     */
    where?: product_materialWhereInput
    /**
     * Limit how many product_materials to update.
     */
    limit?: number
  }

  /**
   * product_material updateManyAndReturn
   */
  export type product_materialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * The data used to update product_materials.
     */
    data: XOR<product_materialUpdateManyMutationInput, product_materialUncheckedUpdateManyInput>
    /**
     * Filter which product_materials to update
     */
    where?: product_materialWhereInput
    /**
     * Limit how many product_materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_material upsert
   */
  export type product_materialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * The filter to search for the product_material to update in case it exists.
     */
    where: product_materialWhereUniqueInput
    /**
     * In case the product_material found by the `where` argument doesn't exist, create a new product_material with this data.
     */
    create: XOR<product_materialCreateInput, product_materialUncheckedCreateInput>
    /**
     * In case the product_material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_materialUpdateInput, product_materialUncheckedUpdateInput>
  }

  /**
   * product_material delete
   */
  export type product_materialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
    /**
     * Filter which product_material to delete.
     */
    where: product_materialWhereUniqueInput
  }

  /**
   * product_material deleteMany
   */
  export type product_materialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_materials to delete
     */
    where?: product_materialWhereInput
    /**
     * Limit how many product_materials to delete.
     */
    limit?: number
  }

  /**
   * product_material without action
   */
  export type product_materialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_material
     */
    select?: product_materialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_material
     */
    omit?: product_materialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_materialInclude<ExtArgs> | null
  }


  /**
   * Model units
   */

  export type AggregateUnits = {
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  export type UnitsAvgAggregateOutputType = {
    unt_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type UnitsSumAggregateOutputType = {
    unt_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type UnitsMinAggregateOutputType = {
    unt_id: number | null
    unit_code: string | null
    unit_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type UnitsMaxAggregateOutputType = {
    unt_id: number | null
    unit_code: string | null
    unit_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type UnitsCountAggregateOutputType = {
    unt_id: number
    unit_code: number
    unit_name: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type UnitsAvgAggregateInputType = {
    unt_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type UnitsSumAggregateInputType = {
    unt_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type UnitsMinAggregateInputType = {
    unt_id?: true
    unit_code?: true
    unit_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type UnitsMaxAggregateInputType = {
    unt_id?: true
    unit_code?: true
    unit_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type UnitsCountAggregateInputType = {
    unt_id?: true
    unit_code?: true
    unit_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type UnitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to aggregate.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units
    **/
    _count?: true | UnitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitsMaxAggregateInputType
  }

  export type GetUnitsAggregateType<T extends UnitsAggregateArgs> = {
        [P in keyof T & keyof AggregateUnits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnits[P]>
      : GetScalarType<T[P], AggregateUnits[P]>
  }




  export type unitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unitsWhereInput
    orderBy?: unitsOrderByWithAggregationInput | unitsOrderByWithAggregationInput[]
    by: UnitsScalarFieldEnum[] | UnitsScalarFieldEnum
    having?: unitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitsCountAggregateInputType | true
    _avg?: UnitsAvgAggregateInputType
    _sum?: UnitsSumAggregateInputType
    _min?: UnitsMinAggregateInputType
    _max?: UnitsMaxAggregateInputType
  }

  export type UnitsGroupByOutputType = {
    unt_id: number
    unit_code: string
    unit_name: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  type GetUnitsGroupByPayload<T extends unitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitsGroupByOutputType[P]>
            : GetScalarType<T[P], UnitsGroupByOutputType[P]>
        }
      >
    >


  export type unitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unt_id?: boolean
    unit_code?: boolean
    unit_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    materials?: boolean | units$materialsArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units"]>

  export type unitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unt_id?: boolean
    unit_code?: boolean
    unit_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["units"]>

  export type unitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unt_id?: boolean
    unit_code?: boolean
    unit_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["units"]>

  export type unitsSelectScalar = {
    unt_id?: boolean
    unit_code?: boolean
    unit_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type unitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unt_id" | "unit_code" | "unit_name" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["units"]>
  export type unitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | units$materialsArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type unitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $unitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "units"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      unt_id: number
      unit_code: string
      unit_name: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["units"]>
    composites: {}
  }

  type unitsGetPayload<S extends boolean | null | undefined | unitsDefaultArgs> = $Result.GetResult<Prisma.$unitsPayload, S>

  type unitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitsCountAggregateInputType | true
    }

  export interface unitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['units'], meta: { name: 'units' } }
    /**
     * Find zero or one Units that matches the filter.
     * @param {unitsFindUniqueArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unitsFindUniqueArgs>(args: SelectSubset<T, unitsFindUniqueArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Units that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unitsFindUniqueOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unitsFindUniqueOrThrowArgs>(args: SelectSubset<T, unitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unitsFindFirstArgs>(args?: SelectSubset<T, unitsFindFirstArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unitsFindFirstOrThrowArgs>(args?: SelectSubset<T, unitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.units.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.units.findMany({ take: 10 })
     * 
     * // Only select the `unt_id`
     * const unitsWithUnt_idOnly = await prisma.units.findMany({ select: { unt_id: true } })
     * 
     */
    findMany<T extends unitsFindManyArgs>(args?: SelectSubset<T, unitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Units.
     * @param {unitsCreateArgs} args - Arguments to create a Units.
     * @example
     * // Create one Units
     * const Units = await prisma.units.create({
     *   data: {
     *     // ... data to create a Units
     *   }
     * })
     * 
     */
    create<T extends unitsCreateArgs>(args: SelectSubset<T, unitsCreateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {unitsCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unitsCreateManyArgs>(args?: SelectSubset<T, unitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {unitsCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `unt_id`
     * const unitsWithUnt_idOnly = await prisma.units.createManyAndReturn({
     *   select: { unt_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unitsCreateManyAndReturnArgs>(args?: SelectSubset<T, unitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Units.
     * @param {unitsDeleteArgs} args - Arguments to delete one Units.
     * @example
     * // Delete one Units
     * const Units = await prisma.units.delete({
     *   where: {
     *     // ... filter to delete one Units
     *   }
     * })
     * 
     */
    delete<T extends unitsDeleteArgs>(args: SelectSubset<T, unitsDeleteArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Units.
     * @param {unitsUpdateArgs} args - Arguments to update one Units.
     * @example
     * // Update one Units
     * const units = await prisma.units.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unitsUpdateArgs>(args: SelectSubset<T, unitsUpdateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {unitsDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.units.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unitsDeleteManyArgs>(args?: SelectSubset<T, unitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unitsUpdateManyArgs>(args: SelectSubset<T, unitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {unitsUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `unt_id`
     * const unitsWithUnt_idOnly = await prisma.units.updateManyAndReturn({
     *   select: { unt_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unitsUpdateManyAndReturnArgs>(args: SelectSubset<T, unitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Units.
     * @param {unitsUpsertArgs} args - Arguments to update or create a Units.
     * @example
     * // Update or create a Units
     * const units = await prisma.units.upsert({
     *   create: {
     *     // ... data to create a Units
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Units we want to update
     *   }
     * })
     */
    upsert<T extends unitsUpsertArgs>(args: SelectSubset<T, unitsUpsertArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.units.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends unitsCountArgs>(
      args?: Subset<T, unitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitsAggregateArgs>(args: Subset<T, UnitsAggregateArgs>): Prisma.PrismaPromise<GetUnitsAggregateType<T>>

    /**
     * Group by Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unitsGroupByArgs['orderBy'] }
        : { orderBy?: unitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the units model
   */
  readonly fields: unitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for units.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends units$materialsArgs<ExtArgs> = {}>(args?: Subset<T, units$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the units model
   */
  interface unitsFieldRefs {
    readonly unt_id: FieldRef<"units", 'Int'>
    readonly unit_code: FieldRef<"units", 'String'>
    readonly unit_name: FieldRef<"units", 'String'>
    readonly ctime: FieldRef<"units", 'DateTime'>
    readonly cusr_id: FieldRef<"units", 'Int'>
    readonly mtime: FieldRef<"units", 'DateTime'>
    readonly musr_id: FieldRef<"units", 'Int'>
    readonly dtime: FieldRef<"units", 'DateTime'>
    readonly dusr_id: FieldRef<"units", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * units findUnique
   */
  export type unitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findUniqueOrThrow
   */
  export type unitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findFirst
   */
  export type unitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findFirstOrThrow
   */
  export type unitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findMany
   */
  export type unitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units create
   */
  export type unitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to create a units.
     */
    data: XOR<unitsCreateInput, unitsUncheckedCreateInput>
  }

  /**
   * units createMany
   */
  export type unitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * units createManyAndReturn
   */
  export type unitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * units update
   */
  export type unitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to update a units.
     */
    data: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
    /**
     * Choose, which units to update.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units updateMany
   */
  export type unitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * units updateManyAndReturn
   */
  export type unitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * units upsert
   */
  export type unitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The filter to search for the units to update in case it exists.
     */
    where: unitsWhereUniqueInput
    /**
     * In case the units found by the `where` argument doesn't exist, create a new units with this data.
     */
    create: XOR<unitsCreateInput, unitsUncheckedCreateInput>
    /**
     * In case the units was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
  }

  /**
   * units delete
   */
  export type unitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter which units to delete.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units deleteMany
   */
  export type unitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to delete
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to delete.
     */
    limit?: number
  }

  /**
   * units.materials
   */
  export type units$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    cursor?: materialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * units without action
   */
  export type unitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
  }


  /**
   * Model suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    sup_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    sup_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    sup_id: number | null
    supplier_name: string | null
    supplier_phone: string | null
    supplier_address: string | null
    supplier_email: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type SuppliersMaxAggregateOutputType = {
    sup_id: number | null
    supplier_name: string | null
    supplier_phone: string | null
    supplier_address: string | null
    supplier_email: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type SuppliersCountAggregateOutputType = {
    sup_id: number
    supplier_name: number
    supplier_phone: number
    supplier_address: number
    supplier_email: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    sup_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type SuppliersSumAggregateInputType = {
    sup_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type SuppliersMinAggregateInputType = {
    sup_id?: true
    supplier_name?: true
    supplier_phone?: true
    supplier_address?: true
    supplier_email?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type SuppliersMaxAggregateInputType = {
    sup_id?: true
    supplier_name?: true
    supplier_phone?: true
    supplier_address?: true
    supplier_email?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type SuppliersCountAggregateInputType = {
    sup_id?: true
    supplier_name?: true
    supplier_phone?: true
    supplier_address?: true
    supplier_email?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to aggregate.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type suppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithAggregationInput | suppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    sup_id: number
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sup_id?: boolean
    supplier_name?: boolean
    supplier_phone?: boolean
    supplier_address?: boolean
    supplier_email?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    materials?: boolean | suppliers$materialsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sup_id?: boolean
    supplier_name?: boolean
    supplier_phone?: boolean
    supplier_address?: boolean
    supplier_email?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sup_id?: boolean
    supplier_name?: boolean
    supplier_phone?: boolean
    supplier_address?: boolean
    supplier_email?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectScalar = {
    sup_id?: boolean
    supplier_name?: boolean
    supplier_phone?: boolean
    supplier_address?: boolean
    supplier_email?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type suppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sup_id" | "supplier_name" | "supplier_phone" | "supplier_address" | "supplier_email" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["suppliers"]>
  export type suppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | suppliers$materialsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type suppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type suppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $suppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suppliers"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sup_id: number
      supplier_name: string
      supplier_phone: string
      supplier_address: string
      supplier_email: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = $Result.GetResult<Prisma.$suppliersPayload, S>

  type suppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface suppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suppliers'], meta: { name: 'suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suppliersFindUniqueArgs>(args: SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suppliersFindFirstArgs>(args?: SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `sup_id`
     * const suppliersWithSup_idOnly = await prisma.suppliers.findMany({ select: { sup_id: true } })
     * 
     */
    findMany<T extends suppliersFindManyArgs>(args?: SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends suppliersCreateArgs>(args: SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suppliersCreateManyArgs>(args?: SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {suppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `sup_id`
     * const suppliersWithSup_idOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { sup_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, suppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends suppliersDeleteArgs>(args: SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suppliersUpdateArgs>(args: SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suppliersDeleteManyArgs>(args?: SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suppliersUpdateManyArgs>(args: SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {suppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `sup_id`
     * const suppliersWithSup_idOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { sup_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, suppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends suppliersUpsertArgs>(args: SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suppliersGroupByArgs['orderBy'] }
        : { orderBy?: suppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suppliers model
   */
  readonly fields: suppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends suppliers$materialsArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suppliers model
   */
  interface suppliersFieldRefs {
    readonly sup_id: FieldRef<"suppliers", 'Int'>
    readonly supplier_name: FieldRef<"suppliers", 'String'>
    readonly supplier_phone: FieldRef<"suppliers", 'String'>
    readonly supplier_address: FieldRef<"suppliers", 'String'>
    readonly supplier_email: FieldRef<"suppliers", 'String'>
    readonly ctime: FieldRef<"suppliers", 'DateTime'>
    readonly cusr_id: FieldRef<"suppliers", 'Int'>
    readonly mtime: FieldRef<"suppliers", 'DateTime'>
    readonly musr_id: FieldRef<"suppliers", 'Int'>
    readonly dtime: FieldRef<"suppliers", 'DateTime'>
    readonly dusr_id: FieldRef<"suppliers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findUniqueOrThrow
   */
  export type suppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findFirstOrThrow
   */
  export type suppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers create
   */
  export type suppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a suppliers.
     */
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }

  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers createManyAndReturn
   */
  export type suppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers update
   */
  export type suppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a suppliers.
     */
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers updateManyAndReturn
   */
  export type suppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     */
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     */
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }

  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter which suppliers to delete.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * suppliers.materials
   */
  export type suppliers$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    cursor?: materialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * suppliers without action
   */
  export type suppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
  }


  /**
   * Model materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsAvgAggregateOutputType = {
    mat_id: number | null
    unt_id: number | null
    sup_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type MaterialsSumAggregateOutputType = {
    mat_id: number | null
    unt_id: number | null
    sup_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type MaterialsMinAggregateOutputType = {
    mat_id: number | null
    unt_id: number | null
    sup_id: number | null
    material_code: string | null
    material_brand: string | null
    material_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type MaterialsMaxAggregateOutputType = {
    mat_id: number | null
    unt_id: number | null
    sup_id: number | null
    material_code: string | null
    material_brand: string | null
    material_name: string | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type MaterialsCountAggregateOutputType = {
    mat_id: number
    unt_id: number
    sup_id: number
    material_code: number
    material_brand: number
    material_name: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type MaterialsAvgAggregateInputType = {
    mat_id?: true
    unt_id?: true
    sup_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type MaterialsSumAggregateInputType = {
    mat_id?: true
    unt_id?: true
    sup_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type MaterialsMinAggregateInputType = {
    mat_id?: true
    unt_id?: true
    sup_id?: true
    material_code?: true
    material_brand?: true
    material_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type MaterialsMaxAggregateInputType = {
    mat_id?: true
    unt_id?: true
    sup_id?: true
    material_code?: true
    material_brand?: true
    material_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type MaterialsCountAggregateInputType = {
    mat_id?: true
    unt_id?: true
    sup_id?: true
    material_code?: true
    material_brand?: true
    material_name?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to aggregate.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: materialsWhereInput
    orderBy?: materialsOrderByWithAggregationInput | materialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _avg?: MaterialsAvgAggregateInputType
    _sum?: MaterialsSumAggregateInputType
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    mat_id: number
    unt_id: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mat_id?: boolean
    unt_id?: boolean
    sup_id?: boolean
    material_code?: boolean
    material_brand?: boolean
    material_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
    material_stock?: boolean | materials$material_stockArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mat_id?: boolean
    unt_id?: boolean
    sup_id?: boolean
    material_code?: boolean
    material_brand?: boolean
    material_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mat_id?: boolean
    unt_id?: boolean
    sup_id?: boolean
    material_code?: boolean
    material_brand?: boolean
    material_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type materialsSelectScalar = {
    mat_id?: boolean
    unt_id?: boolean
    sup_id?: boolean
    material_code?: boolean
    material_brand?: boolean
    material_name?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mat_id" | "unt_id" | "sup_id" | "material_code" | "material_brand" | "material_name" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["materials"]>
  export type materialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
    material_stock?: boolean | materials$material_stockArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type materialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
  }
  export type materialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | unitsDefaultArgs<ExtArgs>
    suppliers?: boolean | suppliersDefaultArgs<ExtArgs>
  }

  export type $materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "materials"
    objects: {
      units: Prisma.$unitsPayload<ExtArgs>
      suppliers: Prisma.$suppliersPayload<ExtArgs>
      material_stock: Prisma.$material_stockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mat_id: number
      unt_id: number
      sup_id: number
      material_code: string
      material_brand: string
      material_name: string
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type materialsGetPayload<S extends boolean | null | undefined | materialsDefaultArgs> = $Result.GetResult<Prisma.$materialsPayload, S>

  type materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['materials'], meta: { name: 'materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {materialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materialsFindUniqueArgs>(args: SelectSubset<T, materialsFindUniqueArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materialsFindFirstArgs>(args?: SelectSubset<T, materialsFindFirstArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `mat_id`
     * const materialsWithMat_idOnly = await prisma.materials.findMany({ select: { mat_id: true } })
     * 
     */
    findMany<T extends materialsFindManyArgs>(args?: SelectSubset<T, materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {materialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends materialsCreateArgs>(args: SelectSubset<T, materialsCreateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {materialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends materialsCreateManyArgs>(args?: SelectSubset<T, materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {materialsCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `mat_id`
     * const materialsWithMat_idOnly = await prisma.materials.createManyAndReturn({
     *   select: { mat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends materialsCreateManyAndReturnArgs>(args?: SelectSubset<T, materialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materials.
     * @param {materialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends materialsDeleteArgs>(args: SelectSubset<T, materialsDeleteArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {materialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends materialsUpdateArgs>(args: SelectSubset<T, materialsUpdateArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {materialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends materialsDeleteManyArgs>(args?: SelectSubset<T, materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends materialsUpdateManyArgs>(args: SelectSubset<T, materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {materialsUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `mat_id`
     * const materialsWithMat_idOnly = await prisma.materials.updateManyAndReturn({
     *   select: { mat_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends materialsUpdateManyAndReturnArgs>(args: SelectSubset<T, materialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materials.
     * @param {materialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends materialsUpsertArgs>(args: SelectSubset<T, materialsUpsertArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends materialsCountArgs>(
      args?: Subset<T, materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: materialsGroupByArgs['orderBy'] }
        : { orderBy?: materialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the materials model
   */
  readonly fields: materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends unitsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unitsDefaultArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suppliers<T extends suppliersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, suppliersDefaultArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material_stock<T extends materials$material_stockArgs<ExtArgs> = {}>(args?: Subset<T, materials$material_stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the materials model
   */
  interface materialsFieldRefs {
    readonly mat_id: FieldRef<"materials", 'Int'>
    readonly unt_id: FieldRef<"materials", 'Int'>
    readonly sup_id: FieldRef<"materials", 'Int'>
    readonly material_code: FieldRef<"materials", 'String'>
    readonly material_brand: FieldRef<"materials", 'String'>
    readonly material_name: FieldRef<"materials", 'String'>
    readonly ctime: FieldRef<"materials", 'DateTime'>
    readonly cusr_id: FieldRef<"materials", 'Int'>
    readonly mtime: FieldRef<"materials", 'DateTime'>
    readonly musr_id: FieldRef<"materials", 'Int'>
    readonly dtime: FieldRef<"materials", 'DateTime'>
    readonly dusr_id: FieldRef<"materials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * materials findUnique
   */
  export type materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findUniqueOrThrow
   */
  export type materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials findFirst
   */
  export type materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findFirstOrThrow
   */
  export type materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials findMany
   */
  export type materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter, which materials to fetch.
     */
    where?: materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of materials to fetch.
     */
    orderBy?: materialsOrderByWithRelationInput | materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing materials.
     */
    cursor?: materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * materials create
   */
  export type materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to create a materials.
     */
    data: XOR<materialsCreateInput, materialsUncheckedCreateInput>
  }

  /**
   * materials createMany
   */
  export type materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * materials createManyAndReturn
   */
  export type materialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to create many materials.
     */
    data: materialsCreateManyInput | materialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * materials update
   */
  export type materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The data needed to update a materials.
     */
    data: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
    /**
     * Choose, which materials to update.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials updateMany
   */
  export type materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
  }

  /**
   * materials updateManyAndReturn
   */
  export type materialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * The data used to update materials.
     */
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyInput>
    /**
     * Filter which materials to update
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * materials upsert
   */
  export type materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * The filter to search for the materials to update in case it exists.
     */
    where: materialsWhereUniqueInput
    /**
     * In case the materials found by the `where` argument doesn't exist, create a new materials with this data.
     */
    create: XOR<materialsCreateInput, materialsUncheckedCreateInput>
    /**
     * In case the materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<materialsUpdateInput, materialsUncheckedUpdateInput>
  }

  /**
   * materials delete
   */
  export type materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
    /**
     * Filter which materials to delete.
     */
    where: materialsWhereUniqueInput
  }

  /**
   * materials deleteMany
   */
  export type materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which materials to delete
     */
    where?: materialsWhereInput
    /**
     * Limit how many materials to delete.
     */
    limit?: number
  }

  /**
   * materials.material_stock
   */
  export type materials$material_stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    where?: material_stockWhereInput
    orderBy?: material_stockOrderByWithRelationInput | material_stockOrderByWithRelationInput[]
    cursor?: material_stockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Material_stockScalarFieldEnum | Material_stockScalarFieldEnum[]
  }

  /**
   * materials without action
   */
  export type materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materials
     */
    select?: materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the materials
     */
    omit?: materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: materialsInclude<ExtArgs> | null
  }


  /**
   * Model material_stock
   */

  export type AggregateMaterial_stock = {
    _count: Material_stockCountAggregateOutputType | null
    _avg: Material_stockAvgAggregateOutputType | null
    _sum: Material_stockSumAggregateOutputType | null
    _min: Material_stockMinAggregateOutputType | null
    _max: Material_stockMaxAggregateOutputType | null
  }

  export type Material_stockAvgAggregateOutputType = {
    mst_id: number | null
    mat_id: number | null
    pod_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type Material_stockSumAggregateOutputType = {
    mst_id: number | null
    mat_id: number | null
    pod_id: number | null
    cusr_id: number | null
    musr_id: number | null
    dusr_id: number | null
  }

  export type Material_stockMinAggregateOutputType = {
    mst_id: number | null
    mat_id: number | null
    pod_id: number | null
    type: string | null
    is_active: boolean | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type Material_stockMaxAggregateOutputType = {
    mst_id: number | null
    mat_id: number | null
    pod_id: number | null
    type: string | null
    is_active: boolean | null
    ctime: Date | null
    cusr_id: number | null
    mtime: Date | null
    musr_id: number | null
    dtime: Date | null
    dusr_id: number | null
  }

  export type Material_stockCountAggregateOutputType = {
    mst_id: number
    mat_id: number
    pod_id: number
    type: number
    is_active: number
    ctime: number
    cusr_id: number
    mtime: number
    musr_id: number
    dtime: number
    dusr_id: number
    _all: number
  }


  export type Material_stockAvgAggregateInputType = {
    mst_id?: true
    mat_id?: true
    pod_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type Material_stockSumAggregateInputType = {
    mst_id?: true
    mat_id?: true
    pod_id?: true
    cusr_id?: true
    musr_id?: true
    dusr_id?: true
  }

  export type Material_stockMinAggregateInputType = {
    mst_id?: true
    mat_id?: true
    pod_id?: true
    type?: true
    is_active?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type Material_stockMaxAggregateInputType = {
    mst_id?: true
    mat_id?: true
    pod_id?: true
    type?: true
    is_active?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
  }

  export type Material_stockCountAggregateInputType = {
    mst_id?: true
    mat_id?: true
    pod_id?: true
    type?: true
    is_active?: true
    ctime?: true
    cusr_id?: true
    mtime?: true
    musr_id?: true
    dtime?: true
    dusr_id?: true
    _all?: true
  }

  export type Material_stockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_stock to aggregate.
     */
    where?: material_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_stocks to fetch.
     */
    orderBy?: material_stockOrderByWithRelationInput | material_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: material_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned material_stocks
    **/
    _count?: true | Material_stockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Material_stockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Material_stockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Material_stockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Material_stockMaxAggregateInputType
  }

  export type GetMaterial_stockAggregateType<T extends Material_stockAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial_stock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial_stock[P]>
      : GetScalarType<T[P], AggregateMaterial_stock[P]>
  }




  export type material_stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: material_stockWhereInput
    orderBy?: material_stockOrderByWithAggregationInput | material_stockOrderByWithAggregationInput[]
    by: Material_stockScalarFieldEnum[] | Material_stockScalarFieldEnum
    having?: material_stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Material_stockCountAggregateInputType | true
    _avg?: Material_stockAvgAggregateInputType
    _sum?: Material_stockSumAggregateInputType
    _min?: Material_stockMinAggregateInputType
    _max?: Material_stockMaxAggregateInputType
  }

  export type Material_stockGroupByOutputType = {
    mst_id: number
    mat_id: number
    pod_id: number
    type: string
    is_active: boolean
    ctime: Date
    cusr_id: number
    mtime: Date
    musr_id: number
    dtime: Date | null
    dusr_id: number
    _count: Material_stockCountAggregateOutputType | null
    _avg: Material_stockAvgAggregateOutputType | null
    _sum: Material_stockSumAggregateOutputType | null
    _min: Material_stockMinAggregateOutputType | null
    _max: Material_stockMaxAggregateOutputType | null
  }

  type GetMaterial_stockGroupByPayload<T extends material_stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Material_stockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Material_stockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Material_stockGroupByOutputType[P]>
            : GetScalarType<T[P], Material_stockGroupByOutputType[P]>
        }
      >
    >


  export type material_stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mst_id?: boolean
    mat_id?: boolean
    pod_id?: boolean
    type?: boolean
    is_active?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_stock"]>

  export type material_stockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mst_id?: boolean
    mat_id?: boolean
    pod_id?: boolean
    type?: boolean
    is_active?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_stock"]>

  export type material_stockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mst_id?: boolean
    mat_id?: boolean
    pod_id?: boolean
    type?: boolean
    is_active?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material_stock"]>

  export type material_stockSelectScalar = {
    mst_id?: boolean
    mat_id?: boolean
    pod_id?: boolean
    type?: boolean
    is_active?: boolean
    ctime?: boolean
    cusr_id?: boolean
    mtime?: boolean
    musr_id?: boolean
    dtime?: boolean
    dusr_id?: boolean
  }

  export type material_stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mst_id" | "mat_id" | "pod_id" | "type" | "is_active" | "ctime" | "cusr_id" | "mtime" | "musr_id" | "dtime" | "dusr_id", ExtArgs["result"]["material_stock"]>
  export type material_stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }
  export type material_stockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }
  export type material_stockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | materialsDefaultArgs<ExtArgs>
  }

  export type $material_stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "material_stock"
    objects: {
      materials: Prisma.$materialsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mst_id: number
      mat_id: number
      pod_id: number
      type: string
      is_active: boolean
      ctime: Date
      cusr_id: number
      mtime: Date
      musr_id: number
      dtime: Date | null
      dusr_id: number
    }, ExtArgs["result"]["material_stock"]>
    composites: {}
  }

  type material_stockGetPayload<S extends boolean | null | undefined | material_stockDefaultArgs> = $Result.GetResult<Prisma.$material_stockPayload, S>

  type material_stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<material_stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Material_stockCountAggregateInputType | true
    }

  export interface material_stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['material_stock'], meta: { name: 'material_stock' } }
    /**
     * Find zero or one Material_stock that matches the filter.
     * @param {material_stockFindUniqueArgs} args - Arguments to find a Material_stock
     * @example
     * // Get one Material_stock
     * const material_stock = await prisma.material_stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends material_stockFindUniqueArgs>(args: SelectSubset<T, material_stockFindUniqueArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material_stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {material_stockFindUniqueOrThrowArgs} args - Arguments to find a Material_stock
     * @example
     * // Get one Material_stock
     * const material_stock = await prisma.material_stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends material_stockFindUniqueOrThrowArgs>(args: SelectSubset<T, material_stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockFindFirstArgs} args - Arguments to find a Material_stock
     * @example
     * // Get one Material_stock
     * const material_stock = await prisma.material_stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends material_stockFindFirstArgs>(args?: SelectSubset<T, material_stockFindFirstArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material_stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockFindFirstOrThrowArgs} args - Arguments to find a Material_stock
     * @example
     * // Get one Material_stock
     * const material_stock = await prisma.material_stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends material_stockFindFirstOrThrowArgs>(args?: SelectSubset<T, material_stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Material_stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Material_stocks
     * const material_stocks = await prisma.material_stock.findMany()
     * 
     * // Get first 10 Material_stocks
     * const material_stocks = await prisma.material_stock.findMany({ take: 10 })
     * 
     * // Only select the `mst_id`
     * const material_stockWithMst_idOnly = await prisma.material_stock.findMany({ select: { mst_id: true } })
     * 
     */
    findMany<T extends material_stockFindManyArgs>(args?: SelectSubset<T, material_stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material_stock.
     * @param {material_stockCreateArgs} args - Arguments to create a Material_stock.
     * @example
     * // Create one Material_stock
     * const Material_stock = await prisma.material_stock.create({
     *   data: {
     *     // ... data to create a Material_stock
     *   }
     * })
     * 
     */
    create<T extends material_stockCreateArgs>(args: SelectSubset<T, material_stockCreateArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Material_stocks.
     * @param {material_stockCreateManyArgs} args - Arguments to create many Material_stocks.
     * @example
     * // Create many Material_stocks
     * const material_stock = await prisma.material_stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends material_stockCreateManyArgs>(args?: SelectSubset<T, material_stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Material_stocks and returns the data saved in the database.
     * @param {material_stockCreateManyAndReturnArgs} args - Arguments to create many Material_stocks.
     * @example
     * // Create many Material_stocks
     * const material_stock = await prisma.material_stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Material_stocks and only return the `mst_id`
     * const material_stockWithMst_idOnly = await prisma.material_stock.createManyAndReturn({
     *   select: { mst_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends material_stockCreateManyAndReturnArgs>(args?: SelectSubset<T, material_stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material_stock.
     * @param {material_stockDeleteArgs} args - Arguments to delete one Material_stock.
     * @example
     * // Delete one Material_stock
     * const Material_stock = await prisma.material_stock.delete({
     *   where: {
     *     // ... filter to delete one Material_stock
     *   }
     * })
     * 
     */
    delete<T extends material_stockDeleteArgs>(args: SelectSubset<T, material_stockDeleteArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material_stock.
     * @param {material_stockUpdateArgs} args - Arguments to update one Material_stock.
     * @example
     * // Update one Material_stock
     * const material_stock = await prisma.material_stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends material_stockUpdateArgs>(args: SelectSubset<T, material_stockUpdateArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Material_stocks.
     * @param {material_stockDeleteManyArgs} args - Arguments to filter Material_stocks to delete.
     * @example
     * // Delete a few Material_stocks
     * const { count } = await prisma.material_stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends material_stockDeleteManyArgs>(args?: SelectSubset<T, material_stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Material_stocks
     * const material_stock = await prisma.material_stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends material_stockUpdateManyArgs>(args: SelectSubset<T, material_stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Material_stocks and returns the data updated in the database.
     * @param {material_stockUpdateManyAndReturnArgs} args - Arguments to update many Material_stocks.
     * @example
     * // Update many Material_stocks
     * const material_stock = await prisma.material_stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Material_stocks and only return the `mst_id`
     * const material_stockWithMst_idOnly = await prisma.material_stock.updateManyAndReturn({
     *   select: { mst_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends material_stockUpdateManyAndReturnArgs>(args: SelectSubset<T, material_stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material_stock.
     * @param {material_stockUpsertArgs} args - Arguments to update or create a Material_stock.
     * @example
     * // Update or create a Material_stock
     * const material_stock = await prisma.material_stock.upsert({
     *   create: {
     *     // ... data to create a Material_stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material_stock we want to update
     *   }
     * })
     */
    upsert<T extends material_stockUpsertArgs>(args: SelectSubset<T, material_stockUpsertArgs<ExtArgs>>): Prisma__material_stockClient<$Result.GetResult<Prisma.$material_stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Material_stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockCountArgs} args - Arguments to filter Material_stocks to count.
     * @example
     * // Count the number of Material_stocks
     * const count = await prisma.material_stock.count({
     *   where: {
     *     // ... the filter for the Material_stocks we want to count
     *   }
     * })
    **/
    count<T extends material_stockCountArgs>(
      args?: Subset<T, material_stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Material_stockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Material_stockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Material_stockAggregateArgs>(args: Subset<T, Material_stockAggregateArgs>): Prisma.PrismaPromise<GetMaterial_stockAggregateType<T>>

    /**
     * Group by Material_stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {material_stockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends material_stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: material_stockGroupByArgs['orderBy'] }
        : { orderBy?: material_stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, material_stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterial_stockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the material_stock model
   */
  readonly fields: material_stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for material_stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__material_stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends materialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, materialsDefaultArgs<ExtArgs>>): Prisma__materialsClient<$Result.GetResult<Prisma.$materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the material_stock model
   */
  interface material_stockFieldRefs {
    readonly mst_id: FieldRef<"material_stock", 'Int'>
    readonly mat_id: FieldRef<"material_stock", 'Int'>
    readonly pod_id: FieldRef<"material_stock", 'Int'>
    readonly type: FieldRef<"material_stock", 'String'>
    readonly is_active: FieldRef<"material_stock", 'Boolean'>
    readonly ctime: FieldRef<"material_stock", 'DateTime'>
    readonly cusr_id: FieldRef<"material_stock", 'Int'>
    readonly mtime: FieldRef<"material_stock", 'DateTime'>
    readonly musr_id: FieldRef<"material_stock", 'Int'>
    readonly dtime: FieldRef<"material_stock", 'DateTime'>
    readonly dusr_id: FieldRef<"material_stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * material_stock findUnique
   */
  export type material_stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter, which material_stock to fetch.
     */
    where: material_stockWhereUniqueInput
  }

  /**
   * material_stock findUniqueOrThrow
   */
  export type material_stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter, which material_stock to fetch.
     */
    where: material_stockWhereUniqueInput
  }

  /**
   * material_stock findFirst
   */
  export type material_stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter, which material_stock to fetch.
     */
    where?: material_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_stocks to fetch.
     */
    orderBy?: material_stockOrderByWithRelationInput | material_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_stocks.
     */
    cursor?: material_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_stocks.
     */
    distinct?: Material_stockScalarFieldEnum | Material_stockScalarFieldEnum[]
  }

  /**
   * material_stock findFirstOrThrow
   */
  export type material_stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter, which material_stock to fetch.
     */
    where?: material_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_stocks to fetch.
     */
    orderBy?: material_stockOrderByWithRelationInput | material_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for material_stocks.
     */
    cursor?: material_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of material_stocks.
     */
    distinct?: Material_stockScalarFieldEnum | Material_stockScalarFieldEnum[]
  }

  /**
   * material_stock findMany
   */
  export type material_stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter, which material_stocks to fetch.
     */
    where?: material_stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of material_stocks to fetch.
     */
    orderBy?: material_stockOrderByWithRelationInput | material_stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing material_stocks.
     */
    cursor?: material_stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` material_stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` material_stocks.
     */
    skip?: number
    distinct?: Material_stockScalarFieldEnum | Material_stockScalarFieldEnum[]
  }

  /**
   * material_stock create
   */
  export type material_stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * The data needed to create a material_stock.
     */
    data: XOR<material_stockCreateInput, material_stockUncheckedCreateInput>
  }

  /**
   * material_stock createMany
   */
  export type material_stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many material_stocks.
     */
    data: material_stockCreateManyInput | material_stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * material_stock createManyAndReturn
   */
  export type material_stockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * The data used to create many material_stocks.
     */
    data: material_stockCreateManyInput | material_stockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_stock update
   */
  export type material_stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * The data needed to update a material_stock.
     */
    data: XOR<material_stockUpdateInput, material_stockUncheckedUpdateInput>
    /**
     * Choose, which material_stock to update.
     */
    where: material_stockWhereUniqueInput
  }

  /**
   * material_stock updateMany
   */
  export type material_stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update material_stocks.
     */
    data: XOR<material_stockUpdateManyMutationInput, material_stockUncheckedUpdateManyInput>
    /**
     * Filter which material_stocks to update
     */
    where?: material_stockWhereInput
    /**
     * Limit how many material_stocks to update.
     */
    limit?: number
  }

  /**
   * material_stock updateManyAndReturn
   */
  export type material_stockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * The data used to update material_stocks.
     */
    data: XOR<material_stockUpdateManyMutationInput, material_stockUncheckedUpdateManyInput>
    /**
     * Filter which material_stocks to update
     */
    where?: material_stockWhereInput
    /**
     * Limit how many material_stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * material_stock upsert
   */
  export type material_stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * The filter to search for the material_stock to update in case it exists.
     */
    where: material_stockWhereUniqueInput
    /**
     * In case the material_stock found by the `where` argument doesn't exist, create a new material_stock with this data.
     */
    create: XOR<material_stockCreateInput, material_stockUncheckedCreateInput>
    /**
     * In case the material_stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<material_stockUpdateInput, material_stockUncheckedUpdateInput>
  }

  /**
   * material_stock delete
   */
  export type material_stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
    /**
     * Filter which material_stock to delete.
     */
    where: material_stockWhereUniqueInput
  }

  /**
   * material_stock deleteMany
   */
  export type material_stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which material_stocks to delete
     */
    where?: material_stockWhereInput
    /**
     * Limit how many material_stocks to delete.
     */
    limit?: number
  }

  /**
   * material_stock without action
   */
  export type material_stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the material_stock
     */
    select?: material_stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the material_stock
     */
    omit?: material_stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: material_stockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    usr_id: 'usr_id',
    rol_id: 'rol_id',
    username: 'username',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    address: 'address',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_profilesScalarFieldEnum: {
    usp_id: 'usp_id',
    usr_id: 'usr_id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    birth_date: 'birth_date',
    gender: 'gender',
    phone_number: 'phone_number',
    address: 'address',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    rol_id: 'rol_id',
    role_code: 'role_code',
    role_name: 'role_name',
    role_description: 'role_description',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    cat_id: 'cat_id',
    category_code: 'category_code',
    category_name: 'category_name',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    prd_id: 'prd_id',
    cat_id: 'cat_id',
    product_code: 'product_code',
    product_name: 'product_name',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Product_materialScalarFieldEnum: {
    pmt_id: 'pmt_id',
    prd_id: 'prd_id',
    mat_id: 'mat_id',
    quantity: 'quantity',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type Product_materialScalarFieldEnum = (typeof Product_materialScalarFieldEnum)[keyof typeof Product_materialScalarFieldEnum]


  export const UnitsScalarFieldEnum: {
    unt_id: 'unt_id',
    unit_code: 'unit_code',
    unit_name: 'unit_name',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type UnitsScalarFieldEnum = (typeof UnitsScalarFieldEnum)[keyof typeof UnitsScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    sup_id: 'sup_id',
    supplier_name: 'supplier_name',
    supplier_phone: 'supplier_phone',
    supplier_address: 'supplier_address',
    supplier_email: 'supplier_email',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    mat_id: 'mat_id',
    unt_id: 'unt_id',
    sup_id: 'sup_id',
    material_code: 'material_code',
    material_brand: 'material_brand',
    material_name: 'material_name',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const Material_stockScalarFieldEnum: {
    mst_id: 'mst_id',
    mat_id: 'mat_id',
    pod_id: 'pod_id',
    type: 'type',
    is_active: 'is_active',
    ctime: 'ctime',
    cusr_id: 'cusr_id',
    mtime: 'mtime',
    musr_id: 'musr_id',
    dtime: 'dtime',
    dusr_id: 'dusr_id'
  };

  export type Material_stockScalarFieldEnum = (typeof Material_stockScalarFieldEnum)[keyof typeof Material_stockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    usr_id?: IntFilter<"users"> | number
    rol_id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    ctime?: DateTimeFilter<"users"> | Date | string
    cusr_id?: IntFilter<"users"> | number
    mtime?: DateTimeFilter<"users"> | Date | string
    musr_id?: IntFilter<"users"> | number
    dtime?: DateTimeNullableFilter<"users"> | Date | string | null
    dusr_id?: IntFilter<"users"> | number
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    user_profiles?: XOR<User_profilesNullableScalarRelationFilter, user_profilesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    roles?: rolesOrderByWithRelationInput
    user_profiles?: user_profilesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    usr_id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    rol_id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    ctime?: DateTimeFilter<"users"> | Date | string
    cusr_id?: IntFilter<"users"> | number
    mtime?: DateTimeFilter<"users"> | Date | string
    musr_id?: IntFilter<"users"> | number
    dtime?: DateTimeNullableFilter<"users"> | Date | string | null
    dusr_id?: IntFilter<"users"> | number
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    user_profiles?: XOR<User_profilesNullableScalarRelationFilter, user_profilesWhereInput> | null
  }, "usr_id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    usr_id?: IntWithAggregatesFilter<"users"> | number
    rol_id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    address?: StringWithAggregatesFilter<"users"> | string
    ctime?: DateTimeWithAggregatesFilter<"users"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"users"> | number
    mtime?: DateTimeWithAggregatesFilter<"users"> | Date | string
    musr_id?: IntWithAggregatesFilter<"users"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"users"> | number
  }

  export type user_profilesWhereInput = {
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    usp_id?: IntFilter<"user_profiles"> | number
    usr_id?: IntFilter<"user_profiles"> | number
    first_name?: StringFilter<"user_profiles"> | string
    middle_name?: StringNullableFilter<"user_profiles"> | string | null
    last_name?: StringFilter<"user_profiles"> | string
    birth_date?: StringFilter<"user_profiles"> | string
    gender?: StringFilter<"user_profiles"> | string
    phone_number?: StringFilter<"user_profiles"> | string
    address?: StringFilter<"user_profiles"> | string
    ctime?: DateTimeFilter<"user_profiles"> | Date | string
    cusr_id?: IntFilter<"user_profiles"> | number
    mtime?: DateTimeFilter<"user_profiles"> | Date | string
    musr_id?: IntFilter<"user_profiles"> | number
    dtime?: DateTimeNullableFilter<"user_profiles"> | Date | string | null
    dusr_id?: IntFilter<"user_profiles"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_profilesOrderByWithRelationInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    usp_id?: number
    usr_id?: number
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    first_name?: StringFilter<"user_profiles"> | string
    middle_name?: StringNullableFilter<"user_profiles"> | string | null
    last_name?: StringFilter<"user_profiles"> | string
    birth_date?: StringFilter<"user_profiles"> | string
    gender?: StringFilter<"user_profiles"> | string
    phone_number?: StringFilter<"user_profiles"> | string
    address?: StringFilter<"user_profiles"> | string
    ctime?: DateTimeFilter<"user_profiles"> | Date | string
    cusr_id?: IntFilter<"user_profiles"> | number
    mtime?: DateTimeFilter<"user_profiles"> | Date | string
    musr_id?: IntFilter<"user_profiles"> | number
    dtime?: DateTimeNullableFilter<"user_profiles"> | Date | string | null
    dusr_id?: IntFilter<"user_profiles"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "usp_id" | "usr_id">

  export type user_profilesOrderByWithAggregationInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: user_profilesCountOrderByAggregateInput
    _avg?: user_profilesAvgOrderByAggregateInput
    _max?: user_profilesMaxOrderByAggregateInput
    _min?: user_profilesMinOrderByAggregateInput
    _sum?: user_profilesSumOrderByAggregateInput
  }

  export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    OR?: user_profilesScalarWhereWithAggregatesInput[]
    NOT?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    usp_id?: IntWithAggregatesFilter<"user_profiles"> | number
    usr_id?: IntWithAggregatesFilter<"user_profiles"> | number
    first_name?: StringWithAggregatesFilter<"user_profiles"> | string
    middle_name?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    last_name?: StringWithAggregatesFilter<"user_profiles"> | string
    birth_date?: StringWithAggregatesFilter<"user_profiles"> | string
    gender?: StringWithAggregatesFilter<"user_profiles"> | string
    phone_number?: StringWithAggregatesFilter<"user_profiles"> | string
    address?: StringWithAggregatesFilter<"user_profiles"> | string
    ctime?: DateTimeWithAggregatesFilter<"user_profiles"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"user_profiles"> | number
    mtime?: DateTimeWithAggregatesFilter<"user_profiles"> | Date | string
    musr_id?: IntWithAggregatesFilter<"user_profiles"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"user_profiles"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"user_profiles"> | number
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    rol_id?: IntFilter<"roles"> | number
    role_code?: StringFilter<"roles"> | string
    role_name?: StringFilter<"roles"> | string
    role_description?: StringFilter<"roles"> | string
    ctime?: DateTimeFilter<"roles"> | Date | string
    cusr_id?: IntFilter<"roles"> | number
    mtime?: DateTimeFilter<"roles"> | Date | string
    musr_id?: IntFilter<"roles"> | number
    dtime?: DateTimeNullableFilter<"roles"> | Date | string | null
    dusr_id?: IntFilter<"roles"> | number
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    rol_id?: SortOrder
    role_code?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    rol_id?: number
    role_code?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    role_name?: StringFilter<"roles"> | string
    role_description?: StringFilter<"roles"> | string
    ctime?: DateTimeFilter<"roles"> | Date | string
    cusr_id?: IntFilter<"roles"> | number
    mtime?: DateTimeFilter<"roles"> | Date | string
    musr_id?: IntFilter<"roles"> | number
    dtime?: DateTimeNullableFilter<"roles"> | Date | string | null
    dusr_id?: IntFilter<"roles"> | number
    users?: UsersListRelationFilter
  }, "rol_id" | "role_code">

  export type rolesOrderByWithAggregationInput = {
    rol_id?: SortOrder
    role_code?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    rol_id?: IntWithAggregatesFilter<"roles"> | number
    role_code?: StringWithAggregatesFilter<"roles"> | string
    role_name?: StringWithAggregatesFilter<"roles"> | string
    role_description?: StringWithAggregatesFilter<"roles"> | string
    ctime?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"roles"> | number
    mtime?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    musr_id?: IntWithAggregatesFilter<"roles"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"roles"> | number
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    cat_id?: IntFilter<"categories"> | number
    category_code?: StringFilter<"categories"> | string
    category_name?: StringFilter<"categories"> | string
    ctime?: DateTimeFilter<"categories"> | Date | string
    cusr_id?: IntFilter<"categories"> | number
    mtime?: DateTimeFilter<"categories"> | Date | string
    musr_id?: IntFilter<"categories"> | number
    dtime?: DateTimeNullableFilter<"categories"> | Date | string | null
    dusr_id?: IntFilter<"categories"> | number
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    cat_id?: SortOrder
    category_code?: SortOrder
    category_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    cat_id?: number
    category_code?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_name?: StringFilter<"categories"> | string
    ctime?: DateTimeFilter<"categories"> | Date | string
    cusr_id?: IntFilter<"categories"> | number
    mtime?: DateTimeFilter<"categories"> | Date | string
    musr_id?: IntFilter<"categories"> | number
    dtime?: DateTimeNullableFilter<"categories"> | Date | string | null
    dusr_id?: IntFilter<"categories"> | number
    products?: ProductsListRelationFilter
  }, "cat_id" | "category_code">

  export type categoriesOrderByWithAggregationInput = {
    cat_id?: SortOrder
    category_code?: SortOrder
    category_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    cat_id?: IntWithAggregatesFilter<"categories"> | number
    category_code?: StringWithAggregatesFilter<"categories"> | string
    category_name?: StringWithAggregatesFilter<"categories"> | string
    ctime?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"categories"> | number
    mtime?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    musr_id?: IntWithAggregatesFilter<"categories"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"categories"> | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    prd_id?: IntFilter<"products"> | number
    cat_id?: IntFilter<"products"> | number
    product_code?: StringFilter<"products"> | string
    product_name?: StringFilter<"products"> | string
    ctime?: DateTimeFilter<"products"> | Date | string
    cusr_id?: IntFilter<"products"> | number
    mtime?: DateTimeFilter<"products"> | Date | string
    musr_id?: IntFilter<"products"> | number
    dtime?: DateTimeNullableFilter<"products"> | Date | string | null
    dusr_id?: IntFilter<"products"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    product_material?: Product_materialListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    product_material?: product_materialOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    prd_id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    cat_id?: IntFilter<"products"> | number
    product_code?: StringFilter<"products"> | string
    product_name?: StringFilter<"products"> | string
    ctime?: DateTimeFilter<"products"> | Date | string
    cusr_id?: IntFilter<"products"> | number
    mtime?: DateTimeFilter<"products"> | Date | string
    musr_id?: IntFilter<"products"> | number
    dtime?: DateTimeNullableFilter<"products"> | Date | string | null
    dusr_id?: IntFilter<"products"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    product_material?: Product_materialListRelationFilter
  }, "prd_id">

  export type productsOrderByWithAggregationInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    prd_id?: IntWithAggregatesFilter<"products"> | number
    cat_id?: IntWithAggregatesFilter<"products"> | number
    product_code?: StringWithAggregatesFilter<"products"> | string
    product_name?: StringWithAggregatesFilter<"products"> | string
    ctime?: DateTimeWithAggregatesFilter<"products"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"products"> | number
    mtime?: DateTimeWithAggregatesFilter<"products"> | Date | string
    musr_id?: IntWithAggregatesFilter<"products"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"products"> | number
  }

  export type product_materialWhereInput = {
    AND?: product_materialWhereInput | product_materialWhereInput[]
    OR?: product_materialWhereInput[]
    NOT?: product_materialWhereInput | product_materialWhereInput[]
    pmt_id?: IntFilter<"product_material"> | number
    prd_id?: IntFilter<"product_material"> | number
    mat_id?: IntFilter<"product_material"> | number
    quantity?: StringFilter<"product_material"> | string
    ctime?: DateTimeFilter<"product_material"> | Date | string
    cusr_id?: IntFilter<"product_material"> | number
    mtime?: DateTimeFilter<"product_material"> | Date | string
    musr_id?: IntFilter<"product_material"> | number
    dtime?: DateTimeNullableFilter<"product_material"> | Date | string | null
    dusr_id?: IntFilter<"product_material"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_materialOrderByWithRelationInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    quantity?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_materialWhereUniqueInput = Prisma.AtLeast<{
    pmt_id?: number
    AND?: product_materialWhereInput | product_materialWhereInput[]
    OR?: product_materialWhereInput[]
    NOT?: product_materialWhereInput | product_materialWhereInput[]
    prd_id?: IntFilter<"product_material"> | number
    mat_id?: IntFilter<"product_material"> | number
    quantity?: StringFilter<"product_material"> | string
    ctime?: DateTimeFilter<"product_material"> | Date | string
    cusr_id?: IntFilter<"product_material"> | number
    mtime?: DateTimeFilter<"product_material"> | Date | string
    musr_id?: IntFilter<"product_material"> | number
    dtime?: DateTimeNullableFilter<"product_material"> | Date | string | null
    dusr_id?: IntFilter<"product_material"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "pmt_id">

  export type product_materialOrderByWithAggregationInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    quantity?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: product_materialCountOrderByAggregateInput
    _avg?: product_materialAvgOrderByAggregateInput
    _max?: product_materialMaxOrderByAggregateInput
    _min?: product_materialMinOrderByAggregateInput
    _sum?: product_materialSumOrderByAggregateInput
  }

  export type product_materialScalarWhereWithAggregatesInput = {
    AND?: product_materialScalarWhereWithAggregatesInput | product_materialScalarWhereWithAggregatesInput[]
    OR?: product_materialScalarWhereWithAggregatesInput[]
    NOT?: product_materialScalarWhereWithAggregatesInput | product_materialScalarWhereWithAggregatesInput[]
    pmt_id?: IntWithAggregatesFilter<"product_material"> | number
    prd_id?: IntWithAggregatesFilter<"product_material"> | number
    mat_id?: IntWithAggregatesFilter<"product_material"> | number
    quantity?: StringWithAggregatesFilter<"product_material"> | string
    ctime?: DateTimeWithAggregatesFilter<"product_material"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"product_material"> | number
    mtime?: DateTimeWithAggregatesFilter<"product_material"> | Date | string
    musr_id?: IntWithAggregatesFilter<"product_material"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"product_material"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"product_material"> | number
  }

  export type unitsWhereInput = {
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    unt_id?: IntFilter<"units"> | number
    unit_code?: StringFilter<"units"> | string
    unit_name?: StringFilter<"units"> | string
    ctime?: DateTimeFilter<"units"> | Date | string
    cusr_id?: IntFilter<"units"> | number
    mtime?: DateTimeFilter<"units"> | Date | string
    musr_id?: IntFilter<"units"> | number
    dtime?: DateTimeNullableFilter<"units"> | Date | string | null
    dusr_id?: IntFilter<"units"> | number
    materials?: MaterialsListRelationFilter
  }

  export type unitsOrderByWithRelationInput = {
    unt_id?: SortOrder
    unit_code?: SortOrder
    unit_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    materials?: materialsOrderByRelationAggregateInput
  }

  export type unitsWhereUniqueInput = Prisma.AtLeast<{
    unt_id?: number
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    unit_code?: StringFilter<"units"> | string
    unit_name?: StringFilter<"units"> | string
    ctime?: DateTimeFilter<"units"> | Date | string
    cusr_id?: IntFilter<"units"> | number
    mtime?: DateTimeFilter<"units"> | Date | string
    musr_id?: IntFilter<"units"> | number
    dtime?: DateTimeNullableFilter<"units"> | Date | string | null
    dusr_id?: IntFilter<"units"> | number
    materials?: MaterialsListRelationFilter
  }, "unt_id">

  export type unitsOrderByWithAggregationInput = {
    unt_id?: SortOrder
    unit_code?: SortOrder
    unit_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: unitsCountOrderByAggregateInput
    _avg?: unitsAvgOrderByAggregateInput
    _max?: unitsMaxOrderByAggregateInput
    _min?: unitsMinOrderByAggregateInput
    _sum?: unitsSumOrderByAggregateInput
  }

  export type unitsScalarWhereWithAggregatesInput = {
    AND?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    OR?: unitsScalarWhereWithAggregatesInput[]
    NOT?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    unt_id?: IntWithAggregatesFilter<"units"> | number
    unit_code?: StringWithAggregatesFilter<"units"> | string
    unit_name?: StringWithAggregatesFilter<"units"> | string
    ctime?: DateTimeWithAggregatesFilter<"units"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"units"> | number
    mtime?: DateTimeWithAggregatesFilter<"units"> | Date | string
    musr_id?: IntWithAggregatesFilter<"units"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"units"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"units"> | number
  }

  export type suppliersWhereInput = {
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    sup_id?: IntFilter<"suppliers"> | number
    supplier_name?: StringFilter<"suppliers"> | string
    supplier_phone?: StringFilter<"suppliers"> | string
    supplier_address?: StringFilter<"suppliers"> | string
    supplier_email?: StringFilter<"suppliers"> | string
    ctime?: DateTimeFilter<"suppliers"> | Date | string
    cusr_id?: IntFilter<"suppliers"> | number
    mtime?: DateTimeFilter<"suppliers"> | Date | string
    musr_id?: IntFilter<"suppliers"> | number
    dtime?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    dusr_id?: IntFilter<"suppliers"> | number
    materials?: MaterialsListRelationFilter
  }

  export type suppliersOrderByWithRelationInput = {
    sup_id?: SortOrder
    supplier_name?: SortOrder
    supplier_phone?: SortOrder
    supplier_address?: SortOrder
    supplier_email?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    materials?: materialsOrderByRelationAggregateInput
  }

  export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    sup_id?: number
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    supplier_name?: StringFilter<"suppliers"> | string
    supplier_phone?: StringFilter<"suppliers"> | string
    supplier_address?: StringFilter<"suppliers"> | string
    supplier_email?: StringFilter<"suppliers"> | string
    ctime?: DateTimeFilter<"suppliers"> | Date | string
    cusr_id?: IntFilter<"suppliers"> | number
    mtime?: DateTimeFilter<"suppliers"> | Date | string
    musr_id?: IntFilter<"suppliers"> | number
    dtime?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    dusr_id?: IntFilter<"suppliers"> | number
    materials?: MaterialsListRelationFilter
  }, "sup_id">

  export type suppliersOrderByWithAggregationInput = {
    sup_id?: SortOrder
    supplier_name?: SortOrder
    supplier_phone?: SortOrder
    supplier_address?: SortOrder
    supplier_email?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _avg?: suppliersAvgOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
    _sum?: suppliersSumOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    OR?: suppliersScalarWhereWithAggregatesInput[]
    NOT?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    sup_id?: IntWithAggregatesFilter<"suppliers"> | number
    supplier_name?: StringWithAggregatesFilter<"suppliers"> | string
    supplier_phone?: StringWithAggregatesFilter<"suppliers"> | string
    supplier_address?: StringWithAggregatesFilter<"suppliers"> | string
    supplier_email?: StringWithAggregatesFilter<"suppliers"> | string
    ctime?: DateTimeWithAggregatesFilter<"suppliers"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"suppliers"> | number
    mtime?: DateTimeWithAggregatesFilter<"suppliers"> | Date | string
    musr_id?: IntWithAggregatesFilter<"suppliers"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"suppliers"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"suppliers"> | number
  }

  export type materialsWhereInput = {
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    mat_id?: IntFilter<"materials"> | number
    unt_id?: IntFilter<"materials"> | number
    sup_id?: IntFilter<"materials"> | number
    material_code?: StringFilter<"materials"> | string
    material_brand?: StringFilter<"materials"> | string
    material_name?: StringFilter<"materials"> | string
    ctime?: DateTimeFilter<"materials"> | Date | string
    cusr_id?: IntFilter<"materials"> | number
    mtime?: DateTimeFilter<"materials"> | Date | string
    musr_id?: IntFilter<"materials"> | number
    dtime?: DateTimeNullableFilter<"materials"> | Date | string | null
    dusr_id?: IntFilter<"materials"> | number
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
    suppliers?: XOR<SuppliersScalarRelationFilter, suppliersWhereInput>
    material_stock?: Material_stockListRelationFilter
  }

  export type materialsOrderByWithRelationInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    material_code?: SortOrder
    material_brand?: SortOrder
    material_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    units?: unitsOrderByWithRelationInput
    suppliers?: suppliersOrderByWithRelationInput
    material_stock?: material_stockOrderByRelationAggregateInput
  }

  export type materialsWhereUniqueInput = Prisma.AtLeast<{
    mat_id?: number
    AND?: materialsWhereInput | materialsWhereInput[]
    OR?: materialsWhereInput[]
    NOT?: materialsWhereInput | materialsWhereInput[]
    unt_id?: IntFilter<"materials"> | number
    sup_id?: IntFilter<"materials"> | number
    material_code?: StringFilter<"materials"> | string
    material_brand?: StringFilter<"materials"> | string
    material_name?: StringFilter<"materials"> | string
    ctime?: DateTimeFilter<"materials"> | Date | string
    cusr_id?: IntFilter<"materials"> | number
    mtime?: DateTimeFilter<"materials"> | Date | string
    musr_id?: IntFilter<"materials"> | number
    dtime?: DateTimeNullableFilter<"materials"> | Date | string | null
    dusr_id?: IntFilter<"materials"> | number
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
    suppliers?: XOR<SuppliersScalarRelationFilter, suppliersWhereInput>
    material_stock?: Material_stockListRelationFilter
  }, "mat_id">

  export type materialsOrderByWithAggregationInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    material_code?: SortOrder
    material_brand?: SortOrder
    material_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: materialsCountOrderByAggregateInput
    _avg?: materialsAvgOrderByAggregateInput
    _max?: materialsMaxOrderByAggregateInput
    _min?: materialsMinOrderByAggregateInput
    _sum?: materialsSumOrderByAggregateInput
  }

  export type materialsScalarWhereWithAggregatesInput = {
    AND?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    OR?: materialsScalarWhereWithAggregatesInput[]
    NOT?: materialsScalarWhereWithAggregatesInput | materialsScalarWhereWithAggregatesInput[]
    mat_id?: IntWithAggregatesFilter<"materials"> | number
    unt_id?: IntWithAggregatesFilter<"materials"> | number
    sup_id?: IntWithAggregatesFilter<"materials"> | number
    material_code?: StringWithAggregatesFilter<"materials"> | string
    material_brand?: StringWithAggregatesFilter<"materials"> | string
    material_name?: StringWithAggregatesFilter<"materials"> | string
    ctime?: DateTimeWithAggregatesFilter<"materials"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"materials"> | number
    mtime?: DateTimeWithAggregatesFilter<"materials"> | Date | string
    musr_id?: IntWithAggregatesFilter<"materials"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"materials"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"materials"> | number
  }

  export type material_stockWhereInput = {
    AND?: material_stockWhereInput | material_stockWhereInput[]
    OR?: material_stockWhereInput[]
    NOT?: material_stockWhereInput | material_stockWhereInput[]
    mst_id?: IntFilter<"material_stock"> | number
    mat_id?: IntFilter<"material_stock"> | number
    pod_id?: IntFilter<"material_stock"> | number
    type?: StringFilter<"material_stock"> | string
    is_active?: BoolFilter<"material_stock"> | boolean
    ctime?: DateTimeFilter<"material_stock"> | Date | string
    cusr_id?: IntFilter<"material_stock"> | number
    mtime?: DateTimeFilter<"material_stock"> | Date | string
    musr_id?: IntFilter<"material_stock"> | number
    dtime?: DateTimeNullableFilter<"material_stock"> | Date | string | null
    dusr_id?: IntFilter<"material_stock"> | number
    materials?: XOR<MaterialsScalarRelationFilter, materialsWhereInput>
  }

  export type material_stockOrderByWithRelationInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    materials?: materialsOrderByWithRelationInput
  }

  export type material_stockWhereUniqueInput = Prisma.AtLeast<{
    mst_id?: number
    AND?: material_stockWhereInput | material_stockWhereInput[]
    OR?: material_stockWhereInput[]
    NOT?: material_stockWhereInput | material_stockWhereInput[]
    mat_id?: IntFilter<"material_stock"> | number
    pod_id?: IntFilter<"material_stock"> | number
    type?: StringFilter<"material_stock"> | string
    is_active?: BoolFilter<"material_stock"> | boolean
    ctime?: DateTimeFilter<"material_stock"> | Date | string
    cusr_id?: IntFilter<"material_stock"> | number
    mtime?: DateTimeFilter<"material_stock"> | Date | string
    musr_id?: IntFilter<"material_stock"> | number
    dtime?: DateTimeNullableFilter<"material_stock"> | Date | string | null
    dusr_id?: IntFilter<"material_stock"> | number
    materials?: XOR<MaterialsScalarRelationFilter, materialsWhereInput>
  }, "mst_id">

  export type material_stockOrderByWithAggregationInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrderInput | SortOrder
    dusr_id?: SortOrder
    _count?: material_stockCountOrderByAggregateInput
    _avg?: material_stockAvgOrderByAggregateInput
    _max?: material_stockMaxOrderByAggregateInput
    _min?: material_stockMinOrderByAggregateInput
    _sum?: material_stockSumOrderByAggregateInput
  }

  export type material_stockScalarWhereWithAggregatesInput = {
    AND?: material_stockScalarWhereWithAggregatesInput | material_stockScalarWhereWithAggregatesInput[]
    OR?: material_stockScalarWhereWithAggregatesInput[]
    NOT?: material_stockScalarWhereWithAggregatesInput | material_stockScalarWhereWithAggregatesInput[]
    mst_id?: IntWithAggregatesFilter<"material_stock"> | number
    mat_id?: IntWithAggregatesFilter<"material_stock"> | number
    pod_id?: IntWithAggregatesFilter<"material_stock"> | number
    type?: StringWithAggregatesFilter<"material_stock"> | string
    is_active?: BoolWithAggregatesFilter<"material_stock"> | boolean
    ctime?: DateTimeWithAggregatesFilter<"material_stock"> | Date | string
    cusr_id?: IntWithAggregatesFilter<"material_stock"> | number
    mtime?: DateTimeWithAggregatesFilter<"material_stock"> | Date | string
    musr_id?: IntWithAggregatesFilter<"material_stock"> | number
    dtime?: DateTimeNullableWithAggregatesFilter<"material_stock"> | Date | string | null
    dusr_id?: IntWithAggregatesFilter<"material_stock"> | number
  }

  export type usersCreateInput = {
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    roles: rolesCreateNestedOneWithoutUsersInput
    user_profiles?: user_profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    usr_id?: number
    rol_id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    user_profiles?: user_profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    user_profiles?: user_profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    usr_id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    user_profiles?: user_profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    usr_id?: number
    rol_id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    usr_id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_profilesCreateInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    users: usersCreateNestedOneWithoutUser_profilesInput
  }

  export type user_profilesUncheckedCreateInput = {
    usp_id?: number
    usr_id: number
    first_name: string
    middle_name?: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type user_profilesUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutUser_profilesNestedInput
  }

  export type user_profilesUncheckedUpdateInput = {
    usp_id?: IntFieldUpdateOperationsInput | number
    usr_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_profilesCreateManyInput = {
    usp_id?: number
    usr_id: number
    first_name: string
    middle_name?: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type user_profilesUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_profilesUncheckedUpdateManyInput = {
    usp_id?: IntFieldUpdateOperationsInput | number
    usr_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type rolesCreateInput = {
    role_code: string
    role_name: string
    role_description: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    rol_id?: number
    role_code: string
    role_name: string
    role_description: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    rol_id?: IntFieldUpdateOperationsInput | number
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    rol_id?: number
    role_code: string
    role_name: string
    role_description: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type rolesUpdateManyMutationInput = {
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type rolesUncheckedUpdateManyInput = {
    rol_id?: IntFieldUpdateOperationsInput | number
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesCreateInput = {
    category_code: string
    category_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    cat_id?: number
    category_code: string
    category_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    cat_id?: number
    category_code: string
    category_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type categoriesUpdateManyMutationInput = {
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesUncheckedUpdateManyInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    categories: categoriesCreateNestedOneWithoutProductsInput
    product_material?: product_materialCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    prd_id?: number
    cat_id: number
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    product_material?: product_materialUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    product_material?: product_materialUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    prd_id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    product_material?: product_materialUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    prd_id?: number
    cat_id: number
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type productsUpdateManyMutationInput = {
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    prd_id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialCreateInput = {
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    products: productsCreateNestedOneWithoutProduct_materialInput
  }

  export type product_materialUncheckedCreateInput = {
    pmt_id?: number
    prd_id: number
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type product_materialUpdateInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutProduct_materialNestedInput
  }

  export type product_materialUncheckedUpdateInput = {
    pmt_id?: IntFieldUpdateOperationsInput | number
    prd_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialCreateManyInput = {
    pmt_id?: number
    prd_id: number
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type product_materialUpdateManyMutationInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialUncheckedUpdateManyInput = {
    pmt_id?: IntFieldUpdateOperationsInput | number
    prd_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type unitsCreateInput = {
    unit_code: string
    unit_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    materials?: materialsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateInput = {
    unt_id?: number
    unit_code: string
    unit_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    materials?: materialsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsUpdateInput = {
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    materials?: materialsUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateInput = {
    unt_id?: IntFieldUpdateOperationsInput | number
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    materials?: materialsUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type unitsCreateManyInput = {
    unt_id?: number
    unit_code: string
    unit_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type unitsUpdateManyMutationInput = {
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type unitsUncheckedUpdateManyInput = {
    unt_id?: IntFieldUpdateOperationsInput | number
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type suppliersCreateInput = {
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    materials?: materialsCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateInput = {
    sup_id?: number
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    materials?: materialsUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUpdateInput = {
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    materials?: materialsUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateInput = {
    sup_id?: IntFieldUpdateOperationsInput | number
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    materials?: materialsUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersCreateManyInput = {
    sup_id?: number
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type suppliersUpdateManyMutationInput = {
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type suppliersUncheckedUpdateManyInput = {
    sup_id?: IntFieldUpdateOperationsInput | number
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsCreateInput = {
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    units: unitsCreateNestedOneWithoutMaterialsInput
    suppliers: suppliersCreateNestedOneWithoutMaterialsInput
    material_stock?: material_stockCreateNestedManyWithoutMaterialsInput
  }

  export type materialsUncheckedCreateInput = {
    mat_id?: number
    unt_id: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    material_stock?: material_stockUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type materialsUpdateInput = {
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutMaterialsNestedInput
    suppliers?: suppliersUpdateOneRequiredWithoutMaterialsNestedInput
    material_stock?: material_stockUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    unt_id?: IntFieldUpdateOperationsInput | number
    sup_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    material_stock?: material_stockUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsCreateManyInput = {
    mat_id?: number
    unt_id: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type materialsUpdateManyMutationInput = {
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsUncheckedUpdateManyInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    unt_id?: IntFieldUpdateOperationsInput | number
    sup_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockCreateInput = {
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    materials: materialsCreateNestedOneWithoutMaterial_stockInput
  }

  export type material_stockUncheckedCreateInput = {
    mst_id?: number
    mat_id: number
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type material_stockUpdateInput = {
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    materials?: materialsUpdateOneRequiredWithoutMaterial_stockNestedInput
  }

  export type material_stockUncheckedUpdateInput = {
    mst_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockCreateManyInput = {
    mst_id?: number
    mat_id: number
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type material_stockUpdateManyMutationInput = {
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockUncheckedUpdateManyInput = {
    mst_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type User_profilesNullableScalarRelationFilter = {
    is?: user_profilesWhereInput | null
    isNot?: user_profilesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    usr_id?: SortOrder
    rol_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_profilesCountOrderByAggregateInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type user_profilesAvgOrderByAggregateInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type user_profilesMaxOrderByAggregateInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type user_profilesMinOrderByAggregateInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type user_profilesSumOrderByAggregateInput = {
    usp_id?: SortOrder
    usr_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    rol_id?: SortOrder
    role_code?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    rol_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    rol_id?: SortOrder
    role_code?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    rol_id?: SortOrder
    role_code?: SortOrder
    role_name?: SortOrder
    role_description?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    rol_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    cat_id?: SortOrder
    category_code?: SortOrder
    category_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    cat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    cat_id?: SortOrder
    category_code?: SortOrder
    category_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    cat_id?: SortOrder
    category_code?: SortOrder
    category_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    cat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type Product_materialListRelationFilter = {
    every?: product_materialWhereInput
    some?: product_materialWhereInput
    none?: product_materialWhereInput
  }

  export type product_materialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    prd_id?: SortOrder
    cat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type product_materialCountOrderByAggregateInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    quantity?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type product_materialAvgOrderByAggregateInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type product_materialMaxOrderByAggregateInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    quantity?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type product_materialMinOrderByAggregateInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    quantity?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type product_materialSumOrderByAggregateInput = {
    pmt_id?: SortOrder
    prd_id?: SortOrder
    mat_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type MaterialsListRelationFilter = {
    every?: materialsWhereInput
    some?: materialsWhereInput
    none?: materialsWhereInput
  }

  export type materialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unitsCountOrderByAggregateInput = {
    unt_id?: SortOrder
    unit_code?: SortOrder
    unit_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type unitsAvgOrderByAggregateInput = {
    unt_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type unitsMaxOrderByAggregateInput = {
    unt_id?: SortOrder
    unit_code?: SortOrder
    unit_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type unitsMinOrderByAggregateInput = {
    unt_id?: SortOrder
    unit_code?: SortOrder
    unit_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type unitsSumOrderByAggregateInput = {
    unt_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type suppliersCountOrderByAggregateInput = {
    sup_id?: SortOrder
    supplier_name?: SortOrder
    supplier_phone?: SortOrder
    supplier_address?: SortOrder
    supplier_email?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type suppliersAvgOrderByAggregateInput = {
    sup_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    sup_id?: SortOrder
    supplier_name?: SortOrder
    supplier_phone?: SortOrder
    supplier_address?: SortOrder
    supplier_email?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    sup_id?: SortOrder
    supplier_name?: SortOrder
    supplier_phone?: SortOrder
    supplier_address?: SortOrder
    supplier_email?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type suppliersSumOrderByAggregateInput = {
    sup_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type UnitsScalarRelationFilter = {
    is?: unitsWhereInput
    isNot?: unitsWhereInput
  }

  export type SuppliersScalarRelationFilter = {
    is?: suppliersWhereInput
    isNot?: suppliersWhereInput
  }

  export type Material_stockListRelationFilter = {
    every?: material_stockWhereInput
    some?: material_stockWhereInput
    none?: material_stockWhereInput
  }

  export type material_stockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type materialsCountOrderByAggregateInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    material_code?: SortOrder
    material_brand?: SortOrder
    material_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type materialsAvgOrderByAggregateInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type materialsMaxOrderByAggregateInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    material_code?: SortOrder
    material_brand?: SortOrder
    material_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type materialsMinOrderByAggregateInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    material_code?: SortOrder
    material_brand?: SortOrder
    material_name?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type materialsSumOrderByAggregateInput = {
    mat_id?: SortOrder
    unt_id?: SortOrder
    sup_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MaterialsScalarRelationFilter = {
    is?: materialsWhereInput
    isNot?: materialsWhereInput
  }

  export type material_stockCountOrderByAggregateInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type material_stockAvgOrderByAggregateInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type material_stockMaxOrderByAggregateInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type material_stockMinOrderByAggregateInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    type?: SortOrder
    is_active?: SortOrder
    ctime?: SortOrder
    cusr_id?: SortOrder
    mtime?: SortOrder
    musr_id?: SortOrder
    dtime?: SortOrder
    dusr_id?: SortOrder
  }

  export type material_stockSumOrderByAggregateInput = {
    mst_id?: SortOrder
    mat_id?: SortOrder
    pod_id?: SortOrder
    cusr_id?: SortOrder
    musr_id?: SortOrder
    dusr_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type user_profilesCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput
    connect?: user_profilesWhereUniqueInput
  }

  export type user_profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput
    connect?: user_profilesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profilesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput
    upsert?: user_profilesUpsertWithoutUsersInput
    disconnect?: user_profilesWhereInput | boolean
    delete?: user_profilesWhereInput | boolean
    connect?: user_profilesWhereUniqueInput
    update?: XOR<XOR<user_profilesUpdateToOneWithWhereWithoutUsersInput, user_profilesUpdateWithoutUsersInput>, user_profilesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_profilesCreateOrConnectWithoutUsersInput
    upsert?: user_profilesUpsertWithoutUsersInput
    disconnect?: user_profilesWhereInput | boolean
    delete?: user_profilesWhereInput | boolean
    connect?: user_profilesWhereUniqueInput
    update?: XOR<XOR<user_profilesUpdateToOneWithWhereWithoutUsersInput, user_profilesUpdateWithoutUsersInput>, user_profilesUncheckedUpdateWithoutUsersInput>
  }

  export type usersCreateNestedOneWithoutUser_profilesInput = {
    create?: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profilesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutUser_profilesNestedInput = {
    create?: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_profilesInput
    upsert?: usersUpsertWithoutUser_profilesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_profilesInput, usersUpdateWithoutUser_profilesInput>, usersUncheckedUpdateWithoutUser_profilesInput>
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type product_materialCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput> | product_materialCreateWithoutProductsInput[] | product_materialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_materialCreateOrConnectWithoutProductsInput | product_materialCreateOrConnectWithoutProductsInput[]
    createMany?: product_materialCreateManyProductsInputEnvelope
    connect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
  }

  export type product_materialUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput> | product_materialCreateWithoutProductsInput[] | product_materialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_materialCreateOrConnectWithoutProductsInput | product_materialCreateOrConnectWithoutProductsInput[]
    createMany?: product_materialCreateManyProductsInputEnvelope
    connect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type product_materialUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput> | product_materialCreateWithoutProductsInput[] | product_materialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_materialCreateOrConnectWithoutProductsInput | product_materialCreateOrConnectWithoutProductsInput[]
    upsert?: product_materialUpsertWithWhereUniqueWithoutProductsInput | product_materialUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_materialCreateManyProductsInputEnvelope
    set?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    disconnect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    delete?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    connect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    update?: product_materialUpdateWithWhereUniqueWithoutProductsInput | product_materialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_materialUpdateManyWithWhereWithoutProductsInput | product_materialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_materialScalarWhereInput | product_materialScalarWhereInput[]
  }

  export type product_materialUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput> | product_materialCreateWithoutProductsInput[] | product_materialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_materialCreateOrConnectWithoutProductsInput | product_materialCreateOrConnectWithoutProductsInput[]
    upsert?: product_materialUpsertWithWhereUniqueWithoutProductsInput | product_materialUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_materialCreateManyProductsInputEnvelope
    set?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    disconnect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    delete?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    connect?: product_materialWhereUniqueInput | product_materialWhereUniqueInput[]
    update?: product_materialUpdateWithWhereUniqueWithoutProductsInput | product_materialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_materialUpdateManyWithWhereWithoutProductsInput | product_materialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_materialScalarWhereInput | product_materialScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_materialInput = {
    create?: XOR<productsCreateWithoutProduct_materialInput, productsUncheckedCreateWithoutProduct_materialInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_materialInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProduct_materialNestedInput = {
    create?: XOR<productsCreateWithoutProduct_materialInput, productsUncheckedCreateWithoutProduct_materialInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_materialInput
    upsert?: productsUpsertWithoutProduct_materialInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_materialInput, productsUpdateWithoutProduct_materialInput>, productsUncheckedUpdateWithoutProduct_materialInput>
  }

  export type materialsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput> | materialsCreateWithoutUnitsInput[] | materialsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutUnitsInput | materialsCreateOrConnectWithoutUnitsInput[]
    createMany?: materialsCreateManyUnitsInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type materialsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput> | materialsCreateWithoutUnitsInput[] | materialsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutUnitsInput | materialsCreateOrConnectWithoutUnitsInput[]
    createMany?: materialsCreateManyUnitsInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type materialsUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput> | materialsCreateWithoutUnitsInput[] | materialsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutUnitsInput | materialsCreateOrConnectWithoutUnitsInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutUnitsInput | materialsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: materialsCreateManyUnitsInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutUnitsInput | materialsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutUnitsInput | materialsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type materialsUncheckedUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput> | materialsCreateWithoutUnitsInput[] | materialsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutUnitsInput | materialsCreateOrConnectWithoutUnitsInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutUnitsInput | materialsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: materialsCreateManyUnitsInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutUnitsInput | materialsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutUnitsInput | materialsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type materialsCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput> | materialsCreateWithoutSuppliersInput[] | materialsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutSuppliersInput | materialsCreateOrConnectWithoutSuppliersInput[]
    createMany?: materialsCreateManySuppliersInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type materialsUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput> | materialsCreateWithoutSuppliersInput[] | materialsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutSuppliersInput | materialsCreateOrConnectWithoutSuppliersInput[]
    createMany?: materialsCreateManySuppliersInputEnvelope
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
  }

  export type materialsUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput> | materialsCreateWithoutSuppliersInput[] | materialsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutSuppliersInput | materialsCreateOrConnectWithoutSuppliersInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutSuppliersInput | materialsUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: materialsCreateManySuppliersInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutSuppliersInput | materialsUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutSuppliersInput | materialsUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type materialsUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput> | materialsCreateWithoutSuppliersInput[] | materialsUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: materialsCreateOrConnectWithoutSuppliersInput | materialsCreateOrConnectWithoutSuppliersInput[]
    upsert?: materialsUpsertWithWhereUniqueWithoutSuppliersInput | materialsUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: materialsCreateManySuppliersInputEnvelope
    set?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    disconnect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    delete?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    connect?: materialsWhereUniqueInput | materialsWhereUniqueInput[]
    update?: materialsUpdateWithWhereUniqueWithoutSuppliersInput | materialsUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: materialsUpdateManyWithWhereWithoutSuppliersInput | materialsUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: materialsScalarWhereInput | materialsScalarWhereInput[]
  }

  export type unitsCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<unitsCreateWithoutMaterialsInput, unitsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutMaterialsInput
    connect?: unitsWhereUniqueInput
  }

  export type suppliersCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<suppliersCreateWithoutMaterialsInput, suppliersUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutMaterialsInput
    connect?: suppliersWhereUniqueInput
  }

  export type material_stockCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput> | material_stockCreateWithoutMaterialsInput[] | material_stockUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: material_stockCreateOrConnectWithoutMaterialsInput | material_stockCreateOrConnectWithoutMaterialsInput[]
    createMany?: material_stockCreateManyMaterialsInputEnvelope
    connect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
  }

  export type material_stockUncheckedCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput> | material_stockCreateWithoutMaterialsInput[] | material_stockUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: material_stockCreateOrConnectWithoutMaterialsInput | material_stockCreateOrConnectWithoutMaterialsInput[]
    createMany?: material_stockCreateManyMaterialsInputEnvelope
    connect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
  }

  export type unitsUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<unitsCreateWithoutMaterialsInput, unitsUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutMaterialsInput
    upsert?: unitsUpsertWithoutMaterialsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<XOR<unitsUpdateToOneWithWhereWithoutMaterialsInput, unitsUpdateWithoutMaterialsInput>, unitsUncheckedUpdateWithoutMaterialsInput>
  }

  export type suppliersUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<suppliersCreateWithoutMaterialsInput, suppliersUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutMaterialsInput
    upsert?: suppliersUpsertWithoutMaterialsInput
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutMaterialsInput, suppliersUpdateWithoutMaterialsInput>, suppliersUncheckedUpdateWithoutMaterialsInput>
  }

  export type material_stockUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput> | material_stockCreateWithoutMaterialsInput[] | material_stockUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: material_stockCreateOrConnectWithoutMaterialsInput | material_stockCreateOrConnectWithoutMaterialsInput[]
    upsert?: material_stockUpsertWithWhereUniqueWithoutMaterialsInput | material_stockUpsertWithWhereUniqueWithoutMaterialsInput[]
    createMany?: material_stockCreateManyMaterialsInputEnvelope
    set?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    disconnect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    delete?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    connect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    update?: material_stockUpdateWithWhereUniqueWithoutMaterialsInput | material_stockUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: material_stockUpdateManyWithWhereWithoutMaterialsInput | material_stockUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: material_stockScalarWhereInput | material_stockScalarWhereInput[]
  }

  export type material_stockUncheckedUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput> | material_stockCreateWithoutMaterialsInput[] | material_stockUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: material_stockCreateOrConnectWithoutMaterialsInput | material_stockCreateOrConnectWithoutMaterialsInput[]
    upsert?: material_stockUpsertWithWhereUniqueWithoutMaterialsInput | material_stockUpsertWithWhereUniqueWithoutMaterialsInput[]
    createMany?: material_stockCreateManyMaterialsInputEnvelope
    set?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    disconnect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    delete?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    connect?: material_stockWhereUniqueInput | material_stockWhereUniqueInput[]
    update?: material_stockUpdateWithWhereUniqueWithoutMaterialsInput | material_stockUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: material_stockUpdateManyWithWhereWithoutMaterialsInput | material_stockUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: material_stockScalarWhereInput | material_stockScalarWhereInput[]
  }

  export type materialsCreateNestedOneWithoutMaterial_stockInput = {
    create?: XOR<materialsCreateWithoutMaterial_stockInput, materialsUncheckedCreateWithoutMaterial_stockInput>
    connectOrCreate?: materialsCreateOrConnectWithoutMaterial_stockInput
    connect?: materialsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type materialsUpdateOneRequiredWithoutMaterial_stockNestedInput = {
    create?: XOR<materialsCreateWithoutMaterial_stockInput, materialsUncheckedCreateWithoutMaterial_stockInput>
    connectOrCreate?: materialsCreateOrConnectWithoutMaterial_stockInput
    upsert?: materialsUpsertWithoutMaterial_stockInput
    connect?: materialsWhereUniqueInput
    update?: XOR<XOR<materialsUpdateToOneWithWhereWithoutMaterial_stockInput, materialsUpdateWithoutMaterial_stockInput>, materialsUncheckedUpdateWithoutMaterial_stockInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type rolesCreateWithoutUsersInput = {
    role_code: string
    role_name: string
    role_description: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    rol_id?: number
    role_code: string
    role_name: string
    role_description: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_profilesCreateWithoutUsersInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type user_profilesUncheckedCreateWithoutUsersInput = {
    usp_id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    birth_date: string
    gender: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type user_profilesCreateOrConnectWithoutUsersInput = {
    where: user_profilesWhereUniqueInput
    create: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    rol_id?: IntFieldUpdateOperationsInput | number
    role_code?: StringFieldUpdateOperationsInput | string
    role_name?: StringFieldUpdateOperationsInput | string
    role_description?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_profilesUpsertWithoutUsersInput = {
    update: XOR<user_profilesUpdateWithoutUsersInput, user_profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_profilesCreateWithoutUsersInput, user_profilesUncheckedCreateWithoutUsersInput>
    where?: user_profilesWhereInput
  }

  export type user_profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_profilesWhereInput
    data: XOR<user_profilesUpdateWithoutUsersInput, user_profilesUncheckedUpdateWithoutUsersInput>
  }

  export type user_profilesUpdateWithoutUsersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_profilesUncheckedUpdateWithoutUsersInput = {
    usp_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutUser_profilesInput = {
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_profilesInput = {
    usr_id?: number
    rol_id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type usersCreateOrConnectWithoutUser_profilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
  }

  export type usersUpsertWithoutUser_profilesInput = {
    update: XOR<usersUpdateWithoutUser_profilesInput, usersUncheckedUpdateWithoutUser_profilesInput>
    create: XOR<usersCreateWithoutUser_profilesInput, usersUncheckedCreateWithoutUser_profilesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_profilesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_profilesInput, usersUncheckedUpdateWithoutUser_profilesInput>
  }

  export type usersUpdateWithoutUser_profilesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_profilesInput = {
    usr_id?: IntFieldUpdateOperationsInput | number
    rol_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutRolesInput = {
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    user_profiles?: user_profilesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    usr_id?: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    user_profiles?: user_profilesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    usr_id?: IntFilter<"users"> | number
    rol_id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    ctime?: DateTimeFilter<"users"> | Date | string
    cusr_id?: IntFilter<"users"> | number
    mtime?: DateTimeFilter<"users"> | Date | string
    musr_id?: IntFilter<"users"> | number
    dtime?: DateTimeNullableFilter<"users"> | Date | string | null
    dusr_id?: IntFilter<"users"> | number
  }

  export type productsCreateWithoutCategoriesInput = {
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    product_material?: product_materialCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    prd_id?: number
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    product_material?: product_materialUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    prd_id?: IntFilter<"products"> | number
    cat_id?: IntFilter<"products"> | number
    product_code?: StringFilter<"products"> | string
    product_name?: StringFilter<"products"> | string
    ctime?: DateTimeFilter<"products"> | Date | string
    cusr_id?: IntFilter<"products"> | number
    mtime?: DateTimeFilter<"products"> | Date | string
    musr_id?: IntFilter<"products"> | number
    dtime?: DateTimeNullableFilter<"products"> | Date | string | null
    dusr_id?: IntFilter<"products"> | number
  }

  export type categoriesCreateWithoutProductsInput = {
    category_code: string
    category_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    cat_id?: number
    category_code: string
    category_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_materialCreateWithoutProductsInput = {
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type product_materialUncheckedCreateWithoutProductsInput = {
    pmt_id?: number
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type product_materialCreateOrConnectWithoutProductsInput = {
    where: product_materialWhereUniqueInput
    create: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput>
  }

  export type product_materialCreateManyProductsInputEnvelope = {
    data: product_materialCreateManyProductsInput | product_materialCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    cat_id?: IntFieldUpdateOperationsInput | number
    category_code?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_materialWhereUniqueInput
    update: XOR<product_materialUpdateWithoutProductsInput, product_materialUncheckedUpdateWithoutProductsInput>
    create: XOR<product_materialCreateWithoutProductsInput, product_materialUncheckedCreateWithoutProductsInput>
  }

  export type product_materialUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_materialWhereUniqueInput
    data: XOR<product_materialUpdateWithoutProductsInput, product_materialUncheckedUpdateWithoutProductsInput>
  }

  export type product_materialUpdateManyWithWhereWithoutProductsInput = {
    where: product_materialScalarWhereInput
    data: XOR<product_materialUpdateManyMutationInput, product_materialUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_materialScalarWhereInput = {
    AND?: product_materialScalarWhereInput | product_materialScalarWhereInput[]
    OR?: product_materialScalarWhereInput[]
    NOT?: product_materialScalarWhereInput | product_materialScalarWhereInput[]
    pmt_id?: IntFilter<"product_material"> | number
    prd_id?: IntFilter<"product_material"> | number
    mat_id?: IntFilter<"product_material"> | number
    quantity?: StringFilter<"product_material"> | string
    ctime?: DateTimeFilter<"product_material"> | Date | string
    cusr_id?: IntFilter<"product_material"> | number
    mtime?: DateTimeFilter<"product_material"> | Date | string
    musr_id?: IntFilter<"product_material"> | number
    dtime?: DateTimeNullableFilter<"product_material"> | Date | string | null
    dusr_id?: IntFilter<"product_material"> | number
  }

  export type productsCreateWithoutProduct_materialInput = {
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_materialInput = {
    prd_id?: number
    cat_id: number
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type productsCreateOrConnectWithoutProduct_materialInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_materialInput, productsUncheckedCreateWithoutProduct_materialInput>
  }

  export type productsUpsertWithoutProduct_materialInput = {
    update: XOR<productsUpdateWithoutProduct_materialInput, productsUncheckedUpdateWithoutProduct_materialInput>
    create: XOR<productsCreateWithoutProduct_materialInput, productsUncheckedCreateWithoutProduct_materialInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_materialInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_materialInput, productsUncheckedUpdateWithoutProduct_materialInput>
  }

  export type productsUpdateWithoutProduct_materialInput = {
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_materialInput = {
    prd_id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsCreateWithoutUnitsInput = {
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    suppliers: suppliersCreateNestedOneWithoutMaterialsInput
    material_stock?: material_stockCreateNestedManyWithoutMaterialsInput
  }

  export type materialsUncheckedCreateWithoutUnitsInput = {
    mat_id?: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    material_stock?: material_stockUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type materialsCreateOrConnectWithoutUnitsInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput>
  }

  export type materialsCreateManyUnitsInputEnvelope = {
    data: materialsCreateManyUnitsInput | materialsCreateManyUnitsInput[]
    skipDuplicates?: boolean
  }

  export type materialsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: materialsWhereUniqueInput
    update: XOR<materialsUpdateWithoutUnitsInput, materialsUncheckedUpdateWithoutUnitsInput>
    create: XOR<materialsCreateWithoutUnitsInput, materialsUncheckedCreateWithoutUnitsInput>
  }

  export type materialsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: materialsWhereUniqueInput
    data: XOR<materialsUpdateWithoutUnitsInput, materialsUncheckedUpdateWithoutUnitsInput>
  }

  export type materialsUpdateManyWithWhereWithoutUnitsInput = {
    where: materialsScalarWhereInput
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyWithoutUnitsInput>
  }

  export type materialsScalarWhereInput = {
    AND?: materialsScalarWhereInput | materialsScalarWhereInput[]
    OR?: materialsScalarWhereInput[]
    NOT?: materialsScalarWhereInput | materialsScalarWhereInput[]
    mat_id?: IntFilter<"materials"> | number
    unt_id?: IntFilter<"materials"> | number
    sup_id?: IntFilter<"materials"> | number
    material_code?: StringFilter<"materials"> | string
    material_brand?: StringFilter<"materials"> | string
    material_name?: StringFilter<"materials"> | string
    ctime?: DateTimeFilter<"materials"> | Date | string
    cusr_id?: IntFilter<"materials"> | number
    mtime?: DateTimeFilter<"materials"> | Date | string
    musr_id?: IntFilter<"materials"> | number
    dtime?: DateTimeNullableFilter<"materials"> | Date | string | null
    dusr_id?: IntFilter<"materials"> | number
  }

  export type materialsCreateWithoutSuppliersInput = {
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    units: unitsCreateNestedOneWithoutMaterialsInput
    material_stock?: material_stockCreateNestedManyWithoutMaterialsInput
  }

  export type materialsUncheckedCreateWithoutSuppliersInput = {
    mat_id?: number
    unt_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    material_stock?: material_stockUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type materialsCreateOrConnectWithoutSuppliersInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput>
  }

  export type materialsCreateManySuppliersInputEnvelope = {
    data: materialsCreateManySuppliersInput | materialsCreateManySuppliersInput[]
    skipDuplicates?: boolean
  }

  export type materialsUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: materialsWhereUniqueInput
    update: XOR<materialsUpdateWithoutSuppliersInput, materialsUncheckedUpdateWithoutSuppliersInput>
    create: XOR<materialsCreateWithoutSuppliersInput, materialsUncheckedCreateWithoutSuppliersInput>
  }

  export type materialsUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: materialsWhereUniqueInput
    data: XOR<materialsUpdateWithoutSuppliersInput, materialsUncheckedUpdateWithoutSuppliersInput>
  }

  export type materialsUpdateManyWithWhereWithoutSuppliersInput = {
    where: materialsScalarWhereInput
    data: XOR<materialsUpdateManyMutationInput, materialsUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type unitsCreateWithoutMaterialsInput = {
    unit_code: string
    unit_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type unitsUncheckedCreateWithoutMaterialsInput = {
    unt_id?: number
    unit_code: string
    unit_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type unitsCreateOrConnectWithoutMaterialsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutMaterialsInput, unitsUncheckedCreateWithoutMaterialsInput>
  }

  export type suppliersCreateWithoutMaterialsInput = {
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type suppliersUncheckedCreateWithoutMaterialsInput = {
    sup_id?: number
    supplier_name: string
    supplier_phone: string
    supplier_address: string
    supplier_email: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type suppliersCreateOrConnectWithoutMaterialsInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutMaterialsInput, suppliersUncheckedCreateWithoutMaterialsInput>
  }

  export type material_stockCreateWithoutMaterialsInput = {
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type material_stockUncheckedCreateWithoutMaterialsInput = {
    mst_id?: number
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type material_stockCreateOrConnectWithoutMaterialsInput = {
    where: material_stockWhereUniqueInput
    create: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput>
  }

  export type material_stockCreateManyMaterialsInputEnvelope = {
    data: material_stockCreateManyMaterialsInput | material_stockCreateManyMaterialsInput[]
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithoutMaterialsInput = {
    update: XOR<unitsUpdateWithoutMaterialsInput, unitsUncheckedUpdateWithoutMaterialsInput>
    create: XOR<unitsCreateWithoutMaterialsInput, unitsUncheckedCreateWithoutMaterialsInput>
    where?: unitsWhereInput
  }

  export type unitsUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: unitsWhereInput
    data: XOR<unitsUpdateWithoutMaterialsInput, unitsUncheckedUpdateWithoutMaterialsInput>
  }

  export type unitsUpdateWithoutMaterialsInput = {
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type unitsUncheckedUpdateWithoutMaterialsInput = {
    unt_id?: IntFieldUpdateOperationsInput | number
    unit_code?: StringFieldUpdateOperationsInput | string
    unit_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type suppliersUpsertWithoutMaterialsInput = {
    update: XOR<suppliersUpdateWithoutMaterialsInput, suppliersUncheckedUpdateWithoutMaterialsInput>
    create: XOR<suppliersCreateWithoutMaterialsInput, suppliersUncheckedCreateWithoutMaterialsInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutMaterialsInput, suppliersUncheckedUpdateWithoutMaterialsInput>
  }

  export type suppliersUpdateWithoutMaterialsInput = {
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type suppliersUncheckedUpdateWithoutMaterialsInput = {
    sup_id?: IntFieldUpdateOperationsInput | number
    supplier_name?: StringFieldUpdateOperationsInput | string
    supplier_phone?: StringFieldUpdateOperationsInput | string
    supplier_address?: StringFieldUpdateOperationsInput | string
    supplier_email?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockUpsertWithWhereUniqueWithoutMaterialsInput = {
    where: material_stockWhereUniqueInput
    update: XOR<material_stockUpdateWithoutMaterialsInput, material_stockUncheckedUpdateWithoutMaterialsInput>
    create: XOR<material_stockCreateWithoutMaterialsInput, material_stockUncheckedCreateWithoutMaterialsInput>
  }

  export type material_stockUpdateWithWhereUniqueWithoutMaterialsInput = {
    where: material_stockWhereUniqueInput
    data: XOR<material_stockUpdateWithoutMaterialsInput, material_stockUncheckedUpdateWithoutMaterialsInput>
  }

  export type material_stockUpdateManyWithWhereWithoutMaterialsInput = {
    where: material_stockScalarWhereInput
    data: XOR<material_stockUpdateManyMutationInput, material_stockUncheckedUpdateManyWithoutMaterialsInput>
  }

  export type material_stockScalarWhereInput = {
    AND?: material_stockScalarWhereInput | material_stockScalarWhereInput[]
    OR?: material_stockScalarWhereInput[]
    NOT?: material_stockScalarWhereInput | material_stockScalarWhereInput[]
    mst_id?: IntFilter<"material_stock"> | number
    mat_id?: IntFilter<"material_stock"> | number
    pod_id?: IntFilter<"material_stock"> | number
    type?: StringFilter<"material_stock"> | string
    is_active?: BoolFilter<"material_stock"> | boolean
    ctime?: DateTimeFilter<"material_stock"> | Date | string
    cusr_id?: IntFilter<"material_stock"> | number
    mtime?: DateTimeFilter<"material_stock"> | Date | string
    musr_id?: IntFilter<"material_stock"> | number
    dtime?: DateTimeNullableFilter<"material_stock"> | Date | string | null
    dusr_id?: IntFilter<"material_stock"> | number
  }

  export type materialsCreateWithoutMaterial_stockInput = {
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
    units: unitsCreateNestedOneWithoutMaterialsInput
    suppliers: suppliersCreateNestedOneWithoutMaterialsInput
  }

  export type materialsUncheckedCreateWithoutMaterial_stockInput = {
    mat_id?: number
    unt_id: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type materialsCreateOrConnectWithoutMaterial_stockInput = {
    where: materialsWhereUniqueInput
    create: XOR<materialsCreateWithoutMaterial_stockInput, materialsUncheckedCreateWithoutMaterial_stockInput>
  }

  export type materialsUpsertWithoutMaterial_stockInput = {
    update: XOR<materialsUpdateWithoutMaterial_stockInput, materialsUncheckedUpdateWithoutMaterial_stockInput>
    create: XOR<materialsCreateWithoutMaterial_stockInput, materialsUncheckedCreateWithoutMaterial_stockInput>
    where?: materialsWhereInput
  }

  export type materialsUpdateToOneWithWhereWithoutMaterial_stockInput = {
    where?: materialsWhereInput
    data: XOR<materialsUpdateWithoutMaterial_stockInput, materialsUncheckedUpdateWithoutMaterial_stockInput>
  }

  export type materialsUpdateWithoutMaterial_stockInput = {
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutMaterialsNestedInput
    suppliers?: suppliersUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateWithoutMaterial_stockInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    unt_id?: IntFieldUpdateOperationsInput | number
    sup_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateManyRolesInput = {
    usr_id?: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    address: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type usersUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    user_profiles?: user_profilesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    usr_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    user_profiles?: user_profilesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    usr_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateManyCategoriesInput = {
    prd_id?: number
    product_code: string
    product_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type productsUpdateWithoutCategoriesInput = {
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    product_material?: product_materialUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    prd_id?: IntFieldUpdateOperationsInput | number
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    product_material?: product_materialUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    prd_id?: IntFieldUpdateOperationsInput | number
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialCreateManyProductsInput = {
    pmt_id?: number
    mat_id: number
    quantity: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type product_materialUpdateWithoutProductsInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialUncheckedUpdateWithoutProductsInput = {
    pmt_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_materialUncheckedUpdateManyWithoutProductsInput = {
    pmt_id?: IntFieldUpdateOperationsInput | number
    mat_id?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsCreateManyUnitsInput = {
    mat_id?: number
    sup_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type materialsUpdateWithoutUnitsInput = {
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    suppliers?: suppliersUpdateOneRequiredWithoutMaterialsNestedInput
    material_stock?: material_stockUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateWithoutUnitsInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    sup_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    material_stock?: material_stockUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateManyWithoutUnitsInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    sup_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type materialsCreateManySuppliersInput = {
    mat_id?: number
    unt_id: number
    material_code: string
    material_brand: string
    material_name: string
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type materialsUpdateWithoutSuppliersInput = {
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    units?: unitsUpdateOneRequiredWithoutMaterialsNestedInput
    material_stock?: material_stockUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateWithoutSuppliersInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    unt_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
    material_stock?: material_stockUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type materialsUncheckedUpdateManyWithoutSuppliersInput = {
    mat_id?: IntFieldUpdateOperationsInput | number
    unt_id?: IntFieldUpdateOperationsInput | number
    material_code?: StringFieldUpdateOperationsInput | string
    material_brand?: StringFieldUpdateOperationsInput | string
    material_name?: StringFieldUpdateOperationsInput | string
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockCreateManyMaterialsInput = {
    mst_id?: number
    pod_id: number
    type: string
    is_active: boolean
    ctime?: Date | string
    cusr_id: number
    mtime?: Date | string
    musr_id: number
    dtime?: Date | string | null
    dusr_id: number
  }

  export type material_stockUpdateWithoutMaterialsInput = {
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockUncheckedUpdateWithoutMaterialsInput = {
    mst_id?: IntFieldUpdateOperationsInput | number
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }

  export type material_stockUncheckedUpdateManyWithoutMaterialsInput = {
    mst_id?: IntFieldUpdateOperationsInput | number
    pod_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    ctime?: DateTimeFieldUpdateOperationsInput | Date | string
    cusr_id?: IntFieldUpdateOperationsInput | number
    mtime?: DateTimeFieldUpdateOperationsInput | Date | string
    musr_id?: IntFieldUpdateOperationsInput | number
    dtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dusr_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}