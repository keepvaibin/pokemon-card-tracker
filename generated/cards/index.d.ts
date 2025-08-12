
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
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Ability
 * 
 */
export type Ability = $Result.DefaultSelection<Prisma.$AbilityPayload>
/**
 * Model Attack
 * 
 */
export type Attack = $Result.DefaultSelection<Prisma.$AttackPayload>
/**
 * Model Weakness
 * 
 */
export type Weakness = $Result.DefaultSelection<Prisma.$WeaknessPayload>
/**
 * Model Resistance
 * 
 */
export type Resistance = $Result.DefaultSelection<Prisma.$ResistancePayload>
/**
 * Model CardLegalities
 * 
 */
export type CardLegalities = $Result.DefaultSelection<Prisma.$CardLegalitiesPayload>
/**
 * Model CardImages
 * 
 */
export type CardImages = $Result.DefaultSelection<Prisma.$CardImagesPayload>
/**
 * Model CardMarket
 * 
 */
export type CardMarket = $Result.DefaultSelection<Prisma.$CardMarketPayload>
/**
 * Model TcgPlayerPrices
 * 
 */
export type TcgPlayerPrices = $Result.DefaultSelection<Prisma.$TcgPlayerPricesPayload>
/**
 * Model TcgPlayer
 * 
 */
export type TcgPlayer = $Result.DefaultSelection<Prisma.$TcgPlayerPayload>
/**
 * Model CardSet
 * 
 */
export type CardSet = $Result.DefaultSelection<Prisma.$CardSetPayload>
/**
 * Model SetLegalities
 * 
 */
export type SetLegalities = $Result.DefaultSelection<Prisma.$SetLegalitiesPayload>
/**
 * Model ImportMetadata
 * 
 */
export type ImportMetadata = $Result.DefaultSelection<Prisma.$ImportMetadataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
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
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ability`: Exposes CRUD operations for the **Ability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abilities
    * const abilities = await prisma.ability.findMany()
    * ```
    */
  get ability(): Prisma.AbilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attack`: Exposes CRUD operations for the **Attack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attacks
    * const attacks = await prisma.attack.findMany()
    * ```
    */
  get attack(): Prisma.AttackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weakness`: Exposes CRUD operations for the **Weakness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weaknesses
    * const weaknesses = await prisma.weakness.findMany()
    * ```
    */
  get weakness(): Prisma.WeaknessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resistance`: Exposes CRUD operations for the **Resistance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resistances
    * const resistances = await prisma.resistance.findMany()
    * ```
    */
  get resistance(): Prisma.ResistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardLegalities`: Exposes CRUD operations for the **CardLegalities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardLegalities
    * const cardLegalities = await prisma.cardLegalities.findMany()
    * ```
    */
  get cardLegalities(): Prisma.CardLegalitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardImages`: Exposes CRUD operations for the **CardImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardImages
    * const cardImages = await prisma.cardImages.findMany()
    * ```
    */
  get cardImages(): Prisma.CardImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardMarket`: Exposes CRUD operations for the **CardMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardMarkets
    * const cardMarkets = await prisma.cardMarket.findMany()
    * ```
    */
  get cardMarket(): Prisma.CardMarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tcgPlayerPrices`: Exposes CRUD operations for the **TcgPlayerPrices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TcgPlayerPrices
    * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findMany()
    * ```
    */
  get tcgPlayerPrices(): Prisma.TcgPlayerPricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tcgPlayer`: Exposes CRUD operations for the **TcgPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TcgPlayers
    * const tcgPlayers = await prisma.tcgPlayer.findMany()
    * ```
    */
  get tcgPlayer(): Prisma.TcgPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardSet`: Exposes CRUD operations for the **CardSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardSets
    * const cardSets = await prisma.cardSet.findMany()
    * ```
    */
  get cardSet(): Prisma.CardSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setLegalities`: Exposes CRUD operations for the **SetLegalities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetLegalities
    * const setLegalities = await prisma.setLegalities.findMany()
    * ```
    */
  get setLegalities(): Prisma.SetLegalitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importMetadata`: Exposes CRUD operations for the **ImportMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportMetadata
    * const importMetadata = await prisma.importMetadata.findMany()
    * ```
    */
  get importMetadata(): Prisma.ImportMetadataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Card: 'Card',
    Ability: 'Ability',
    Attack: 'Attack',
    Weakness: 'Weakness',
    Resistance: 'Resistance',
    CardLegalities: 'CardLegalities',
    CardImages: 'CardImages',
    CardMarket: 'CardMarket',
    TcgPlayerPrices: 'TcgPlayerPrices',
    TcgPlayer: 'TcgPlayer',
    CardSet: 'CardSet',
    SetLegalities: 'SetLegalities',
    ImportMetadata: 'ImportMetadata'
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
      modelProps: "card" | "ability" | "attack" | "weakness" | "resistance" | "cardLegalities" | "cardImages" | "cardMarket" | "tcgPlayerPrices" | "tcgPlayer" | "cardSet" | "setLegalities" | "importMetadata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Ability: {
        payload: Prisma.$AbilityPayload<ExtArgs>
        fields: Prisma.AbilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findFirst: {
            args: Prisma.AbilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          findMany: {
            args: Prisma.AbilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          create: {
            args: Prisma.AbilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          createMany: {
            args: Prisma.AbilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          delete: {
            args: Prisma.AbilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          update: {
            args: Prisma.AbilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          deleteMany: {
            args: Prisma.AbilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>[]
          }
          upsert: {
            args: Prisma.AbilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilityPayload>
          }
          aggregate: {
            args: Prisma.AbilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbility>
          }
          groupBy: {
            args: Prisma.AbilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilityCountArgs<ExtArgs>
            result: $Utils.Optional<AbilityCountAggregateOutputType> | number
          }
        }
      }
      Attack: {
        payload: Prisma.$AttackPayload<ExtArgs>
        fields: Prisma.AttackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          findFirst: {
            args: Prisma.AttackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          findMany: {
            args: Prisma.AttackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          create: {
            args: Prisma.AttackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          createMany: {
            args: Prisma.AttackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          delete: {
            args: Prisma.AttackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          update: {
            args: Prisma.AttackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          deleteMany: {
            args: Prisma.AttackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>[]
          }
          upsert: {
            args: Prisma.AttackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttackPayload>
          }
          aggregate: {
            args: Prisma.AttackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttack>
          }
          groupBy: {
            args: Prisma.AttackGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttackGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttackCountArgs<ExtArgs>
            result: $Utils.Optional<AttackCountAggregateOutputType> | number
          }
        }
      }
      Weakness: {
        payload: Prisma.$WeaknessPayload<ExtArgs>
        fields: Prisma.WeaknessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeaknessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeaknessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          findFirst: {
            args: Prisma.WeaknessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeaknessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          findMany: {
            args: Prisma.WeaknessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>[]
          }
          create: {
            args: Prisma.WeaknessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          createMany: {
            args: Prisma.WeaknessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeaknessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>[]
          }
          delete: {
            args: Prisma.WeaknessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          update: {
            args: Prisma.WeaknessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          deleteMany: {
            args: Prisma.WeaknessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeaknessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeaknessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>[]
          }
          upsert: {
            args: Prisma.WeaknessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeaknessPayload>
          }
          aggregate: {
            args: Prisma.WeaknessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeakness>
          }
          groupBy: {
            args: Prisma.WeaknessGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeaknessGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeaknessCountArgs<ExtArgs>
            result: $Utils.Optional<WeaknessCountAggregateOutputType> | number
          }
        }
      }
      Resistance: {
        payload: Prisma.$ResistancePayload<ExtArgs>
        fields: Prisma.ResistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          findFirst: {
            args: Prisma.ResistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          findMany: {
            args: Prisma.ResistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          create: {
            args: Prisma.ResistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          createMany: {
            args: Prisma.ResistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          delete: {
            args: Prisma.ResistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          update: {
            args: Prisma.ResistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          deleteMany: {
            args: Prisma.ResistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>[]
          }
          upsert: {
            args: Prisma.ResistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResistancePayload>
          }
          aggregate: {
            args: Prisma.ResistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResistance>
          }
          groupBy: {
            args: Prisma.ResistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResistanceCountArgs<ExtArgs>
            result: $Utils.Optional<ResistanceCountAggregateOutputType> | number
          }
        }
      }
      CardLegalities: {
        payload: Prisma.$CardLegalitiesPayload<ExtArgs>
        fields: Prisma.CardLegalitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardLegalitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardLegalitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          findFirst: {
            args: Prisma.CardLegalitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardLegalitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          findMany: {
            args: Prisma.CardLegalitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>[]
          }
          create: {
            args: Prisma.CardLegalitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          createMany: {
            args: Prisma.CardLegalitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardLegalitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>[]
          }
          delete: {
            args: Prisma.CardLegalitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          update: {
            args: Prisma.CardLegalitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          deleteMany: {
            args: Prisma.CardLegalitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardLegalitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardLegalitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>[]
          }
          upsert: {
            args: Prisma.CardLegalitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLegalitiesPayload>
          }
          aggregate: {
            args: Prisma.CardLegalitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardLegalities>
          }
          groupBy: {
            args: Prisma.CardLegalitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardLegalitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardLegalitiesCountArgs<ExtArgs>
            result: $Utils.Optional<CardLegalitiesCountAggregateOutputType> | number
          }
        }
      }
      CardImages: {
        payload: Prisma.$CardImagesPayload<ExtArgs>
        fields: Prisma.CardImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          findFirst: {
            args: Prisma.CardImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          findMany: {
            args: Prisma.CardImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>[]
          }
          create: {
            args: Prisma.CardImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          createMany: {
            args: Prisma.CardImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>[]
          }
          delete: {
            args: Prisma.CardImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          update: {
            args: Prisma.CardImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          deleteMany: {
            args: Prisma.CardImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>[]
          }
          upsert: {
            args: Prisma.CardImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardImagesPayload>
          }
          aggregate: {
            args: Prisma.CardImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardImages>
          }
          groupBy: {
            args: Prisma.CardImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardImagesCountArgs<ExtArgs>
            result: $Utils.Optional<CardImagesCountAggregateOutputType> | number
          }
        }
      }
      CardMarket: {
        payload: Prisma.$CardMarketPayload<ExtArgs>
        fields: Prisma.CardMarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardMarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardMarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          findFirst: {
            args: Prisma.CardMarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardMarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          findMany: {
            args: Prisma.CardMarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>[]
          }
          create: {
            args: Prisma.CardMarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          createMany: {
            args: Prisma.CardMarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardMarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>[]
          }
          delete: {
            args: Prisma.CardMarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          update: {
            args: Prisma.CardMarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          deleteMany: {
            args: Prisma.CardMarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardMarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardMarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>[]
          }
          upsert: {
            args: Prisma.CardMarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMarketPayload>
          }
          aggregate: {
            args: Prisma.CardMarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardMarket>
          }
          groupBy: {
            args: Prisma.CardMarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardMarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardMarketCountArgs<ExtArgs>
            result: $Utils.Optional<CardMarketCountAggregateOutputType> | number
          }
        }
      }
      TcgPlayerPrices: {
        payload: Prisma.$TcgPlayerPricesPayload<ExtArgs>
        fields: Prisma.TcgPlayerPricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TcgPlayerPricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TcgPlayerPricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          findFirst: {
            args: Prisma.TcgPlayerPricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TcgPlayerPricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          findMany: {
            args: Prisma.TcgPlayerPricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>[]
          }
          create: {
            args: Prisma.TcgPlayerPricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          createMany: {
            args: Prisma.TcgPlayerPricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TcgPlayerPricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>[]
          }
          delete: {
            args: Prisma.TcgPlayerPricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          update: {
            args: Prisma.TcgPlayerPricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          deleteMany: {
            args: Prisma.TcgPlayerPricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TcgPlayerPricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TcgPlayerPricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>[]
          }
          upsert: {
            args: Prisma.TcgPlayerPricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPricesPayload>
          }
          aggregate: {
            args: Prisma.TcgPlayerPricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTcgPlayerPrices>
          }
          groupBy: {
            args: Prisma.TcgPlayerPricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TcgPlayerPricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TcgPlayerPricesCountArgs<ExtArgs>
            result: $Utils.Optional<TcgPlayerPricesCountAggregateOutputType> | number
          }
        }
      }
      TcgPlayer: {
        payload: Prisma.$TcgPlayerPayload<ExtArgs>
        fields: Prisma.TcgPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TcgPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TcgPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          findFirst: {
            args: Prisma.TcgPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TcgPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          findMany: {
            args: Prisma.TcgPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>[]
          }
          create: {
            args: Prisma.TcgPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          createMany: {
            args: Prisma.TcgPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TcgPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>[]
          }
          delete: {
            args: Prisma.TcgPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          update: {
            args: Prisma.TcgPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          deleteMany: {
            args: Prisma.TcgPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TcgPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TcgPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>[]
          }
          upsert: {
            args: Prisma.TcgPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TcgPlayerPayload>
          }
          aggregate: {
            args: Prisma.TcgPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTcgPlayer>
          }
          groupBy: {
            args: Prisma.TcgPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TcgPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TcgPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<TcgPlayerCountAggregateOutputType> | number
          }
        }
      }
      CardSet: {
        payload: Prisma.$CardSetPayload<ExtArgs>
        fields: Prisma.CardSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          findFirst: {
            args: Prisma.CardSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          findMany: {
            args: Prisma.CardSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          create: {
            args: Prisma.CardSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          createMany: {
            args: Prisma.CardSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          delete: {
            args: Prisma.CardSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          update: {
            args: Prisma.CardSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          deleteMany: {
            args: Prisma.CardSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          upsert: {
            args: Prisma.CardSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          aggregate: {
            args: Prisma.CardSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardSet>
          }
          groupBy: {
            args: Prisma.CardSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardSetCountArgs<ExtArgs>
            result: $Utils.Optional<CardSetCountAggregateOutputType> | number
          }
        }
      }
      SetLegalities: {
        payload: Prisma.$SetLegalitiesPayload<ExtArgs>
        fields: Prisma.SetLegalitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetLegalitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetLegalitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          findFirst: {
            args: Prisma.SetLegalitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetLegalitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          findMany: {
            args: Prisma.SetLegalitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>[]
          }
          create: {
            args: Prisma.SetLegalitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          createMany: {
            args: Prisma.SetLegalitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetLegalitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>[]
          }
          delete: {
            args: Prisma.SetLegalitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          update: {
            args: Prisma.SetLegalitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          deleteMany: {
            args: Prisma.SetLegalitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetLegalitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetLegalitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>[]
          }
          upsert: {
            args: Prisma.SetLegalitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetLegalitiesPayload>
          }
          aggregate: {
            args: Prisma.SetLegalitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetLegalities>
          }
          groupBy: {
            args: Prisma.SetLegalitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetLegalitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetLegalitiesCountArgs<ExtArgs>
            result: $Utils.Optional<SetLegalitiesCountAggregateOutputType> | number
          }
        }
      }
      ImportMetadata: {
        payload: Prisma.$ImportMetadataPayload<ExtArgs>
        fields: Prisma.ImportMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          findFirst: {
            args: Prisma.ImportMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          findMany: {
            args: Prisma.ImportMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>[]
          }
          create: {
            args: Prisma.ImportMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          createMany: {
            args: Prisma.ImportMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>[]
          }
          delete: {
            args: Prisma.ImportMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          update: {
            args: Prisma.ImportMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ImportMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>[]
          }
          upsert: {
            args: Prisma.ImportMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportMetadataPayload>
          }
          aggregate: {
            args: Prisma.ImportMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportMetadata>
          }
          groupBy: {
            args: Prisma.ImportMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ImportMetadataCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    card?: CardOmit
    ability?: AbilityOmit
    attack?: AttackOmit
    weakness?: WeaknessOmit
    resistance?: ResistanceOmit
    cardLegalities?: CardLegalitiesOmit
    cardImages?: CardImagesOmit
    cardMarket?: CardMarketOmit
    tcgPlayerPrices?: TcgPlayerPricesOmit
    tcgPlayer?: TcgPlayerOmit
    cardSet?: CardSetOmit
    setLegalities?: SetLegalitiesOmit
    importMetadata?: ImportMetadataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    abilities: number
    attacks: number
    weaknesses: number
    resistances: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abilities?: boolean | CardCountOutputTypeCountAbilitiesArgs
    attacks?: boolean | CardCountOutputTypeCountAttacksArgs
    weaknesses?: boolean | CardCountOutputTypeCountWeaknessesArgs
    resistances?: boolean | CardCountOutputTypeCountResistancesArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountAbilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountAttacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttackWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountWeaknessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaknessWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountResistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResistanceWhereInput
  }


  /**
   * Count Type CardSetCountOutputType
   */

  export type CardSetCountOutputType = {
    cards: number
  }

  export type CardSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardSetCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * CardSetCountOutputType without action
   */
  export type CardSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSetCountOutputType
     */
    select?: CardSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardSetCountOutputType without action
   */
  export type CardSetCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    nationalPokedexNumbers: number | null
    convertedRetreatCost: number | null
  }

  export type CardSumAggregateOutputType = {
    nationalPokedexNumbers: number[]
    convertedRetreatCost: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    name: string | null
    supertype: string | null
    level: string | null
    hp: string | null
    evolvesFrom: string | null
    flavorText: string | null
    artist: string | null
    rarity: string | null
    number: string | null
    setId: string | null
    convertedRetreatCost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    supertype: string | null
    level: string | null
    hp: string | null
    evolvesFrom: string | null
    flavorText: string | null
    artist: string | null
    rarity: string | null
    number: string | null
    setId: string | null
    convertedRetreatCost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    supertype: number
    subtypes: number
    level: number
    hp: number
    types: number
    evolvesFrom: number
    evolvesTo: number
    rules: number
    flavorText: number
    artist: number
    rarity: number
    number: number
    nationalPokedexNumbers: number
    setId: number
    retreatCost: number
    convertedRetreatCost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    nationalPokedexNumbers?: true
    convertedRetreatCost?: true
  }

  export type CardSumAggregateInputType = {
    nationalPokedexNumbers?: true
    convertedRetreatCost?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    supertype?: true
    level?: true
    hp?: true
    evolvesFrom?: true
    flavorText?: true
    artist?: true
    rarity?: true
    number?: true
    setId?: true
    convertedRetreatCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    supertype?: true
    level?: true
    hp?: true
    evolvesFrom?: true
    flavorText?: true
    artist?: true
    rarity?: true
    number?: true
    setId?: true
    convertedRetreatCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    supertype?: true
    subtypes?: true
    level?: true
    hp?: true
    types?: true
    evolvesFrom?: true
    evolvesTo?: true
    rules?: true
    flavorText?: true
    artist?: true
    rarity?: true
    number?: true
    nationalPokedexNumbers?: true
    setId?: true
    retreatCost?: true
    convertedRetreatCost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    name: string
    supertype: string | null
    subtypes: string[]
    level: string | null
    hp: string | null
    types: string[]
    evolvesFrom: string | null
    evolvesTo: string[]
    rules: string[]
    flavorText: string | null
    artist: string | null
    rarity: string | null
    number: string
    nationalPokedexNumbers: number[]
    setId: string | null
    retreatCost: string[]
    convertedRetreatCost: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    supertype?: boolean
    subtypes?: boolean
    level?: boolean
    hp?: boolean
    types?: boolean
    evolvesFrom?: boolean
    evolvesTo?: boolean
    rules?: boolean
    flavorText?: boolean
    artist?: boolean
    rarity?: boolean
    number?: boolean
    nationalPokedexNumbers?: boolean
    setId?: boolean
    retreatCost?: boolean
    convertedRetreatCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    abilities?: boolean | Card$abilitiesArgs<ExtArgs>
    attacks?: boolean | Card$attacksArgs<ExtArgs>
    weaknesses?: boolean | Card$weaknessesArgs<ExtArgs>
    resistances?: boolean | Card$resistancesArgs<ExtArgs>
    legalities?: boolean | Card$legalitiesArgs<ExtArgs>
    images?: boolean | Card$imagesArgs<ExtArgs>
    cardmarket?: boolean | Card$cardmarketArgs<ExtArgs>
    tcgplayer?: boolean | Card$tcgplayerArgs<ExtArgs>
    set?: boolean | Card$setArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    supertype?: boolean
    subtypes?: boolean
    level?: boolean
    hp?: boolean
    types?: boolean
    evolvesFrom?: boolean
    evolvesTo?: boolean
    rules?: boolean
    flavorText?: boolean
    artist?: boolean
    rarity?: boolean
    number?: boolean
    nationalPokedexNumbers?: boolean
    setId?: boolean
    retreatCost?: boolean
    convertedRetreatCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    set?: boolean | Card$setArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    supertype?: boolean
    subtypes?: boolean
    level?: boolean
    hp?: boolean
    types?: boolean
    evolvesFrom?: boolean
    evolvesTo?: boolean
    rules?: boolean
    flavorText?: boolean
    artist?: boolean
    rarity?: boolean
    number?: boolean
    nationalPokedexNumbers?: boolean
    setId?: boolean
    retreatCost?: boolean
    convertedRetreatCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    set?: boolean | Card$setArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    supertype?: boolean
    subtypes?: boolean
    level?: boolean
    hp?: boolean
    types?: boolean
    evolvesFrom?: boolean
    evolvesTo?: boolean
    rules?: boolean
    flavorText?: boolean
    artist?: boolean
    rarity?: boolean
    number?: boolean
    nationalPokedexNumbers?: boolean
    setId?: boolean
    retreatCost?: boolean
    convertedRetreatCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "supertype" | "subtypes" | "level" | "hp" | "types" | "evolvesFrom" | "evolvesTo" | "rules" | "flavorText" | "artist" | "rarity" | "number" | "nationalPokedexNumbers" | "setId" | "retreatCost" | "convertedRetreatCost" | "createdAt" | "updatedAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abilities?: boolean | Card$abilitiesArgs<ExtArgs>
    attacks?: boolean | Card$attacksArgs<ExtArgs>
    weaknesses?: boolean | Card$weaknessesArgs<ExtArgs>
    resistances?: boolean | Card$resistancesArgs<ExtArgs>
    legalities?: boolean | Card$legalitiesArgs<ExtArgs>
    images?: boolean | Card$imagesArgs<ExtArgs>
    cardmarket?: boolean | Card$cardmarketArgs<ExtArgs>
    tcgplayer?: boolean | Card$tcgplayerArgs<ExtArgs>
    set?: boolean | Card$setArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | Card$setArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | Card$setArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      abilities: Prisma.$AbilityPayload<ExtArgs>[]
      attacks: Prisma.$AttackPayload<ExtArgs>[]
      weaknesses: Prisma.$WeaknessPayload<ExtArgs>[]
      resistances: Prisma.$ResistancePayload<ExtArgs>[]
      legalities: Prisma.$CardLegalitiesPayload<ExtArgs> | null
      images: Prisma.$CardImagesPayload<ExtArgs> | null
      cardmarket: Prisma.$CardMarketPayload<ExtArgs> | null
      tcgplayer: Prisma.$TcgPlayerPayload<ExtArgs> | null
      set: Prisma.$CardSetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      supertype: string | null
      subtypes: string[]
      level: string | null
      hp: string | null
      types: string[]
      evolvesFrom: string | null
      evolvesTo: string[]
      rules: string[]
      flavorText: string | null
      artist: string | null
      rarity: string | null
      number: string
      nationalPokedexNumbers: number[]
      setId: string | null
      retreatCost: string[]
      convertedRetreatCost: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abilities<T extends Card$abilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Card$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attacks<T extends Card$attacksArgs<ExtArgs> = {}>(args?: Subset<T, Card$attacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weaknesses<T extends Card$weaknessesArgs<ExtArgs> = {}>(args?: Subset<T, Card$weaknessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resistances<T extends Card$resistancesArgs<ExtArgs> = {}>(args?: Subset<T, Card$resistancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legalities<T extends Card$legalitiesArgs<ExtArgs> = {}>(args?: Subset<T, Card$legalitiesArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Card$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Card$imagesArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cardmarket<T extends Card$cardmarketArgs<ExtArgs> = {}>(args?: Subset<T, Card$cardmarketArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tcgplayer<T extends Card$tcgplayerArgs<ExtArgs> = {}>(args?: Subset<T, Card$tcgplayerArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    set<T extends Card$setArgs<ExtArgs> = {}>(args?: Subset<T, Card$setArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly supertype: FieldRef<"Card", 'String'>
    readonly subtypes: FieldRef<"Card", 'String[]'>
    readonly level: FieldRef<"Card", 'String'>
    readonly hp: FieldRef<"Card", 'String'>
    readonly types: FieldRef<"Card", 'String[]'>
    readonly evolvesFrom: FieldRef<"Card", 'String'>
    readonly evolvesTo: FieldRef<"Card", 'String[]'>
    readonly rules: FieldRef<"Card", 'String[]'>
    readonly flavorText: FieldRef<"Card", 'String'>
    readonly artist: FieldRef<"Card", 'String'>
    readonly rarity: FieldRef<"Card", 'String'>
    readonly number: FieldRef<"Card", 'String'>
    readonly nationalPokedexNumbers: FieldRef<"Card", 'Int[]'>
    readonly setId: FieldRef<"Card", 'String'>
    readonly retreatCost: FieldRef<"Card", 'String[]'>
    readonly convertedRetreatCost: FieldRef<"Card", 'Int'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.abilities
   */
  export type Card$abilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    cursor?: AbilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Card.attacks
   */
  export type Card$attacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    where?: AttackWhereInput
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    cursor?: AttackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Card.weaknesses
   */
  export type Card$weaknessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    where?: WeaknessWhereInput
    orderBy?: WeaknessOrderByWithRelationInput | WeaknessOrderByWithRelationInput[]
    cursor?: WeaknessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeaknessScalarFieldEnum | WeaknessScalarFieldEnum[]
  }

  /**
   * Card.resistances
   */
  export type Card$resistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    where?: ResistanceWhereInput
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    cursor?: ResistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Card.legalities
   */
  export type Card$legalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    where?: CardLegalitiesWhereInput
  }

  /**
   * Card.images
   */
  export type Card$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    where?: CardImagesWhereInput
  }

  /**
   * Card.cardmarket
   */
  export type Card$cardmarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    where?: CardMarketWhereInput
  }

  /**
   * Card.tcgplayer
   */
  export type Card$tcgplayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    where?: TcgPlayerWhereInput
  }

  /**
   * Card.set
   */
  export type Card$setArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    where?: CardSetWhereInput
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Ability
   */

  export type AggregateAbility = {
    _count: AbilityCountAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  export type AbilityMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    name: string | null
    text: string | null
    type: string | null
  }

  export type AbilityMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    name: string | null
    text: string | null
    type: string | null
  }

  export type AbilityCountAggregateOutputType = {
    id: number
    cardId: number
    name: number
    text: number
    type: number
    _all: number
  }


  export type AbilityMinAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    text?: true
    type?: true
  }

  export type AbilityMaxAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    text?: true
    type?: true
  }

  export type AbilityCountAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    text?: true
    type?: true
    _all?: true
  }

  export type AbilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ability to aggregate.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abilities
    **/
    _count?: true | AbilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilityMaxAggregateInputType
  }

  export type GetAbilityAggregateType<T extends AbilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAbility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbility[P]>
      : GetScalarType<T[P], AggregateAbility[P]>
  }




  export type AbilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilityWhereInput
    orderBy?: AbilityOrderByWithAggregationInput | AbilityOrderByWithAggregationInput[]
    by: AbilityScalarFieldEnum[] | AbilityScalarFieldEnum
    having?: AbilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilityCountAggregateInputType | true
    _min?: AbilityMinAggregateInputType
    _max?: AbilityMaxAggregateInputType
  }

  export type AbilityGroupByOutputType = {
    id: string
    cardId: string
    name: string | null
    text: string | null
    type: string | null
    _count: AbilityCountAggregateOutputType | null
    _min: AbilityMinAggregateOutputType | null
    _max: AbilityMaxAggregateOutputType | null
  }

  type GetAbilityGroupByPayload<T extends AbilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilityGroupByOutputType[P]>
            : GetScalarType<T[P], AbilityGroupByOutputType[P]>
        }
      >
    >


  export type AbilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    text?: boolean
    type?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    text?: boolean
    type?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    text?: boolean
    type?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ability"]>

  export type AbilitySelectScalar = {
    id?: boolean
    cardId?: boolean
    name?: boolean
    text?: boolean
    type?: boolean
  }

  export type AbilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "name" | "text" | "type", ExtArgs["result"]["ability"]>
  export type AbilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AbilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AbilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $AbilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ability"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      name: string | null
      text: string | null
      type: string | null
    }, ExtArgs["result"]["ability"]>
    composites: {}
  }

  type AbilityGetPayload<S extends boolean | null | undefined | AbilityDefaultArgs> = $Result.GetResult<Prisma.$AbilityPayload, S>

  type AbilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilityCountAggregateInputType | true
    }

  export interface AbilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ability'], meta: { name: 'Ability' } }
    /**
     * Find zero or one Ability that matches the filter.
     * @param {AbilityFindUniqueArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilityFindUniqueArgs>(args: SelectSubset<T, AbilityFindUniqueArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilityFindUniqueOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilityFindFirstArgs>(args?: SelectSubset<T, AbilityFindFirstArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindFirstOrThrowArgs} args - Arguments to find a Ability
     * @example
     * // Get one Ability
     * const ability = await prisma.ability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abilities
     * const abilities = await prisma.ability.findMany()
     * 
     * // Get first 10 Abilities
     * const abilities = await prisma.ability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abilityWithIdOnly = await prisma.ability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbilityFindManyArgs>(args?: SelectSubset<T, AbilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ability.
     * @param {AbilityCreateArgs} args - Arguments to create a Ability.
     * @example
     * // Create one Ability
     * const Ability = await prisma.ability.create({
     *   data: {
     *     // ... data to create a Ability
     *   }
     * })
     * 
     */
    create<T extends AbilityCreateArgs>(args: SelectSubset<T, AbilityCreateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abilities.
     * @param {AbilityCreateManyArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilityCreateManyArgs>(args?: SelectSubset<T, AbilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abilities and returns the data saved in the database.
     * @param {AbilityCreateManyAndReturnArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const ability = await prisma.ability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ability.
     * @param {AbilityDeleteArgs} args - Arguments to delete one Ability.
     * @example
     * // Delete one Ability
     * const Ability = await prisma.ability.delete({
     *   where: {
     *     // ... filter to delete one Ability
     *   }
     * })
     * 
     */
    delete<T extends AbilityDeleteArgs>(args: SelectSubset<T, AbilityDeleteArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ability.
     * @param {AbilityUpdateArgs} args - Arguments to update one Ability.
     * @example
     * // Update one Ability
     * const ability = await prisma.ability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilityUpdateArgs>(args: SelectSubset<T, AbilityUpdateArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abilities.
     * @param {AbilityDeleteManyArgs} args - Arguments to filter Abilities to delete.
     * @example
     * // Delete a few Abilities
     * const { count } = await prisma.ability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilityDeleteManyArgs>(args?: SelectSubset<T, AbilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilityUpdateManyArgs>(args: SelectSubset<T, AbilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities and returns the data updated in the database.
     * @param {AbilityUpdateManyAndReturnArgs} args - Arguments to update many Abilities.
     * @example
     * // Update many Abilities
     * const ability = await prisma.ability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abilities and only return the `id`
     * const abilityWithIdOnly = await prisma.ability.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AbilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ability.
     * @param {AbilityUpsertArgs} args - Arguments to update or create a Ability.
     * @example
     * // Update or create a Ability
     * const ability = await prisma.ability.upsert({
     *   create: {
     *     // ... data to create a Ability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ability we want to update
     *   }
     * })
     */
    upsert<T extends AbilityUpsertArgs>(args: SelectSubset<T, AbilityUpsertArgs<ExtArgs>>): Prisma__AbilityClient<$Result.GetResult<Prisma.$AbilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityCountArgs} args - Arguments to filter Abilities to count.
     * @example
     * // Count the number of Abilities
     * const count = await prisma.ability.count({
     *   where: {
     *     // ... the filter for the Abilities we want to count
     *   }
     * })
    **/
    count<T extends AbilityCountArgs>(
      args?: Subset<T, AbilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbilityAggregateArgs>(args: Subset<T, AbilityAggregateArgs>): Prisma.PrismaPromise<GetAbilityAggregateType<T>>

    /**
     * Group by Ability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilityGroupByArgs} args - Group by arguments.
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
      T extends AbilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilityGroupByArgs['orderBy'] }
        : { orderBy?: AbilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ability model
   */
  readonly fields: AbilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ability model
   */
  interface AbilityFieldRefs {
    readonly id: FieldRef<"Ability", 'String'>
    readonly cardId: FieldRef<"Ability", 'String'>
    readonly name: FieldRef<"Ability", 'String'>
    readonly text: FieldRef<"Ability", 'String'>
    readonly type: FieldRef<"Ability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ability findUnique
   */
  export type AbilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findUniqueOrThrow
   */
  export type AbilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability findFirst
   */
  export type AbilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findFirstOrThrow
   */
  export type AbilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Ability to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability findMany
   */
  export type AbilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilityOrderByWithRelationInput | AbilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abilities.
     */
    cursor?: AbilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    distinct?: AbilityScalarFieldEnum | AbilityScalarFieldEnum[]
  }

  /**
   * Ability create
   */
  export type AbilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Ability.
     */
    data: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
  }

  /**
   * Ability createMany
   */
  export type AbilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ability createManyAndReturn
   */
  export type AbilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to create many Abilities.
     */
    data: AbilityCreateManyInput | AbilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability update
   */
  export type AbilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Ability.
     */
    data: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
    /**
     * Choose, which Ability to update.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability updateMany
   */
  export type AbilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
  }

  /**
   * Ability updateManyAndReturn
   */
  export type AbilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ability upsert
   */
  export type AbilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Ability to update in case it exists.
     */
    where: AbilityWhereUniqueInput
    /**
     * In case the Ability found by the `where` argument doesn't exist, create a new Ability with this data.
     */
    create: XOR<AbilityCreateInput, AbilityUncheckedCreateInput>
    /**
     * In case the Ability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilityUpdateInput, AbilityUncheckedUpdateInput>
  }

  /**
   * Ability delete
   */
  export type AbilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
    /**
     * Filter which Ability to delete.
     */
    where: AbilityWhereUniqueInput
  }

  /**
   * Ability deleteMany
   */
  export type AbilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to delete
     */
    where?: AbilityWhereInput
    /**
     * Limit how many Abilities to delete.
     */
    limit?: number
  }

  /**
   * Ability without action
   */
  export type AbilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ability
     */
    select?: AbilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ability
     */
    omit?: AbilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilityInclude<ExtArgs> | null
  }


  /**
   * Model Attack
   */

  export type AggregateAttack = {
    _count: AttackCountAggregateOutputType | null
    _avg: AttackAvgAggregateOutputType | null
    _sum: AttackSumAggregateOutputType | null
    _min: AttackMinAggregateOutputType | null
    _max: AttackMaxAggregateOutputType | null
  }

  export type AttackAvgAggregateOutputType = {
    convertedEnergyCost: number | null
  }

  export type AttackSumAggregateOutputType = {
    convertedEnergyCost: number | null
  }

  export type AttackMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    name: string | null
    convertedEnergyCost: number | null
    damage: string | null
    text: string | null
  }

  export type AttackMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    name: string | null
    convertedEnergyCost: number | null
    damage: string | null
    text: string | null
  }

  export type AttackCountAggregateOutputType = {
    id: number
    cardId: number
    name: number
    cost: number
    convertedEnergyCost: number
    damage: number
    text: number
    _all: number
  }


  export type AttackAvgAggregateInputType = {
    convertedEnergyCost?: true
  }

  export type AttackSumAggregateInputType = {
    convertedEnergyCost?: true
  }

  export type AttackMinAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    convertedEnergyCost?: true
    damage?: true
    text?: true
  }

  export type AttackMaxAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    convertedEnergyCost?: true
    damage?: true
    text?: true
  }

  export type AttackCountAggregateInputType = {
    id?: true
    cardId?: true
    name?: true
    cost?: true
    convertedEnergyCost?: true
    damage?: true
    text?: true
    _all?: true
  }

  export type AttackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attack to aggregate.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attacks
    **/
    _count?: true | AttackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttackMaxAggregateInputType
  }

  export type GetAttackAggregateType<T extends AttackAggregateArgs> = {
        [P in keyof T & keyof AggregateAttack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttack[P]>
      : GetScalarType<T[P], AggregateAttack[P]>
  }




  export type AttackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttackWhereInput
    orderBy?: AttackOrderByWithAggregationInput | AttackOrderByWithAggregationInput[]
    by: AttackScalarFieldEnum[] | AttackScalarFieldEnum
    having?: AttackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttackCountAggregateInputType | true
    _avg?: AttackAvgAggregateInputType
    _sum?: AttackSumAggregateInputType
    _min?: AttackMinAggregateInputType
    _max?: AttackMaxAggregateInputType
  }

  export type AttackGroupByOutputType = {
    id: string
    cardId: string
    name: string | null
    cost: string[]
    convertedEnergyCost: number | null
    damage: string | null
    text: string | null
    _count: AttackCountAggregateOutputType | null
    _avg: AttackAvgAggregateOutputType | null
    _sum: AttackSumAggregateOutputType | null
    _min: AttackMinAggregateOutputType | null
    _max: AttackMaxAggregateOutputType | null
  }

  type GetAttackGroupByPayload<T extends AttackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttackGroupByOutputType[P]>
            : GetScalarType<T[P], AttackGroupByOutputType[P]>
        }
      >
    >


  export type AttackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    cost?: boolean
    convertedEnergyCost?: boolean
    damage?: boolean
    text?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    cost?: boolean
    convertedEnergyCost?: boolean
    damage?: boolean
    text?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    name?: boolean
    cost?: boolean
    convertedEnergyCost?: boolean
    damage?: boolean
    text?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attack"]>

  export type AttackSelectScalar = {
    id?: boolean
    cardId?: boolean
    name?: boolean
    cost?: boolean
    convertedEnergyCost?: boolean
    damage?: boolean
    text?: boolean
  }

  export type AttackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "name" | "cost" | "convertedEnergyCost" | "damage" | "text", ExtArgs["result"]["attack"]>
  export type AttackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AttackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AttackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $AttackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attack"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      name: string | null
      cost: string[]
      convertedEnergyCost: number | null
      damage: string | null
      text: string | null
    }, ExtArgs["result"]["attack"]>
    composites: {}
  }

  type AttackGetPayload<S extends boolean | null | undefined | AttackDefaultArgs> = $Result.GetResult<Prisma.$AttackPayload, S>

  type AttackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttackCountAggregateInputType | true
    }

  export interface AttackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attack'], meta: { name: 'Attack' } }
    /**
     * Find zero or one Attack that matches the filter.
     * @param {AttackFindUniqueArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttackFindUniqueArgs>(args: SelectSubset<T, AttackFindUniqueArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttackFindUniqueOrThrowArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttackFindUniqueOrThrowArgs>(args: SelectSubset<T, AttackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindFirstArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttackFindFirstArgs>(args?: SelectSubset<T, AttackFindFirstArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindFirstOrThrowArgs} args - Arguments to find a Attack
     * @example
     * // Get one Attack
     * const attack = await prisma.attack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttackFindFirstOrThrowArgs>(args?: SelectSubset<T, AttackFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attacks
     * const attacks = await prisma.attack.findMany()
     * 
     * // Get first 10 Attacks
     * const attacks = await prisma.attack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attackWithIdOnly = await prisma.attack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttackFindManyArgs>(args?: SelectSubset<T, AttackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attack.
     * @param {AttackCreateArgs} args - Arguments to create a Attack.
     * @example
     * // Create one Attack
     * const Attack = await prisma.attack.create({
     *   data: {
     *     // ... data to create a Attack
     *   }
     * })
     * 
     */
    create<T extends AttackCreateArgs>(args: SelectSubset<T, AttackCreateArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attacks.
     * @param {AttackCreateManyArgs} args - Arguments to create many Attacks.
     * @example
     * // Create many Attacks
     * const attack = await prisma.attack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttackCreateManyArgs>(args?: SelectSubset<T, AttackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attacks and returns the data saved in the database.
     * @param {AttackCreateManyAndReturnArgs} args - Arguments to create many Attacks.
     * @example
     * // Create many Attacks
     * const attack = await prisma.attack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attacks and only return the `id`
     * const attackWithIdOnly = await prisma.attack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttackCreateManyAndReturnArgs>(args?: SelectSubset<T, AttackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attack.
     * @param {AttackDeleteArgs} args - Arguments to delete one Attack.
     * @example
     * // Delete one Attack
     * const Attack = await prisma.attack.delete({
     *   where: {
     *     // ... filter to delete one Attack
     *   }
     * })
     * 
     */
    delete<T extends AttackDeleteArgs>(args: SelectSubset<T, AttackDeleteArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attack.
     * @param {AttackUpdateArgs} args - Arguments to update one Attack.
     * @example
     * // Update one Attack
     * const attack = await prisma.attack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttackUpdateArgs>(args: SelectSubset<T, AttackUpdateArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attacks.
     * @param {AttackDeleteManyArgs} args - Arguments to filter Attacks to delete.
     * @example
     * // Delete a few Attacks
     * const { count } = await prisma.attack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttackDeleteManyArgs>(args?: SelectSubset<T, AttackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attacks
     * const attack = await prisma.attack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttackUpdateManyArgs>(args: SelectSubset<T, AttackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attacks and returns the data updated in the database.
     * @param {AttackUpdateManyAndReturnArgs} args - Arguments to update many Attacks.
     * @example
     * // Update many Attacks
     * const attack = await prisma.attack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attacks and only return the `id`
     * const attackWithIdOnly = await prisma.attack.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AttackUpdateManyAndReturnArgs>(args: SelectSubset<T, AttackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attack.
     * @param {AttackUpsertArgs} args - Arguments to update or create a Attack.
     * @example
     * // Update or create a Attack
     * const attack = await prisma.attack.upsert({
     *   create: {
     *     // ... data to create a Attack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attack we want to update
     *   }
     * })
     */
    upsert<T extends AttackUpsertArgs>(args: SelectSubset<T, AttackUpsertArgs<ExtArgs>>): Prisma__AttackClient<$Result.GetResult<Prisma.$AttackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackCountArgs} args - Arguments to filter Attacks to count.
     * @example
     * // Count the number of Attacks
     * const count = await prisma.attack.count({
     *   where: {
     *     // ... the filter for the Attacks we want to count
     *   }
     * })
    **/
    count<T extends AttackCountArgs>(
      args?: Subset<T, AttackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttackAggregateArgs>(args: Subset<T, AttackAggregateArgs>): Prisma.PrismaPromise<GetAttackAggregateType<T>>

    /**
     * Group by Attack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttackGroupByArgs} args - Group by arguments.
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
      T extends AttackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttackGroupByArgs['orderBy'] }
        : { orderBy?: AttackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attack model
   */
  readonly fields: AttackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attack model
   */
  interface AttackFieldRefs {
    readonly id: FieldRef<"Attack", 'String'>
    readonly cardId: FieldRef<"Attack", 'String'>
    readonly name: FieldRef<"Attack", 'String'>
    readonly cost: FieldRef<"Attack", 'String[]'>
    readonly convertedEnergyCost: FieldRef<"Attack", 'Int'>
    readonly damage: FieldRef<"Attack", 'String'>
    readonly text: FieldRef<"Attack", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attack findUnique
   */
  export type AttackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack findUniqueOrThrow
   */
  export type AttackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack findFirst
   */
  export type AttackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attacks.
     */
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack findFirstOrThrow
   */
  export type AttackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attack to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attacks.
     */
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack findMany
   */
  export type AttackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter, which Attacks to fetch.
     */
    where?: AttackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attacks to fetch.
     */
    orderBy?: AttackOrderByWithRelationInput | AttackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attacks.
     */
    cursor?: AttackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attacks.
     */
    skip?: number
    distinct?: AttackScalarFieldEnum | AttackScalarFieldEnum[]
  }

  /**
   * Attack create
   */
  export type AttackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The data needed to create a Attack.
     */
    data: XOR<AttackCreateInput, AttackUncheckedCreateInput>
  }

  /**
   * Attack createMany
   */
  export type AttackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attacks.
     */
    data: AttackCreateManyInput | AttackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attack createManyAndReturn
   */
  export type AttackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * The data used to create many Attacks.
     */
    data: AttackCreateManyInput | AttackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attack update
   */
  export type AttackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The data needed to update a Attack.
     */
    data: XOR<AttackUpdateInput, AttackUncheckedUpdateInput>
    /**
     * Choose, which Attack to update.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack updateMany
   */
  export type AttackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attacks.
     */
    data: XOR<AttackUpdateManyMutationInput, AttackUncheckedUpdateManyInput>
    /**
     * Filter which Attacks to update
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to update.
     */
    limit?: number
  }

  /**
   * Attack updateManyAndReturn
   */
  export type AttackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * The data used to update Attacks.
     */
    data: XOR<AttackUpdateManyMutationInput, AttackUncheckedUpdateManyInput>
    /**
     * Filter which Attacks to update
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attack upsert
   */
  export type AttackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * The filter to search for the Attack to update in case it exists.
     */
    where: AttackWhereUniqueInput
    /**
     * In case the Attack found by the `where` argument doesn't exist, create a new Attack with this data.
     */
    create: XOR<AttackCreateInput, AttackUncheckedCreateInput>
    /**
     * In case the Attack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttackUpdateInput, AttackUncheckedUpdateInput>
  }

  /**
   * Attack delete
   */
  export type AttackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
    /**
     * Filter which Attack to delete.
     */
    where: AttackWhereUniqueInput
  }

  /**
   * Attack deleteMany
   */
  export type AttackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attacks to delete
     */
    where?: AttackWhereInput
    /**
     * Limit how many Attacks to delete.
     */
    limit?: number
  }

  /**
   * Attack without action
   */
  export type AttackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attack
     */
    select?: AttackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attack
     */
    omit?: AttackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackInclude<ExtArgs> | null
  }


  /**
   * Model Weakness
   */

  export type AggregateWeakness = {
    _count: WeaknessCountAggregateOutputType | null
    _min: WeaknessMinAggregateOutputType | null
    _max: WeaknessMaxAggregateOutputType | null
  }

  export type WeaknessMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: string | null
    value: string | null
  }

  export type WeaknessMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: string | null
    value: string | null
  }

  export type WeaknessCountAggregateOutputType = {
    id: number
    cardId: number
    type: number
    value: number
    _all: number
  }


  export type WeaknessMinAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
  }

  export type WeaknessMaxAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
  }

  export type WeaknessCountAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
    _all?: true
  }

  export type WeaknessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weakness to aggregate.
     */
    where?: WeaknessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weaknesses to fetch.
     */
    orderBy?: WeaknessOrderByWithRelationInput | WeaknessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeaknessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weaknesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weaknesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weaknesses
    **/
    _count?: true | WeaknessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeaknessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeaknessMaxAggregateInputType
  }

  export type GetWeaknessAggregateType<T extends WeaknessAggregateArgs> = {
        [P in keyof T & keyof AggregateWeakness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeakness[P]>
      : GetScalarType<T[P], AggregateWeakness[P]>
  }




  export type WeaknessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeaknessWhereInput
    orderBy?: WeaknessOrderByWithAggregationInput | WeaknessOrderByWithAggregationInput[]
    by: WeaknessScalarFieldEnum[] | WeaknessScalarFieldEnum
    having?: WeaknessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeaknessCountAggregateInputType | true
    _min?: WeaknessMinAggregateInputType
    _max?: WeaknessMaxAggregateInputType
  }

  export type WeaknessGroupByOutputType = {
    id: string
    cardId: string
    type: string | null
    value: string | null
    _count: WeaknessCountAggregateOutputType | null
    _min: WeaknessMinAggregateOutputType | null
    _max: WeaknessMaxAggregateOutputType | null
  }

  type GetWeaknessGroupByPayload<T extends WeaknessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeaknessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeaknessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeaknessGroupByOutputType[P]>
            : GetScalarType<T[P], WeaknessGroupByOutputType[P]>
        }
      >
    >


  export type WeaknessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weakness"]>

  export type WeaknessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weakness"]>

  export type WeaknessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weakness"]>

  export type WeaknessSelectScalar = {
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
  }

  export type WeaknessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "type" | "value", ExtArgs["result"]["weakness"]>
  export type WeaknessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type WeaknessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type WeaknessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $WeaknessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weakness"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      type: string | null
      value: string | null
    }, ExtArgs["result"]["weakness"]>
    composites: {}
  }

  type WeaknessGetPayload<S extends boolean | null | undefined | WeaknessDefaultArgs> = $Result.GetResult<Prisma.$WeaknessPayload, S>

  type WeaknessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeaknessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeaknessCountAggregateInputType | true
    }

  export interface WeaknessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weakness'], meta: { name: 'Weakness' } }
    /**
     * Find zero or one Weakness that matches the filter.
     * @param {WeaknessFindUniqueArgs} args - Arguments to find a Weakness
     * @example
     * // Get one Weakness
     * const weakness = await prisma.weakness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeaknessFindUniqueArgs>(args: SelectSubset<T, WeaknessFindUniqueArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weakness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeaknessFindUniqueOrThrowArgs} args - Arguments to find a Weakness
     * @example
     * // Get one Weakness
     * const weakness = await prisma.weakness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeaknessFindUniqueOrThrowArgs>(args: SelectSubset<T, WeaknessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weakness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessFindFirstArgs} args - Arguments to find a Weakness
     * @example
     * // Get one Weakness
     * const weakness = await prisma.weakness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeaknessFindFirstArgs>(args?: SelectSubset<T, WeaknessFindFirstArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weakness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessFindFirstOrThrowArgs} args - Arguments to find a Weakness
     * @example
     * // Get one Weakness
     * const weakness = await prisma.weakness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeaknessFindFirstOrThrowArgs>(args?: SelectSubset<T, WeaknessFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weaknesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weaknesses
     * const weaknesses = await prisma.weakness.findMany()
     * 
     * // Get first 10 Weaknesses
     * const weaknesses = await prisma.weakness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weaknessWithIdOnly = await prisma.weakness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeaknessFindManyArgs>(args?: SelectSubset<T, WeaknessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weakness.
     * @param {WeaknessCreateArgs} args - Arguments to create a Weakness.
     * @example
     * // Create one Weakness
     * const Weakness = await prisma.weakness.create({
     *   data: {
     *     // ... data to create a Weakness
     *   }
     * })
     * 
     */
    create<T extends WeaknessCreateArgs>(args: SelectSubset<T, WeaknessCreateArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weaknesses.
     * @param {WeaknessCreateManyArgs} args - Arguments to create many Weaknesses.
     * @example
     * // Create many Weaknesses
     * const weakness = await prisma.weakness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeaknessCreateManyArgs>(args?: SelectSubset<T, WeaknessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weaknesses and returns the data saved in the database.
     * @param {WeaknessCreateManyAndReturnArgs} args - Arguments to create many Weaknesses.
     * @example
     * // Create many Weaknesses
     * const weakness = await prisma.weakness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weaknesses and only return the `id`
     * const weaknessWithIdOnly = await prisma.weakness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeaknessCreateManyAndReturnArgs>(args?: SelectSubset<T, WeaknessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weakness.
     * @param {WeaknessDeleteArgs} args - Arguments to delete one Weakness.
     * @example
     * // Delete one Weakness
     * const Weakness = await prisma.weakness.delete({
     *   where: {
     *     // ... filter to delete one Weakness
     *   }
     * })
     * 
     */
    delete<T extends WeaknessDeleteArgs>(args: SelectSubset<T, WeaknessDeleteArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weakness.
     * @param {WeaknessUpdateArgs} args - Arguments to update one Weakness.
     * @example
     * // Update one Weakness
     * const weakness = await prisma.weakness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeaknessUpdateArgs>(args: SelectSubset<T, WeaknessUpdateArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weaknesses.
     * @param {WeaknessDeleteManyArgs} args - Arguments to filter Weaknesses to delete.
     * @example
     * // Delete a few Weaknesses
     * const { count } = await prisma.weakness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeaknessDeleteManyArgs>(args?: SelectSubset<T, WeaknessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weaknesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weaknesses
     * const weakness = await prisma.weakness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeaknessUpdateManyArgs>(args: SelectSubset<T, WeaknessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weaknesses and returns the data updated in the database.
     * @param {WeaknessUpdateManyAndReturnArgs} args - Arguments to update many Weaknesses.
     * @example
     * // Update many Weaknesses
     * const weakness = await prisma.weakness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weaknesses and only return the `id`
     * const weaknessWithIdOnly = await prisma.weakness.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WeaknessUpdateManyAndReturnArgs>(args: SelectSubset<T, WeaknessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weakness.
     * @param {WeaknessUpsertArgs} args - Arguments to update or create a Weakness.
     * @example
     * // Update or create a Weakness
     * const weakness = await prisma.weakness.upsert({
     *   create: {
     *     // ... data to create a Weakness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weakness we want to update
     *   }
     * })
     */
    upsert<T extends WeaknessUpsertArgs>(args: SelectSubset<T, WeaknessUpsertArgs<ExtArgs>>): Prisma__WeaknessClient<$Result.GetResult<Prisma.$WeaknessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weaknesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessCountArgs} args - Arguments to filter Weaknesses to count.
     * @example
     * // Count the number of Weaknesses
     * const count = await prisma.weakness.count({
     *   where: {
     *     // ... the filter for the Weaknesses we want to count
     *   }
     * })
    **/
    count<T extends WeaknessCountArgs>(
      args?: Subset<T, WeaknessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeaknessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weakness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeaknessAggregateArgs>(args: Subset<T, WeaknessAggregateArgs>): Prisma.PrismaPromise<GetWeaknessAggregateType<T>>

    /**
     * Group by Weakness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeaknessGroupByArgs} args - Group by arguments.
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
      T extends WeaknessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeaknessGroupByArgs['orderBy'] }
        : { orderBy?: WeaknessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeaknessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeaknessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weakness model
   */
  readonly fields: WeaknessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weakness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeaknessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Weakness model
   */
  interface WeaknessFieldRefs {
    readonly id: FieldRef<"Weakness", 'String'>
    readonly cardId: FieldRef<"Weakness", 'String'>
    readonly type: FieldRef<"Weakness", 'String'>
    readonly value: FieldRef<"Weakness", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Weakness findUnique
   */
  export type WeaknessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter, which Weakness to fetch.
     */
    where: WeaknessWhereUniqueInput
  }

  /**
   * Weakness findUniqueOrThrow
   */
  export type WeaknessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter, which Weakness to fetch.
     */
    where: WeaknessWhereUniqueInput
  }

  /**
   * Weakness findFirst
   */
  export type WeaknessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter, which Weakness to fetch.
     */
    where?: WeaknessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weaknesses to fetch.
     */
    orderBy?: WeaknessOrderByWithRelationInput | WeaknessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weaknesses.
     */
    cursor?: WeaknessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weaknesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weaknesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weaknesses.
     */
    distinct?: WeaknessScalarFieldEnum | WeaknessScalarFieldEnum[]
  }

  /**
   * Weakness findFirstOrThrow
   */
  export type WeaknessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter, which Weakness to fetch.
     */
    where?: WeaknessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weaknesses to fetch.
     */
    orderBy?: WeaknessOrderByWithRelationInput | WeaknessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weaknesses.
     */
    cursor?: WeaknessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weaknesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weaknesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weaknesses.
     */
    distinct?: WeaknessScalarFieldEnum | WeaknessScalarFieldEnum[]
  }

  /**
   * Weakness findMany
   */
  export type WeaknessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter, which Weaknesses to fetch.
     */
    where?: WeaknessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weaknesses to fetch.
     */
    orderBy?: WeaknessOrderByWithRelationInput | WeaknessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weaknesses.
     */
    cursor?: WeaknessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weaknesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weaknesses.
     */
    skip?: number
    distinct?: WeaknessScalarFieldEnum | WeaknessScalarFieldEnum[]
  }

  /**
   * Weakness create
   */
  export type WeaknessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * The data needed to create a Weakness.
     */
    data: XOR<WeaknessCreateInput, WeaknessUncheckedCreateInput>
  }

  /**
   * Weakness createMany
   */
  export type WeaknessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weaknesses.
     */
    data: WeaknessCreateManyInput | WeaknessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weakness createManyAndReturn
   */
  export type WeaknessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * The data used to create many Weaknesses.
     */
    data: WeaknessCreateManyInput | WeaknessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weakness update
   */
  export type WeaknessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * The data needed to update a Weakness.
     */
    data: XOR<WeaknessUpdateInput, WeaknessUncheckedUpdateInput>
    /**
     * Choose, which Weakness to update.
     */
    where: WeaknessWhereUniqueInput
  }

  /**
   * Weakness updateMany
   */
  export type WeaknessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weaknesses.
     */
    data: XOR<WeaknessUpdateManyMutationInput, WeaknessUncheckedUpdateManyInput>
    /**
     * Filter which Weaknesses to update
     */
    where?: WeaknessWhereInput
    /**
     * Limit how many Weaknesses to update.
     */
    limit?: number
  }

  /**
   * Weakness updateManyAndReturn
   */
  export type WeaknessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * The data used to update Weaknesses.
     */
    data: XOR<WeaknessUpdateManyMutationInput, WeaknessUncheckedUpdateManyInput>
    /**
     * Filter which Weaknesses to update
     */
    where?: WeaknessWhereInput
    /**
     * Limit how many Weaknesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weakness upsert
   */
  export type WeaknessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * The filter to search for the Weakness to update in case it exists.
     */
    where: WeaknessWhereUniqueInput
    /**
     * In case the Weakness found by the `where` argument doesn't exist, create a new Weakness with this data.
     */
    create: XOR<WeaknessCreateInput, WeaknessUncheckedCreateInput>
    /**
     * In case the Weakness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeaknessUpdateInput, WeaknessUncheckedUpdateInput>
  }

  /**
   * Weakness delete
   */
  export type WeaknessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
    /**
     * Filter which Weakness to delete.
     */
    where: WeaknessWhereUniqueInput
  }

  /**
   * Weakness deleteMany
   */
  export type WeaknessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weaknesses to delete
     */
    where?: WeaknessWhereInput
    /**
     * Limit how many Weaknesses to delete.
     */
    limit?: number
  }

  /**
   * Weakness without action
   */
  export type WeaknessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weakness
     */
    select?: WeaknessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weakness
     */
    omit?: WeaknessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeaknessInclude<ExtArgs> | null
  }


  /**
   * Model Resistance
   */

  export type AggregateResistance = {
    _count: ResistanceCountAggregateOutputType | null
    _min: ResistanceMinAggregateOutputType | null
    _max: ResistanceMaxAggregateOutputType | null
  }

  export type ResistanceMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: string | null
    value: string | null
  }

  export type ResistanceMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: string | null
    value: string | null
  }

  export type ResistanceCountAggregateOutputType = {
    id: number
    cardId: number
    type: number
    value: number
    _all: number
  }


  export type ResistanceMinAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
  }

  export type ResistanceMaxAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
  }

  export type ResistanceCountAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    value?: true
    _all?: true
  }

  export type ResistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resistance to aggregate.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resistances
    **/
    _count?: true | ResistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResistanceMaxAggregateInputType
  }

  export type GetResistanceAggregateType<T extends ResistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateResistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResistance[P]>
      : GetScalarType<T[P], AggregateResistance[P]>
  }




  export type ResistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResistanceWhereInput
    orderBy?: ResistanceOrderByWithAggregationInput | ResistanceOrderByWithAggregationInput[]
    by: ResistanceScalarFieldEnum[] | ResistanceScalarFieldEnum
    having?: ResistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResistanceCountAggregateInputType | true
    _min?: ResistanceMinAggregateInputType
    _max?: ResistanceMaxAggregateInputType
  }

  export type ResistanceGroupByOutputType = {
    id: string
    cardId: string
    type: string | null
    value: string | null
    _count: ResistanceCountAggregateOutputType | null
    _min: ResistanceMinAggregateOutputType | null
    _max: ResistanceMaxAggregateOutputType | null
  }

  type GetResistanceGroupByPayload<T extends ResistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResistanceGroupByOutputType[P]>
            : GetScalarType<T[P], ResistanceGroupByOutputType[P]>
        }
      >
    >


  export type ResistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resistance"]>

  export type ResistanceSelectScalar = {
    id?: boolean
    cardId?: boolean
    type?: boolean
    value?: boolean
  }

  export type ResistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "type" | "value", ExtArgs["result"]["resistance"]>
  export type ResistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type ResistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type ResistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $ResistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resistance"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      type: string | null
      value: string | null
    }, ExtArgs["result"]["resistance"]>
    composites: {}
  }

  type ResistanceGetPayload<S extends boolean | null | undefined | ResistanceDefaultArgs> = $Result.GetResult<Prisma.$ResistancePayload, S>

  type ResistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResistanceCountAggregateInputType | true
    }

  export interface ResistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resistance'], meta: { name: 'Resistance' } }
    /**
     * Find zero or one Resistance that matches the filter.
     * @param {ResistanceFindUniqueArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResistanceFindUniqueArgs>(args: SelectSubset<T, ResistanceFindUniqueArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resistance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResistanceFindUniqueOrThrowArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resistance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindFirstArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResistanceFindFirstArgs>(args?: SelectSubset<T, ResistanceFindFirstArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resistance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindFirstOrThrowArgs} args - Arguments to find a Resistance
     * @example
     * // Get one Resistance
     * const resistance = await prisma.resistance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resistances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resistances
     * const resistances = await prisma.resistance.findMany()
     * 
     * // Get first 10 Resistances
     * const resistances = await prisma.resistance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resistanceWithIdOnly = await prisma.resistance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResistanceFindManyArgs>(args?: SelectSubset<T, ResistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resistance.
     * @param {ResistanceCreateArgs} args - Arguments to create a Resistance.
     * @example
     * // Create one Resistance
     * const Resistance = await prisma.resistance.create({
     *   data: {
     *     // ... data to create a Resistance
     *   }
     * })
     * 
     */
    create<T extends ResistanceCreateArgs>(args: SelectSubset<T, ResistanceCreateArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resistances.
     * @param {ResistanceCreateManyArgs} args - Arguments to create many Resistances.
     * @example
     * // Create many Resistances
     * const resistance = await prisma.resistance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResistanceCreateManyArgs>(args?: SelectSubset<T, ResistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resistances and returns the data saved in the database.
     * @param {ResistanceCreateManyAndReturnArgs} args - Arguments to create many Resistances.
     * @example
     * // Create many Resistances
     * const resistance = await prisma.resistance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resistances and only return the `id`
     * const resistanceWithIdOnly = await prisma.resistance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resistance.
     * @param {ResistanceDeleteArgs} args - Arguments to delete one Resistance.
     * @example
     * // Delete one Resistance
     * const Resistance = await prisma.resistance.delete({
     *   where: {
     *     // ... filter to delete one Resistance
     *   }
     * })
     * 
     */
    delete<T extends ResistanceDeleteArgs>(args: SelectSubset<T, ResistanceDeleteArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resistance.
     * @param {ResistanceUpdateArgs} args - Arguments to update one Resistance.
     * @example
     * // Update one Resistance
     * const resistance = await prisma.resistance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResistanceUpdateArgs>(args: SelectSubset<T, ResistanceUpdateArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resistances.
     * @param {ResistanceDeleteManyArgs} args - Arguments to filter Resistances to delete.
     * @example
     * // Delete a few Resistances
     * const { count } = await prisma.resistance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResistanceDeleteManyArgs>(args?: SelectSubset<T, ResistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resistances
     * const resistance = await prisma.resistance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResistanceUpdateManyArgs>(args: SelectSubset<T, ResistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resistances and returns the data updated in the database.
     * @param {ResistanceUpdateManyAndReturnArgs} args - Arguments to update many Resistances.
     * @example
     * // Update many Resistances
     * const resistance = await prisma.resistance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resistances and only return the `id`
     * const resistanceWithIdOnly = await prisma.resistance.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ResistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resistance.
     * @param {ResistanceUpsertArgs} args - Arguments to update or create a Resistance.
     * @example
     * // Update or create a Resistance
     * const resistance = await prisma.resistance.upsert({
     *   create: {
     *     // ... data to create a Resistance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resistance we want to update
     *   }
     * })
     */
    upsert<T extends ResistanceUpsertArgs>(args: SelectSubset<T, ResistanceUpsertArgs<ExtArgs>>): Prisma__ResistanceClient<$Result.GetResult<Prisma.$ResistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceCountArgs} args - Arguments to filter Resistances to count.
     * @example
     * // Count the number of Resistances
     * const count = await prisma.resistance.count({
     *   where: {
     *     // ... the filter for the Resistances we want to count
     *   }
     * })
    **/
    count<T extends ResistanceCountArgs>(
      args?: Subset<T, ResistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResistanceAggregateArgs>(args: Subset<T, ResistanceAggregateArgs>): Prisma.PrismaPromise<GetResistanceAggregateType<T>>

    /**
     * Group by Resistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResistanceGroupByArgs} args - Group by arguments.
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
      T extends ResistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResistanceGroupByArgs['orderBy'] }
        : { orderBy?: ResistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resistance model
   */
  readonly fields: ResistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resistance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resistance model
   */
  interface ResistanceFieldRefs {
    readonly id: FieldRef<"Resistance", 'String'>
    readonly cardId: FieldRef<"Resistance", 'String'>
    readonly type: FieldRef<"Resistance", 'String'>
    readonly value: FieldRef<"Resistance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resistance findUnique
   */
  export type ResistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance findUniqueOrThrow
   */
  export type ResistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance findFirst
   */
  export type ResistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resistances.
     */
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance findFirstOrThrow
   */
  export type ResistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistance to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resistances.
     */
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance findMany
   */
  export type ResistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter, which Resistances to fetch.
     */
    where?: ResistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resistances to fetch.
     */
    orderBy?: ResistanceOrderByWithRelationInput | ResistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resistances.
     */
    cursor?: ResistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resistances.
     */
    skip?: number
    distinct?: ResistanceScalarFieldEnum | ResistanceScalarFieldEnum[]
  }

  /**
   * Resistance create
   */
  export type ResistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resistance.
     */
    data: XOR<ResistanceCreateInput, ResistanceUncheckedCreateInput>
  }

  /**
   * Resistance createMany
   */
  export type ResistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resistances.
     */
    data: ResistanceCreateManyInput | ResistanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resistance createManyAndReturn
   */
  export type ResistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * The data used to create many Resistances.
     */
    data: ResistanceCreateManyInput | ResistanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resistance update
   */
  export type ResistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resistance.
     */
    data: XOR<ResistanceUpdateInput, ResistanceUncheckedUpdateInput>
    /**
     * Choose, which Resistance to update.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance updateMany
   */
  export type ResistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resistances.
     */
    data: XOR<ResistanceUpdateManyMutationInput, ResistanceUncheckedUpdateManyInput>
    /**
     * Filter which Resistances to update
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to update.
     */
    limit?: number
  }

  /**
   * Resistance updateManyAndReturn
   */
  export type ResistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * The data used to update Resistances.
     */
    data: XOR<ResistanceUpdateManyMutationInput, ResistanceUncheckedUpdateManyInput>
    /**
     * Filter which Resistances to update
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resistance upsert
   */
  export type ResistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resistance to update in case it exists.
     */
    where: ResistanceWhereUniqueInput
    /**
     * In case the Resistance found by the `where` argument doesn't exist, create a new Resistance with this data.
     */
    create: XOR<ResistanceCreateInput, ResistanceUncheckedCreateInput>
    /**
     * In case the Resistance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResistanceUpdateInput, ResistanceUncheckedUpdateInput>
  }

  /**
   * Resistance delete
   */
  export type ResistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
    /**
     * Filter which Resistance to delete.
     */
    where: ResistanceWhereUniqueInput
  }

  /**
   * Resistance deleteMany
   */
  export type ResistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resistances to delete
     */
    where?: ResistanceWhereInput
    /**
     * Limit how many Resistances to delete.
     */
    limit?: number
  }

  /**
   * Resistance without action
   */
  export type ResistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resistance
     */
    select?: ResistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resistance
     */
    omit?: ResistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResistanceInclude<ExtArgs> | null
  }


  /**
   * Model CardLegalities
   */

  export type AggregateCardLegalities = {
    _count: CardLegalitiesCountAggregateOutputType | null
    _min: CardLegalitiesMinAggregateOutputType | null
    _max: CardLegalitiesMaxAggregateOutputType | null
  }

  export type CardLegalitiesMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    unlimited: string | null
    standard: string | null
    expanded: string | null
  }

  export type CardLegalitiesMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    unlimited: string | null
    standard: string | null
    expanded: string | null
  }

  export type CardLegalitiesCountAggregateOutputType = {
    id: number
    cardId: number
    unlimited: number
    standard: number
    expanded: number
    _all: number
  }


  export type CardLegalitiesMinAggregateInputType = {
    id?: true
    cardId?: true
    unlimited?: true
    standard?: true
    expanded?: true
  }

  export type CardLegalitiesMaxAggregateInputType = {
    id?: true
    cardId?: true
    unlimited?: true
    standard?: true
    expanded?: true
  }

  export type CardLegalitiesCountAggregateInputType = {
    id?: true
    cardId?: true
    unlimited?: true
    standard?: true
    expanded?: true
    _all?: true
  }

  export type CardLegalitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardLegalities to aggregate.
     */
    where?: CardLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLegalities to fetch.
     */
    orderBy?: CardLegalitiesOrderByWithRelationInput | CardLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardLegalities
    **/
    _count?: true | CardLegalitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardLegalitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardLegalitiesMaxAggregateInputType
  }

  export type GetCardLegalitiesAggregateType<T extends CardLegalitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCardLegalities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardLegalities[P]>
      : GetScalarType<T[P], AggregateCardLegalities[P]>
  }




  export type CardLegalitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardLegalitiesWhereInput
    orderBy?: CardLegalitiesOrderByWithAggregationInput | CardLegalitiesOrderByWithAggregationInput[]
    by: CardLegalitiesScalarFieldEnum[] | CardLegalitiesScalarFieldEnum
    having?: CardLegalitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardLegalitiesCountAggregateInputType | true
    _min?: CardLegalitiesMinAggregateInputType
    _max?: CardLegalitiesMaxAggregateInputType
  }

  export type CardLegalitiesGroupByOutputType = {
    id: string
    cardId: string
    unlimited: string | null
    standard: string | null
    expanded: string | null
    _count: CardLegalitiesCountAggregateOutputType | null
    _min: CardLegalitiesMinAggregateOutputType | null
    _max: CardLegalitiesMaxAggregateOutputType | null
  }

  type GetCardLegalitiesGroupByPayload<T extends CardLegalitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardLegalitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardLegalitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardLegalitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CardLegalitiesGroupByOutputType[P]>
        }
      >
    >


  export type CardLegalitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLegalities"]>

  export type CardLegalitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLegalities"]>

  export type CardLegalitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLegalities"]>

  export type CardLegalitiesSelectScalar = {
    id?: boolean
    cardId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
  }

  export type CardLegalitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "unlimited" | "standard" | "expanded", ExtArgs["result"]["cardLegalities"]>
  export type CardLegalitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardLegalitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardLegalitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CardLegalitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardLegalities"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      unlimited: string | null
      standard: string | null
      expanded: string | null
    }, ExtArgs["result"]["cardLegalities"]>
    composites: {}
  }

  type CardLegalitiesGetPayload<S extends boolean | null | undefined | CardLegalitiesDefaultArgs> = $Result.GetResult<Prisma.$CardLegalitiesPayload, S>

  type CardLegalitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardLegalitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardLegalitiesCountAggregateInputType | true
    }

  export interface CardLegalitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardLegalities'], meta: { name: 'CardLegalities' } }
    /**
     * Find zero or one CardLegalities that matches the filter.
     * @param {CardLegalitiesFindUniqueArgs} args - Arguments to find a CardLegalities
     * @example
     * // Get one CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardLegalitiesFindUniqueArgs>(args: SelectSubset<T, CardLegalitiesFindUniqueArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardLegalities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardLegalitiesFindUniqueOrThrowArgs} args - Arguments to find a CardLegalities
     * @example
     * // Get one CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardLegalitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, CardLegalitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardLegalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesFindFirstArgs} args - Arguments to find a CardLegalities
     * @example
     * // Get one CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardLegalitiesFindFirstArgs>(args?: SelectSubset<T, CardLegalitiesFindFirstArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardLegalities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesFindFirstOrThrowArgs} args - Arguments to find a CardLegalities
     * @example
     * // Get one CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardLegalitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, CardLegalitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardLegalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findMany()
     * 
     * // Get first 10 CardLegalities
     * const cardLegalities = await prisma.cardLegalities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardLegalitiesWithIdOnly = await prisma.cardLegalities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardLegalitiesFindManyArgs>(args?: SelectSubset<T, CardLegalitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardLegalities.
     * @param {CardLegalitiesCreateArgs} args - Arguments to create a CardLegalities.
     * @example
     * // Create one CardLegalities
     * const CardLegalities = await prisma.cardLegalities.create({
     *   data: {
     *     // ... data to create a CardLegalities
     *   }
     * })
     * 
     */
    create<T extends CardLegalitiesCreateArgs>(args: SelectSubset<T, CardLegalitiesCreateArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardLegalities.
     * @param {CardLegalitiesCreateManyArgs} args - Arguments to create many CardLegalities.
     * @example
     * // Create many CardLegalities
     * const cardLegalities = await prisma.cardLegalities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardLegalitiesCreateManyArgs>(args?: SelectSubset<T, CardLegalitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardLegalities and returns the data saved in the database.
     * @param {CardLegalitiesCreateManyAndReturnArgs} args - Arguments to create many CardLegalities.
     * @example
     * // Create many CardLegalities
     * const cardLegalities = await prisma.cardLegalities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardLegalities and only return the `id`
     * const cardLegalitiesWithIdOnly = await prisma.cardLegalities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardLegalitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, CardLegalitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardLegalities.
     * @param {CardLegalitiesDeleteArgs} args - Arguments to delete one CardLegalities.
     * @example
     * // Delete one CardLegalities
     * const CardLegalities = await prisma.cardLegalities.delete({
     *   where: {
     *     // ... filter to delete one CardLegalities
     *   }
     * })
     * 
     */
    delete<T extends CardLegalitiesDeleteArgs>(args: SelectSubset<T, CardLegalitiesDeleteArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardLegalities.
     * @param {CardLegalitiesUpdateArgs} args - Arguments to update one CardLegalities.
     * @example
     * // Update one CardLegalities
     * const cardLegalities = await prisma.cardLegalities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardLegalitiesUpdateArgs>(args: SelectSubset<T, CardLegalitiesUpdateArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardLegalities.
     * @param {CardLegalitiesDeleteManyArgs} args - Arguments to filter CardLegalities to delete.
     * @example
     * // Delete a few CardLegalities
     * const { count } = await prisma.cardLegalities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardLegalitiesDeleteManyArgs>(args?: SelectSubset<T, CardLegalitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardLegalities
     * const cardLegalities = await prisma.cardLegalities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardLegalitiesUpdateManyArgs>(args: SelectSubset<T, CardLegalitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardLegalities and returns the data updated in the database.
     * @param {CardLegalitiesUpdateManyAndReturnArgs} args - Arguments to update many CardLegalities.
     * @example
     * // Update many CardLegalities
     * const cardLegalities = await prisma.cardLegalities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardLegalities and only return the `id`
     * const cardLegalitiesWithIdOnly = await prisma.cardLegalities.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CardLegalitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, CardLegalitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardLegalities.
     * @param {CardLegalitiesUpsertArgs} args - Arguments to update or create a CardLegalities.
     * @example
     * // Update or create a CardLegalities
     * const cardLegalities = await prisma.cardLegalities.upsert({
     *   create: {
     *     // ... data to create a CardLegalities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardLegalities we want to update
     *   }
     * })
     */
    upsert<T extends CardLegalitiesUpsertArgs>(args: SelectSubset<T, CardLegalitiesUpsertArgs<ExtArgs>>): Prisma__CardLegalitiesClient<$Result.GetResult<Prisma.$CardLegalitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesCountArgs} args - Arguments to filter CardLegalities to count.
     * @example
     * // Count the number of CardLegalities
     * const count = await prisma.cardLegalities.count({
     *   where: {
     *     // ... the filter for the CardLegalities we want to count
     *   }
     * })
    **/
    count<T extends CardLegalitiesCountArgs>(
      args?: Subset<T, CardLegalitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardLegalitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardLegalitiesAggregateArgs>(args: Subset<T, CardLegalitiesAggregateArgs>): Prisma.PrismaPromise<GetCardLegalitiesAggregateType<T>>

    /**
     * Group by CardLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLegalitiesGroupByArgs} args - Group by arguments.
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
      T extends CardLegalitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardLegalitiesGroupByArgs['orderBy'] }
        : { orderBy?: CardLegalitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardLegalitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardLegalitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardLegalities model
   */
  readonly fields: CardLegalitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardLegalities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardLegalitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardLegalities model
   */
  interface CardLegalitiesFieldRefs {
    readonly id: FieldRef<"CardLegalities", 'String'>
    readonly cardId: FieldRef<"CardLegalities", 'String'>
    readonly unlimited: FieldRef<"CardLegalities", 'String'>
    readonly standard: FieldRef<"CardLegalities", 'String'>
    readonly expanded: FieldRef<"CardLegalities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardLegalities findUnique
   */
  export type CardLegalitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which CardLegalities to fetch.
     */
    where: CardLegalitiesWhereUniqueInput
  }

  /**
   * CardLegalities findUniqueOrThrow
   */
  export type CardLegalitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which CardLegalities to fetch.
     */
    where: CardLegalitiesWhereUniqueInput
  }

  /**
   * CardLegalities findFirst
   */
  export type CardLegalitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which CardLegalities to fetch.
     */
    where?: CardLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLegalities to fetch.
     */
    orderBy?: CardLegalitiesOrderByWithRelationInput | CardLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardLegalities.
     */
    cursor?: CardLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardLegalities.
     */
    distinct?: CardLegalitiesScalarFieldEnum | CardLegalitiesScalarFieldEnum[]
  }

  /**
   * CardLegalities findFirstOrThrow
   */
  export type CardLegalitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which CardLegalities to fetch.
     */
    where?: CardLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLegalities to fetch.
     */
    orderBy?: CardLegalitiesOrderByWithRelationInput | CardLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardLegalities.
     */
    cursor?: CardLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardLegalities.
     */
    distinct?: CardLegalitiesScalarFieldEnum | CardLegalitiesScalarFieldEnum[]
  }

  /**
   * CardLegalities findMany
   */
  export type CardLegalitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which CardLegalities to fetch.
     */
    where?: CardLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLegalities to fetch.
     */
    orderBy?: CardLegalitiesOrderByWithRelationInput | CardLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardLegalities.
     */
    cursor?: CardLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLegalities.
     */
    skip?: number
    distinct?: CardLegalitiesScalarFieldEnum | CardLegalitiesScalarFieldEnum[]
  }

  /**
   * CardLegalities create
   */
  export type CardLegalitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a CardLegalities.
     */
    data: XOR<CardLegalitiesCreateInput, CardLegalitiesUncheckedCreateInput>
  }

  /**
   * CardLegalities createMany
   */
  export type CardLegalitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardLegalities.
     */
    data: CardLegalitiesCreateManyInput | CardLegalitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardLegalities createManyAndReturn
   */
  export type CardLegalitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * The data used to create many CardLegalities.
     */
    data: CardLegalitiesCreateManyInput | CardLegalitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardLegalities update
   */
  export type CardLegalitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a CardLegalities.
     */
    data: XOR<CardLegalitiesUpdateInput, CardLegalitiesUncheckedUpdateInput>
    /**
     * Choose, which CardLegalities to update.
     */
    where: CardLegalitiesWhereUniqueInput
  }

  /**
   * CardLegalities updateMany
   */
  export type CardLegalitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardLegalities.
     */
    data: XOR<CardLegalitiesUpdateManyMutationInput, CardLegalitiesUncheckedUpdateManyInput>
    /**
     * Filter which CardLegalities to update
     */
    where?: CardLegalitiesWhereInput
    /**
     * Limit how many CardLegalities to update.
     */
    limit?: number
  }

  /**
   * CardLegalities updateManyAndReturn
   */
  export type CardLegalitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * The data used to update CardLegalities.
     */
    data: XOR<CardLegalitiesUpdateManyMutationInput, CardLegalitiesUncheckedUpdateManyInput>
    /**
     * Filter which CardLegalities to update
     */
    where?: CardLegalitiesWhereInput
    /**
     * Limit how many CardLegalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardLegalities upsert
   */
  export type CardLegalitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the CardLegalities to update in case it exists.
     */
    where: CardLegalitiesWhereUniqueInput
    /**
     * In case the CardLegalities found by the `where` argument doesn't exist, create a new CardLegalities with this data.
     */
    create: XOR<CardLegalitiesCreateInput, CardLegalitiesUncheckedCreateInput>
    /**
     * In case the CardLegalities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardLegalitiesUpdateInput, CardLegalitiesUncheckedUpdateInput>
  }

  /**
   * CardLegalities delete
   */
  export type CardLegalitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
    /**
     * Filter which CardLegalities to delete.
     */
    where: CardLegalitiesWhereUniqueInput
  }

  /**
   * CardLegalities deleteMany
   */
  export type CardLegalitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardLegalities to delete
     */
    where?: CardLegalitiesWhereInput
    /**
     * Limit how many CardLegalities to delete.
     */
    limit?: number
  }

  /**
   * CardLegalities without action
   */
  export type CardLegalitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLegalities
     */
    select?: CardLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLegalities
     */
    omit?: CardLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLegalitiesInclude<ExtArgs> | null
  }


  /**
   * Model CardImages
   */

  export type AggregateCardImages = {
    _count: CardImagesCountAggregateOutputType | null
    _min: CardImagesMinAggregateOutputType | null
    _max: CardImagesMaxAggregateOutputType | null
  }

  export type CardImagesMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    small: string | null
    large: string | null
  }

  export type CardImagesMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    small: string | null
    large: string | null
  }

  export type CardImagesCountAggregateOutputType = {
    id: number
    cardId: number
    small: number
    large: number
    _all: number
  }


  export type CardImagesMinAggregateInputType = {
    id?: true
    cardId?: true
    small?: true
    large?: true
  }

  export type CardImagesMaxAggregateInputType = {
    id?: true
    cardId?: true
    small?: true
    large?: true
  }

  export type CardImagesCountAggregateInputType = {
    id?: true
    cardId?: true
    small?: true
    large?: true
    _all?: true
  }

  export type CardImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardImages to aggregate.
     */
    where?: CardImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardImages to fetch.
     */
    orderBy?: CardImagesOrderByWithRelationInput | CardImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardImages
    **/
    _count?: true | CardImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardImagesMaxAggregateInputType
  }

  export type GetCardImagesAggregateType<T extends CardImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateCardImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardImages[P]>
      : GetScalarType<T[P], AggregateCardImages[P]>
  }




  export type CardImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardImagesWhereInput
    orderBy?: CardImagesOrderByWithAggregationInput | CardImagesOrderByWithAggregationInput[]
    by: CardImagesScalarFieldEnum[] | CardImagesScalarFieldEnum
    having?: CardImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardImagesCountAggregateInputType | true
    _min?: CardImagesMinAggregateInputType
    _max?: CardImagesMaxAggregateInputType
  }

  export type CardImagesGroupByOutputType = {
    id: string
    cardId: string
    small: string | null
    large: string | null
    _count: CardImagesCountAggregateOutputType | null
    _min: CardImagesMinAggregateOutputType | null
    _max: CardImagesMaxAggregateOutputType | null
  }

  type GetCardImagesGroupByPayload<T extends CardImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardImagesGroupByOutputType[P]>
            : GetScalarType<T[P], CardImagesGroupByOutputType[P]>
        }
      >
    >


  export type CardImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    small?: boolean
    large?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardImages"]>

  export type CardImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    small?: boolean
    large?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardImages"]>

  export type CardImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    small?: boolean
    large?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardImages"]>

  export type CardImagesSelectScalar = {
    id?: boolean
    cardId?: boolean
    small?: boolean
    large?: boolean
  }

  export type CardImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "small" | "large", ExtArgs["result"]["cardImages"]>
  export type CardImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CardImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardImages"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      small: string | null
      large: string | null
    }, ExtArgs["result"]["cardImages"]>
    composites: {}
  }

  type CardImagesGetPayload<S extends boolean | null | undefined | CardImagesDefaultArgs> = $Result.GetResult<Prisma.$CardImagesPayload, S>

  type CardImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardImagesCountAggregateInputType | true
    }

  export interface CardImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardImages'], meta: { name: 'CardImages' } }
    /**
     * Find zero or one CardImages that matches the filter.
     * @param {CardImagesFindUniqueArgs} args - Arguments to find a CardImages
     * @example
     * // Get one CardImages
     * const cardImages = await prisma.cardImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardImagesFindUniqueArgs>(args: SelectSubset<T, CardImagesFindUniqueArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardImagesFindUniqueOrThrowArgs} args - Arguments to find a CardImages
     * @example
     * // Get one CardImages
     * const cardImages = await prisma.cardImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, CardImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesFindFirstArgs} args - Arguments to find a CardImages
     * @example
     * // Get one CardImages
     * const cardImages = await prisma.cardImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardImagesFindFirstArgs>(args?: SelectSubset<T, CardImagesFindFirstArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesFindFirstOrThrowArgs} args - Arguments to find a CardImages
     * @example
     * // Get one CardImages
     * const cardImages = await prisma.cardImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, CardImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardImages
     * const cardImages = await prisma.cardImages.findMany()
     * 
     * // Get first 10 CardImages
     * const cardImages = await prisma.cardImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardImagesWithIdOnly = await prisma.cardImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardImagesFindManyArgs>(args?: SelectSubset<T, CardImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardImages.
     * @param {CardImagesCreateArgs} args - Arguments to create a CardImages.
     * @example
     * // Create one CardImages
     * const CardImages = await prisma.cardImages.create({
     *   data: {
     *     // ... data to create a CardImages
     *   }
     * })
     * 
     */
    create<T extends CardImagesCreateArgs>(args: SelectSubset<T, CardImagesCreateArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardImages.
     * @param {CardImagesCreateManyArgs} args - Arguments to create many CardImages.
     * @example
     * // Create many CardImages
     * const cardImages = await prisma.cardImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardImagesCreateManyArgs>(args?: SelectSubset<T, CardImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardImages and returns the data saved in the database.
     * @param {CardImagesCreateManyAndReturnArgs} args - Arguments to create many CardImages.
     * @example
     * // Create many CardImages
     * const cardImages = await prisma.cardImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardImages and only return the `id`
     * const cardImagesWithIdOnly = await prisma.cardImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, CardImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardImages.
     * @param {CardImagesDeleteArgs} args - Arguments to delete one CardImages.
     * @example
     * // Delete one CardImages
     * const CardImages = await prisma.cardImages.delete({
     *   where: {
     *     // ... filter to delete one CardImages
     *   }
     * })
     * 
     */
    delete<T extends CardImagesDeleteArgs>(args: SelectSubset<T, CardImagesDeleteArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardImages.
     * @param {CardImagesUpdateArgs} args - Arguments to update one CardImages.
     * @example
     * // Update one CardImages
     * const cardImages = await prisma.cardImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardImagesUpdateArgs>(args: SelectSubset<T, CardImagesUpdateArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardImages.
     * @param {CardImagesDeleteManyArgs} args - Arguments to filter CardImages to delete.
     * @example
     * // Delete a few CardImages
     * const { count } = await prisma.cardImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardImagesDeleteManyArgs>(args?: SelectSubset<T, CardImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardImages
     * const cardImages = await prisma.cardImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardImagesUpdateManyArgs>(args: SelectSubset<T, CardImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardImages and returns the data updated in the database.
     * @param {CardImagesUpdateManyAndReturnArgs} args - Arguments to update many CardImages.
     * @example
     * // Update many CardImages
     * const cardImages = await prisma.cardImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardImages and only return the `id`
     * const cardImagesWithIdOnly = await prisma.cardImages.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CardImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, CardImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardImages.
     * @param {CardImagesUpsertArgs} args - Arguments to update or create a CardImages.
     * @example
     * // Update or create a CardImages
     * const cardImages = await prisma.cardImages.upsert({
     *   create: {
     *     // ... data to create a CardImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardImages we want to update
     *   }
     * })
     */
    upsert<T extends CardImagesUpsertArgs>(args: SelectSubset<T, CardImagesUpsertArgs<ExtArgs>>): Prisma__CardImagesClient<$Result.GetResult<Prisma.$CardImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesCountArgs} args - Arguments to filter CardImages to count.
     * @example
     * // Count the number of CardImages
     * const count = await prisma.cardImages.count({
     *   where: {
     *     // ... the filter for the CardImages we want to count
     *   }
     * })
    **/
    count<T extends CardImagesCountArgs>(
      args?: Subset<T, CardImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardImagesAggregateArgs>(args: Subset<T, CardImagesAggregateArgs>): Prisma.PrismaPromise<GetCardImagesAggregateType<T>>

    /**
     * Group by CardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardImagesGroupByArgs} args - Group by arguments.
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
      T extends CardImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardImagesGroupByArgs['orderBy'] }
        : { orderBy?: CardImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardImages model
   */
  readonly fields: CardImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardImages model
   */
  interface CardImagesFieldRefs {
    readonly id: FieldRef<"CardImages", 'String'>
    readonly cardId: FieldRef<"CardImages", 'String'>
    readonly small: FieldRef<"CardImages", 'String'>
    readonly large: FieldRef<"CardImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardImages findUnique
   */
  export type CardImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter, which CardImages to fetch.
     */
    where: CardImagesWhereUniqueInput
  }

  /**
   * CardImages findUniqueOrThrow
   */
  export type CardImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter, which CardImages to fetch.
     */
    where: CardImagesWhereUniqueInput
  }

  /**
   * CardImages findFirst
   */
  export type CardImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter, which CardImages to fetch.
     */
    where?: CardImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardImages to fetch.
     */
    orderBy?: CardImagesOrderByWithRelationInput | CardImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardImages.
     */
    cursor?: CardImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardImages.
     */
    distinct?: CardImagesScalarFieldEnum | CardImagesScalarFieldEnum[]
  }

  /**
   * CardImages findFirstOrThrow
   */
  export type CardImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter, which CardImages to fetch.
     */
    where?: CardImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardImages to fetch.
     */
    orderBy?: CardImagesOrderByWithRelationInput | CardImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardImages.
     */
    cursor?: CardImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardImages.
     */
    distinct?: CardImagesScalarFieldEnum | CardImagesScalarFieldEnum[]
  }

  /**
   * CardImages findMany
   */
  export type CardImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter, which CardImages to fetch.
     */
    where?: CardImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardImages to fetch.
     */
    orderBy?: CardImagesOrderByWithRelationInput | CardImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardImages.
     */
    cursor?: CardImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardImages.
     */
    skip?: number
    distinct?: CardImagesScalarFieldEnum | CardImagesScalarFieldEnum[]
  }

  /**
   * CardImages create
   */
  export type CardImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a CardImages.
     */
    data: XOR<CardImagesCreateInput, CardImagesUncheckedCreateInput>
  }

  /**
   * CardImages createMany
   */
  export type CardImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardImages.
     */
    data: CardImagesCreateManyInput | CardImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardImages createManyAndReturn
   */
  export type CardImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * The data used to create many CardImages.
     */
    data: CardImagesCreateManyInput | CardImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardImages update
   */
  export type CardImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a CardImages.
     */
    data: XOR<CardImagesUpdateInput, CardImagesUncheckedUpdateInput>
    /**
     * Choose, which CardImages to update.
     */
    where: CardImagesWhereUniqueInput
  }

  /**
   * CardImages updateMany
   */
  export type CardImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardImages.
     */
    data: XOR<CardImagesUpdateManyMutationInput, CardImagesUncheckedUpdateManyInput>
    /**
     * Filter which CardImages to update
     */
    where?: CardImagesWhereInput
    /**
     * Limit how many CardImages to update.
     */
    limit?: number
  }

  /**
   * CardImages updateManyAndReturn
   */
  export type CardImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * The data used to update CardImages.
     */
    data: XOR<CardImagesUpdateManyMutationInput, CardImagesUncheckedUpdateManyInput>
    /**
     * Filter which CardImages to update
     */
    where?: CardImagesWhereInput
    /**
     * Limit how many CardImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardImages upsert
   */
  export type CardImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the CardImages to update in case it exists.
     */
    where: CardImagesWhereUniqueInput
    /**
     * In case the CardImages found by the `where` argument doesn't exist, create a new CardImages with this data.
     */
    create: XOR<CardImagesCreateInput, CardImagesUncheckedCreateInput>
    /**
     * In case the CardImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardImagesUpdateInput, CardImagesUncheckedUpdateInput>
  }

  /**
   * CardImages delete
   */
  export type CardImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
    /**
     * Filter which CardImages to delete.
     */
    where: CardImagesWhereUniqueInput
  }

  /**
   * CardImages deleteMany
   */
  export type CardImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardImages to delete
     */
    where?: CardImagesWhereInput
    /**
     * Limit how many CardImages to delete.
     */
    limit?: number
  }

  /**
   * CardImages without action
   */
  export type CardImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardImages
     */
    select?: CardImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardImages
     */
    omit?: CardImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardImagesInclude<ExtArgs> | null
  }


  /**
   * Model CardMarket
   */

  export type AggregateCardMarket = {
    _count: CardMarketCountAggregateOutputType | null
    _avg: CardMarketAvgAggregateOutputType | null
    _sum: CardMarketSumAggregateOutputType | null
    _min: CardMarketMinAggregateOutputType | null
    _max: CardMarketMaxAggregateOutputType | null
  }

  export type CardMarketAvgAggregateOutputType = {
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  }

  export type CardMarketSumAggregateOutputType = {
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  }

  export type CardMarketMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    url: string | null
    updatedAt: Date | null
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  }

  export type CardMarketMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    url: string | null
    updatedAt: Date | null
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  }

  export type CardMarketCountAggregateOutputType = {
    id: number
    cardId: number
    url: number
    updatedAt: number
    averageSellPrice: number
    lowPrice: number
    trendPrice: number
    germanProLow: number
    suggestedPrice: number
    reverseHoloSell: number
    reverseHoloLow: number
    reverseHoloTrend: number
    lowPriceExPlus: number
    avg1: number
    avg7: number
    avg30: number
    reverseHoloAvg1: number
    reverseHoloAvg7: number
    reverseHoloAvg30: number
    _all: number
  }


  export type CardMarketAvgAggregateInputType = {
    averageSellPrice?: true
    lowPrice?: true
    trendPrice?: true
    germanProLow?: true
    suggestedPrice?: true
    reverseHoloSell?: true
    reverseHoloLow?: true
    reverseHoloTrend?: true
    lowPriceExPlus?: true
    avg1?: true
    avg7?: true
    avg30?: true
    reverseHoloAvg1?: true
    reverseHoloAvg7?: true
    reverseHoloAvg30?: true
  }

  export type CardMarketSumAggregateInputType = {
    averageSellPrice?: true
    lowPrice?: true
    trendPrice?: true
    germanProLow?: true
    suggestedPrice?: true
    reverseHoloSell?: true
    reverseHoloLow?: true
    reverseHoloTrend?: true
    lowPriceExPlus?: true
    avg1?: true
    avg7?: true
    avg30?: true
    reverseHoloAvg1?: true
    reverseHoloAvg7?: true
    reverseHoloAvg30?: true
  }

  export type CardMarketMinAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    averageSellPrice?: true
    lowPrice?: true
    trendPrice?: true
    germanProLow?: true
    suggestedPrice?: true
    reverseHoloSell?: true
    reverseHoloLow?: true
    reverseHoloTrend?: true
    lowPriceExPlus?: true
    avg1?: true
    avg7?: true
    avg30?: true
    reverseHoloAvg1?: true
    reverseHoloAvg7?: true
    reverseHoloAvg30?: true
  }

  export type CardMarketMaxAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    averageSellPrice?: true
    lowPrice?: true
    trendPrice?: true
    germanProLow?: true
    suggestedPrice?: true
    reverseHoloSell?: true
    reverseHoloLow?: true
    reverseHoloTrend?: true
    lowPriceExPlus?: true
    avg1?: true
    avg7?: true
    avg30?: true
    reverseHoloAvg1?: true
    reverseHoloAvg7?: true
    reverseHoloAvg30?: true
  }

  export type CardMarketCountAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    averageSellPrice?: true
    lowPrice?: true
    trendPrice?: true
    germanProLow?: true
    suggestedPrice?: true
    reverseHoloSell?: true
    reverseHoloLow?: true
    reverseHoloTrend?: true
    lowPriceExPlus?: true
    avg1?: true
    avg7?: true
    avg30?: true
    reverseHoloAvg1?: true
    reverseHoloAvg7?: true
    reverseHoloAvg30?: true
    _all?: true
  }

  export type CardMarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardMarket to aggregate.
     */
    where?: CardMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMarkets to fetch.
     */
    orderBy?: CardMarketOrderByWithRelationInput | CardMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardMarkets
    **/
    _count?: true | CardMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardMarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardMarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMarketMaxAggregateInputType
  }

  export type GetCardMarketAggregateType<T extends CardMarketAggregateArgs> = {
        [P in keyof T & keyof AggregateCardMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardMarket[P]>
      : GetScalarType<T[P], AggregateCardMarket[P]>
  }




  export type CardMarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardMarketWhereInput
    orderBy?: CardMarketOrderByWithAggregationInput | CardMarketOrderByWithAggregationInput[]
    by: CardMarketScalarFieldEnum[] | CardMarketScalarFieldEnum
    having?: CardMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardMarketCountAggregateInputType | true
    _avg?: CardMarketAvgAggregateInputType
    _sum?: CardMarketSumAggregateInputType
    _min?: CardMarketMinAggregateInputType
    _max?: CardMarketMaxAggregateInputType
  }

  export type CardMarketGroupByOutputType = {
    id: string
    cardId: string
    url: string | null
    updatedAt: Date | null
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
    _count: CardMarketCountAggregateOutputType | null
    _avg: CardMarketAvgAggregateOutputType | null
    _sum: CardMarketSumAggregateOutputType | null
    _min: CardMarketMinAggregateOutputType | null
    _max: CardMarketMaxAggregateOutputType | null
  }

  type GetCardMarketGroupByPayload<T extends CardMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardMarketGroupByOutputType[P]>
            : GetScalarType<T[P], CardMarketGroupByOutputType[P]>
        }
      >
    >


  export type CardMarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    averageSellPrice?: boolean
    lowPrice?: boolean
    trendPrice?: boolean
    germanProLow?: boolean
    suggestedPrice?: boolean
    reverseHoloSell?: boolean
    reverseHoloLow?: boolean
    reverseHoloTrend?: boolean
    lowPriceExPlus?: boolean
    avg1?: boolean
    avg7?: boolean
    avg30?: boolean
    reverseHoloAvg1?: boolean
    reverseHoloAvg7?: boolean
    reverseHoloAvg30?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMarket"]>

  export type CardMarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    averageSellPrice?: boolean
    lowPrice?: boolean
    trendPrice?: boolean
    germanProLow?: boolean
    suggestedPrice?: boolean
    reverseHoloSell?: boolean
    reverseHoloLow?: boolean
    reverseHoloTrend?: boolean
    lowPriceExPlus?: boolean
    avg1?: boolean
    avg7?: boolean
    avg30?: boolean
    reverseHoloAvg1?: boolean
    reverseHoloAvg7?: boolean
    reverseHoloAvg30?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMarket"]>

  export type CardMarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    averageSellPrice?: boolean
    lowPrice?: boolean
    trendPrice?: boolean
    germanProLow?: boolean
    suggestedPrice?: boolean
    reverseHoloSell?: boolean
    reverseHoloLow?: boolean
    reverseHoloTrend?: boolean
    lowPriceExPlus?: boolean
    avg1?: boolean
    avg7?: boolean
    avg30?: boolean
    reverseHoloAvg1?: boolean
    reverseHoloAvg7?: boolean
    reverseHoloAvg30?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMarket"]>

  export type CardMarketSelectScalar = {
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    averageSellPrice?: boolean
    lowPrice?: boolean
    trendPrice?: boolean
    germanProLow?: boolean
    suggestedPrice?: boolean
    reverseHoloSell?: boolean
    reverseHoloLow?: boolean
    reverseHoloTrend?: boolean
    lowPriceExPlus?: boolean
    avg1?: boolean
    avg7?: boolean
    avg30?: boolean
    reverseHoloAvg1?: boolean
    reverseHoloAvg7?: boolean
    reverseHoloAvg30?: boolean
  }

  export type CardMarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "url" | "updatedAt" | "averageSellPrice" | "lowPrice" | "trendPrice" | "germanProLow" | "suggestedPrice" | "reverseHoloSell" | "reverseHoloLow" | "reverseHoloTrend" | "lowPriceExPlus" | "avg1" | "avg7" | "avg30" | "reverseHoloAvg1" | "reverseHoloAvg7" | "reverseHoloAvg30", ExtArgs["result"]["cardMarket"]>
  export type CardMarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardMarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardMarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CardMarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardMarket"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      url: string | null
      updatedAt: Date | null
      averageSellPrice: number | null
      lowPrice: number | null
      trendPrice: number | null
      germanProLow: number | null
      suggestedPrice: number | null
      reverseHoloSell: number | null
      reverseHoloLow: number | null
      reverseHoloTrend: number | null
      lowPriceExPlus: number | null
      avg1: number | null
      avg7: number | null
      avg30: number | null
      reverseHoloAvg1: number | null
      reverseHoloAvg7: number | null
      reverseHoloAvg30: number | null
    }, ExtArgs["result"]["cardMarket"]>
    composites: {}
  }

  type CardMarketGetPayload<S extends boolean | null | undefined | CardMarketDefaultArgs> = $Result.GetResult<Prisma.$CardMarketPayload, S>

  type CardMarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardMarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardMarketCountAggregateInputType | true
    }

  export interface CardMarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardMarket'], meta: { name: 'CardMarket' } }
    /**
     * Find zero or one CardMarket that matches the filter.
     * @param {CardMarketFindUniqueArgs} args - Arguments to find a CardMarket
     * @example
     * // Get one CardMarket
     * const cardMarket = await prisma.cardMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardMarketFindUniqueArgs>(args: SelectSubset<T, CardMarketFindUniqueArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardMarket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardMarketFindUniqueOrThrowArgs} args - Arguments to find a CardMarket
     * @example
     * // Get one CardMarket
     * const cardMarket = await prisma.cardMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardMarketFindUniqueOrThrowArgs>(args: SelectSubset<T, CardMarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketFindFirstArgs} args - Arguments to find a CardMarket
     * @example
     * // Get one CardMarket
     * const cardMarket = await prisma.cardMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardMarketFindFirstArgs>(args?: SelectSubset<T, CardMarketFindFirstArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardMarket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketFindFirstOrThrowArgs} args - Arguments to find a CardMarket
     * @example
     * // Get one CardMarket
     * const cardMarket = await prisma.cardMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardMarketFindFirstOrThrowArgs>(args?: SelectSubset<T, CardMarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardMarkets
     * const cardMarkets = await prisma.cardMarket.findMany()
     * 
     * // Get first 10 CardMarkets
     * const cardMarkets = await prisma.cardMarket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardMarketWithIdOnly = await prisma.cardMarket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardMarketFindManyArgs>(args?: SelectSubset<T, CardMarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardMarket.
     * @param {CardMarketCreateArgs} args - Arguments to create a CardMarket.
     * @example
     * // Create one CardMarket
     * const CardMarket = await prisma.cardMarket.create({
     *   data: {
     *     // ... data to create a CardMarket
     *   }
     * })
     * 
     */
    create<T extends CardMarketCreateArgs>(args: SelectSubset<T, CardMarketCreateArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardMarkets.
     * @param {CardMarketCreateManyArgs} args - Arguments to create many CardMarkets.
     * @example
     * // Create many CardMarkets
     * const cardMarket = await prisma.cardMarket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardMarketCreateManyArgs>(args?: SelectSubset<T, CardMarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardMarkets and returns the data saved in the database.
     * @param {CardMarketCreateManyAndReturnArgs} args - Arguments to create many CardMarkets.
     * @example
     * // Create many CardMarkets
     * const cardMarket = await prisma.cardMarket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardMarkets and only return the `id`
     * const cardMarketWithIdOnly = await prisma.cardMarket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardMarketCreateManyAndReturnArgs>(args?: SelectSubset<T, CardMarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardMarket.
     * @param {CardMarketDeleteArgs} args - Arguments to delete one CardMarket.
     * @example
     * // Delete one CardMarket
     * const CardMarket = await prisma.cardMarket.delete({
     *   where: {
     *     // ... filter to delete one CardMarket
     *   }
     * })
     * 
     */
    delete<T extends CardMarketDeleteArgs>(args: SelectSubset<T, CardMarketDeleteArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardMarket.
     * @param {CardMarketUpdateArgs} args - Arguments to update one CardMarket.
     * @example
     * // Update one CardMarket
     * const cardMarket = await prisma.cardMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardMarketUpdateArgs>(args: SelectSubset<T, CardMarketUpdateArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardMarkets.
     * @param {CardMarketDeleteManyArgs} args - Arguments to filter CardMarkets to delete.
     * @example
     * // Delete a few CardMarkets
     * const { count } = await prisma.cardMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardMarketDeleteManyArgs>(args?: SelectSubset<T, CardMarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardMarkets
     * const cardMarket = await prisma.cardMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardMarketUpdateManyArgs>(args: SelectSubset<T, CardMarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardMarkets and returns the data updated in the database.
     * @param {CardMarketUpdateManyAndReturnArgs} args - Arguments to update many CardMarkets.
     * @example
     * // Update many CardMarkets
     * const cardMarket = await prisma.cardMarket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardMarkets and only return the `id`
     * const cardMarketWithIdOnly = await prisma.cardMarket.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CardMarketUpdateManyAndReturnArgs>(args: SelectSubset<T, CardMarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardMarket.
     * @param {CardMarketUpsertArgs} args - Arguments to update or create a CardMarket.
     * @example
     * // Update or create a CardMarket
     * const cardMarket = await prisma.cardMarket.upsert({
     *   create: {
     *     // ... data to create a CardMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardMarket we want to update
     *   }
     * })
     */
    upsert<T extends CardMarketUpsertArgs>(args: SelectSubset<T, CardMarketUpsertArgs<ExtArgs>>): Prisma__CardMarketClient<$Result.GetResult<Prisma.$CardMarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketCountArgs} args - Arguments to filter CardMarkets to count.
     * @example
     * // Count the number of CardMarkets
     * const count = await prisma.cardMarket.count({
     *   where: {
     *     // ... the filter for the CardMarkets we want to count
     *   }
     * })
    **/
    count<T extends CardMarketCountArgs>(
      args?: Subset<T, CardMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardMarketAggregateArgs>(args: Subset<T, CardMarketAggregateArgs>): Prisma.PrismaPromise<GetCardMarketAggregateType<T>>

    /**
     * Group by CardMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMarketGroupByArgs} args - Group by arguments.
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
      T extends CardMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardMarketGroupByArgs['orderBy'] }
        : { orderBy?: CardMarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardMarket model
   */
  readonly fields: CardMarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardMarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardMarket model
   */
  interface CardMarketFieldRefs {
    readonly id: FieldRef<"CardMarket", 'String'>
    readonly cardId: FieldRef<"CardMarket", 'String'>
    readonly url: FieldRef<"CardMarket", 'String'>
    readonly updatedAt: FieldRef<"CardMarket", 'DateTime'>
    readonly averageSellPrice: FieldRef<"CardMarket", 'Float'>
    readonly lowPrice: FieldRef<"CardMarket", 'Float'>
    readonly trendPrice: FieldRef<"CardMarket", 'Float'>
    readonly germanProLow: FieldRef<"CardMarket", 'Float'>
    readonly suggestedPrice: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloSell: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloLow: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloTrend: FieldRef<"CardMarket", 'Float'>
    readonly lowPriceExPlus: FieldRef<"CardMarket", 'Float'>
    readonly avg1: FieldRef<"CardMarket", 'Float'>
    readonly avg7: FieldRef<"CardMarket", 'Float'>
    readonly avg30: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloAvg1: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloAvg7: FieldRef<"CardMarket", 'Float'>
    readonly reverseHoloAvg30: FieldRef<"CardMarket", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CardMarket findUnique
   */
  export type CardMarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter, which CardMarket to fetch.
     */
    where: CardMarketWhereUniqueInput
  }

  /**
   * CardMarket findUniqueOrThrow
   */
  export type CardMarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter, which CardMarket to fetch.
     */
    where: CardMarketWhereUniqueInput
  }

  /**
   * CardMarket findFirst
   */
  export type CardMarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter, which CardMarket to fetch.
     */
    where?: CardMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMarkets to fetch.
     */
    orderBy?: CardMarketOrderByWithRelationInput | CardMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardMarkets.
     */
    cursor?: CardMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardMarkets.
     */
    distinct?: CardMarketScalarFieldEnum | CardMarketScalarFieldEnum[]
  }

  /**
   * CardMarket findFirstOrThrow
   */
  export type CardMarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter, which CardMarket to fetch.
     */
    where?: CardMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMarkets to fetch.
     */
    orderBy?: CardMarketOrderByWithRelationInput | CardMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardMarkets.
     */
    cursor?: CardMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardMarkets.
     */
    distinct?: CardMarketScalarFieldEnum | CardMarketScalarFieldEnum[]
  }

  /**
   * CardMarket findMany
   */
  export type CardMarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter, which CardMarkets to fetch.
     */
    where?: CardMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMarkets to fetch.
     */
    orderBy?: CardMarketOrderByWithRelationInput | CardMarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardMarkets.
     */
    cursor?: CardMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMarkets.
     */
    skip?: number
    distinct?: CardMarketScalarFieldEnum | CardMarketScalarFieldEnum[]
  }

  /**
   * CardMarket create
   */
  export type CardMarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * The data needed to create a CardMarket.
     */
    data: XOR<CardMarketCreateInput, CardMarketUncheckedCreateInput>
  }

  /**
   * CardMarket createMany
   */
  export type CardMarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardMarkets.
     */
    data: CardMarketCreateManyInput | CardMarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardMarket createManyAndReturn
   */
  export type CardMarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * The data used to create many CardMarkets.
     */
    data: CardMarketCreateManyInput | CardMarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardMarket update
   */
  export type CardMarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * The data needed to update a CardMarket.
     */
    data: XOR<CardMarketUpdateInput, CardMarketUncheckedUpdateInput>
    /**
     * Choose, which CardMarket to update.
     */
    where: CardMarketWhereUniqueInput
  }

  /**
   * CardMarket updateMany
   */
  export type CardMarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardMarkets.
     */
    data: XOR<CardMarketUpdateManyMutationInput, CardMarketUncheckedUpdateManyInput>
    /**
     * Filter which CardMarkets to update
     */
    where?: CardMarketWhereInput
    /**
     * Limit how many CardMarkets to update.
     */
    limit?: number
  }

  /**
   * CardMarket updateManyAndReturn
   */
  export type CardMarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * The data used to update CardMarkets.
     */
    data: XOR<CardMarketUpdateManyMutationInput, CardMarketUncheckedUpdateManyInput>
    /**
     * Filter which CardMarkets to update
     */
    where?: CardMarketWhereInput
    /**
     * Limit how many CardMarkets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardMarket upsert
   */
  export type CardMarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * The filter to search for the CardMarket to update in case it exists.
     */
    where: CardMarketWhereUniqueInput
    /**
     * In case the CardMarket found by the `where` argument doesn't exist, create a new CardMarket with this data.
     */
    create: XOR<CardMarketCreateInput, CardMarketUncheckedCreateInput>
    /**
     * In case the CardMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardMarketUpdateInput, CardMarketUncheckedUpdateInput>
  }

  /**
   * CardMarket delete
   */
  export type CardMarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
    /**
     * Filter which CardMarket to delete.
     */
    where: CardMarketWhereUniqueInput
  }

  /**
   * CardMarket deleteMany
   */
  export type CardMarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardMarkets to delete
     */
    where?: CardMarketWhereInput
    /**
     * Limit how many CardMarkets to delete.
     */
    limit?: number
  }

  /**
   * CardMarket without action
   */
  export type CardMarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMarket
     */
    select?: CardMarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMarket
     */
    omit?: CardMarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMarketInclude<ExtArgs> | null
  }


  /**
   * Model TcgPlayerPrices
   */

  export type AggregateTcgPlayerPrices = {
    _count: TcgPlayerPricesCountAggregateOutputType | null
    _avg: TcgPlayerPricesAvgAggregateOutputType | null
    _sum: TcgPlayerPricesSumAggregateOutputType | null
    _min: TcgPlayerPricesMinAggregateOutputType | null
    _max: TcgPlayerPricesMaxAggregateOutputType | null
  }

  export type TcgPlayerPricesAvgAggregateOutputType = {
    normalLow: number | null
    normalMid: number | null
    normalHigh: number | null
    normalMarket: number | null
    normalDirectLow: number | null
    holofoilLow: number | null
    holofoilMid: number | null
    holofoilHigh: number | null
    holofoilMarket: number | null
    holofoilDirectLow: number | null
    reverseHolofoilLow: number | null
    reverseHolofoilMid: number | null
    reverseHolofoilHigh: number | null
    reverseHolofoilMarket: number | null
    reverseHolofoilDirectLow: number | null
  }

  export type TcgPlayerPricesSumAggregateOutputType = {
    normalLow: number | null
    normalMid: number | null
    normalHigh: number | null
    normalMarket: number | null
    normalDirectLow: number | null
    holofoilLow: number | null
    holofoilMid: number | null
    holofoilHigh: number | null
    holofoilMarket: number | null
    holofoilDirectLow: number | null
    reverseHolofoilLow: number | null
    reverseHolofoilMid: number | null
    reverseHolofoilHigh: number | null
    reverseHolofoilMarket: number | null
    reverseHolofoilDirectLow: number | null
  }

  export type TcgPlayerPricesMinAggregateOutputType = {
    id: string | null
    normalLow: number | null
    normalMid: number | null
    normalHigh: number | null
    normalMarket: number | null
    normalDirectLow: number | null
    holofoilLow: number | null
    holofoilMid: number | null
    holofoilHigh: number | null
    holofoilMarket: number | null
    holofoilDirectLow: number | null
    reverseHolofoilLow: number | null
    reverseHolofoilMid: number | null
    reverseHolofoilHigh: number | null
    reverseHolofoilMarket: number | null
    reverseHolofoilDirectLow: number | null
  }

  export type TcgPlayerPricesMaxAggregateOutputType = {
    id: string | null
    normalLow: number | null
    normalMid: number | null
    normalHigh: number | null
    normalMarket: number | null
    normalDirectLow: number | null
    holofoilLow: number | null
    holofoilMid: number | null
    holofoilHigh: number | null
    holofoilMarket: number | null
    holofoilDirectLow: number | null
    reverseHolofoilLow: number | null
    reverseHolofoilMid: number | null
    reverseHolofoilHigh: number | null
    reverseHolofoilMarket: number | null
    reverseHolofoilDirectLow: number | null
  }

  export type TcgPlayerPricesCountAggregateOutputType = {
    id: number
    normalLow: number
    normalMid: number
    normalHigh: number
    normalMarket: number
    normalDirectLow: number
    holofoilLow: number
    holofoilMid: number
    holofoilHigh: number
    holofoilMarket: number
    holofoilDirectLow: number
    reverseHolofoilLow: number
    reverseHolofoilMid: number
    reverseHolofoilHigh: number
    reverseHolofoilMarket: number
    reverseHolofoilDirectLow: number
    _all: number
  }


  export type TcgPlayerPricesAvgAggregateInputType = {
    normalLow?: true
    normalMid?: true
    normalHigh?: true
    normalMarket?: true
    normalDirectLow?: true
    holofoilLow?: true
    holofoilMid?: true
    holofoilHigh?: true
    holofoilMarket?: true
    holofoilDirectLow?: true
    reverseHolofoilLow?: true
    reverseHolofoilMid?: true
    reverseHolofoilHigh?: true
    reverseHolofoilMarket?: true
    reverseHolofoilDirectLow?: true
  }

  export type TcgPlayerPricesSumAggregateInputType = {
    normalLow?: true
    normalMid?: true
    normalHigh?: true
    normalMarket?: true
    normalDirectLow?: true
    holofoilLow?: true
    holofoilMid?: true
    holofoilHigh?: true
    holofoilMarket?: true
    holofoilDirectLow?: true
    reverseHolofoilLow?: true
    reverseHolofoilMid?: true
    reverseHolofoilHigh?: true
    reverseHolofoilMarket?: true
    reverseHolofoilDirectLow?: true
  }

  export type TcgPlayerPricesMinAggregateInputType = {
    id?: true
    normalLow?: true
    normalMid?: true
    normalHigh?: true
    normalMarket?: true
    normalDirectLow?: true
    holofoilLow?: true
    holofoilMid?: true
    holofoilHigh?: true
    holofoilMarket?: true
    holofoilDirectLow?: true
    reverseHolofoilLow?: true
    reverseHolofoilMid?: true
    reverseHolofoilHigh?: true
    reverseHolofoilMarket?: true
    reverseHolofoilDirectLow?: true
  }

  export type TcgPlayerPricesMaxAggregateInputType = {
    id?: true
    normalLow?: true
    normalMid?: true
    normalHigh?: true
    normalMarket?: true
    normalDirectLow?: true
    holofoilLow?: true
    holofoilMid?: true
    holofoilHigh?: true
    holofoilMarket?: true
    holofoilDirectLow?: true
    reverseHolofoilLow?: true
    reverseHolofoilMid?: true
    reverseHolofoilHigh?: true
    reverseHolofoilMarket?: true
    reverseHolofoilDirectLow?: true
  }

  export type TcgPlayerPricesCountAggregateInputType = {
    id?: true
    normalLow?: true
    normalMid?: true
    normalHigh?: true
    normalMarket?: true
    normalDirectLow?: true
    holofoilLow?: true
    holofoilMid?: true
    holofoilHigh?: true
    holofoilMarket?: true
    holofoilDirectLow?: true
    reverseHolofoilLow?: true
    reverseHolofoilMid?: true
    reverseHolofoilHigh?: true
    reverseHolofoilMarket?: true
    reverseHolofoilDirectLow?: true
    _all?: true
  }

  export type TcgPlayerPricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcgPlayerPrices to aggregate.
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayerPrices to fetch.
     */
    orderBy?: TcgPlayerPricesOrderByWithRelationInput | TcgPlayerPricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TcgPlayerPricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayerPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayerPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TcgPlayerPrices
    **/
    _count?: true | TcgPlayerPricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TcgPlayerPricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TcgPlayerPricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TcgPlayerPricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TcgPlayerPricesMaxAggregateInputType
  }

  export type GetTcgPlayerPricesAggregateType<T extends TcgPlayerPricesAggregateArgs> = {
        [P in keyof T & keyof AggregateTcgPlayerPrices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTcgPlayerPrices[P]>
      : GetScalarType<T[P], AggregateTcgPlayerPrices[P]>
  }




  export type TcgPlayerPricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TcgPlayerPricesWhereInput
    orderBy?: TcgPlayerPricesOrderByWithAggregationInput | TcgPlayerPricesOrderByWithAggregationInput[]
    by: TcgPlayerPricesScalarFieldEnum[] | TcgPlayerPricesScalarFieldEnum
    having?: TcgPlayerPricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TcgPlayerPricesCountAggregateInputType | true
    _avg?: TcgPlayerPricesAvgAggregateInputType
    _sum?: TcgPlayerPricesSumAggregateInputType
    _min?: TcgPlayerPricesMinAggregateInputType
    _max?: TcgPlayerPricesMaxAggregateInputType
  }

  export type TcgPlayerPricesGroupByOutputType = {
    id: string
    normalLow: number | null
    normalMid: number | null
    normalHigh: number | null
    normalMarket: number | null
    normalDirectLow: number | null
    holofoilLow: number | null
    holofoilMid: number | null
    holofoilHigh: number | null
    holofoilMarket: number | null
    holofoilDirectLow: number | null
    reverseHolofoilLow: number | null
    reverseHolofoilMid: number | null
    reverseHolofoilHigh: number | null
    reverseHolofoilMarket: number | null
    reverseHolofoilDirectLow: number | null
    _count: TcgPlayerPricesCountAggregateOutputType | null
    _avg: TcgPlayerPricesAvgAggregateOutputType | null
    _sum: TcgPlayerPricesSumAggregateOutputType | null
    _min: TcgPlayerPricesMinAggregateOutputType | null
    _max: TcgPlayerPricesMaxAggregateOutputType | null
  }

  type GetTcgPlayerPricesGroupByPayload<T extends TcgPlayerPricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TcgPlayerPricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TcgPlayerPricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TcgPlayerPricesGroupByOutputType[P]>
            : GetScalarType<T[P], TcgPlayerPricesGroupByOutputType[P]>
        }
      >
    >


  export type TcgPlayerPricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    normalLow?: boolean
    normalMid?: boolean
    normalHigh?: boolean
    normalMarket?: boolean
    normalDirectLow?: boolean
    holofoilLow?: boolean
    holofoilMid?: boolean
    holofoilHigh?: boolean
    holofoilMarket?: boolean
    holofoilDirectLow?: boolean
    reverseHolofoilLow?: boolean
    reverseHolofoilMid?: boolean
    reverseHolofoilHigh?: boolean
    reverseHolofoilMarket?: boolean
    reverseHolofoilDirectLow?: boolean
    tcgplayer?: boolean | TcgPlayerPrices$tcgplayerArgs<ExtArgs>
  }, ExtArgs["result"]["tcgPlayerPrices"]>

  export type TcgPlayerPricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    normalLow?: boolean
    normalMid?: boolean
    normalHigh?: boolean
    normalMarket?: boolean
    normalDirectLow?: boolean
    holofoilLow?: boolean
    holofoilMid?: boolean
    holofoilHigh?: boolean
    holofoilMarket?: boolean
    holofoilDirectLow?: boolean
    reverseHolofoilLow?: boolean
    reverseHolofoilMid?: boolean
    reverseHolofoilHigh?: boolean
    reverseHolofoilMarket?: boolean
    reverseHolofoilDirectLow?: boolean
  }, ExtArgs["result"]["tcgPlayerPrices"]>

  export type TcgPlayerPricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    normalLow?: boolean
    normalMid?: boolean
    normalHigh?: boolean
    normalMarket?: boolean
    normalDirectLow?: boolean
    holofoilLow?: boolean
    holofoilMid?: boolean
    holofoilHigh?: boolean
    holofoilMarket?: boolean
    holofoilDirectLow?: boolean
    reverseHolofoilLow?: boolean
    reverseHolofoilMid?: boolean
    reverseHolofoilHigh?: boolean
    reverseHolofoilMarket?: boolean
    reverseHolofoilDirectLow?: boolean
  }, ExtArgs["result"]["tcgPlayerPrices"]>

  export type TcgPlayerPricesSelectScalar = {
    id?: boolean
    normalLow?: boolean
    normalMid?: boolean
    normalHigh?: boolean
    normalMarket?: boolean
    normalDirectLow?: boolean
    holofoilLow?: boolean
    holofoilMid?: boolean
    holofoilHigh?: boolean
    holofoilMarket?: boolean
    holofoilDirectLow?: boolean
    reverseHolofoilLow?: boolean
    reverseHolofoilMid?: boolean
    reverseHolofoilHigh?: boolean
    reverseHolofoilMarket?: boolean
    reverseHolofoilDirectLow?: boolean
  }

  export type TcgPlayerPricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "normalLow" | "normalMid" | "normalHigh" | "normalMarket" | "normalDirectLow" | "holofoilLow" | "holofoilMid" | "holofoilHigh" | "holofoilMarket" | "holofoilDirectLow" | "reverseHolofoilLow" | "reverseHolofoilMid" | "reverseHolofoilHigh" | "reverseHolofoilMarket" | "reverseHolofoilDirectLow", ExtArgs["result"]["tcgPlayerPrices"]>
  export type TcgPlayerPricesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tcgplayer?: boolean | TcgPlayerPrices$tcgplayerArgs<ExtArgs>
  }
  export type TcgPlayerPricesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TcgPlayerPricesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TcgPlayerPricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TcgPlayerPrices"
    objects: {
      tcgplayer: Prisma.$TcgPlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      normalLow: number | null
      normalMid: number | null
      normalHigh: number | null
      normalMarket: number | null
      normalDirectLow: number | null
      holofoilLow: number | null
      holofoilMid: number | null
      holofoilHigh: number | null
      holofoilMarket: number | null
      holofoilDirectLow: number | null
      reverseHolofoilLow: number | null
      reverseHolofoilMid: number | null
      reverseHolofoilHigh: number | null
      reverseHolofoilMarket: number | null
      reverseHolofoilDirectLow: number | null
    }, ExtArgs["result"]["tcgPlayerPrices"]>
    composites: {}
  }

  type TcgPlayerPricesGetPayload<S extends boolean | null | undefined | TcgPlayerPricesDefaultArgs> = $Result.GetResult<Prisma.$TcgPlayerPricesPayload, S>

  type TcgPlayerPricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TcgPlayerPricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TcgPlayerPricesCountAggregateInputType | true
    }

  export interface TcgPlayerPricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TcgPlayerPrices'], meta: { name: 'TcgPlayerPrices' } }
    /**
     * Find zero or one TcgPlayerPrices that matches the filter.
     * @param {TcgPlayerPricesFindUniqueArgs} args - Arguments to find a TcgPlayerPrices
     * @example
     * // Get one TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TcgPlayerPricesFindUniqueArgs>(args: SelectSubset<T, TcgPlayerPricesFindUniqueArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TcgPlayerPrices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TcgPlayerPricesFindUniqueOrThrowArgs} args - Arguments to find a TcgPlayerPrices
     * @example
     * // Get one TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TcgPlayerPricesFindUniqueOrThrowArgs>(args: SelectSubset<T, TcgPlayerPricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcgPlayerPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesFindFirstArgs} args - Arguments to find a TcgPlayerPrices
     * @example
     * // Get one TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TcgPlayerPricesFindFirstArgs>(args?: SelectSubset<T, TcgPlayerPricesFindFirstArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcgPlayerPrices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesFindFirstOrThrowArgs} args - Arguments to find a TcgPlayerPrices
     * @example
     * // Get one TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TcgPlayerPricesFindFirstOrThrowArgs>(args?: SelectSubset<T, TcgPlayerPricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TcgPlayerPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findMany()
     * 
     * // Get first 10 TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tcgPlayerPricesWithIdOnly = await prisma.tcgPlayerPrices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TcgPlayerPricesFindManyArgs>(args?: SelectSubset<T, TcgPlayerPricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TcgPlayerPrices.
     * @param {TcgPlayerPricesCreateArgs} args - Arguments to create a TcgPlayerPrices.
     * @example
     * // Create one TcgPlayerPrices
     * const TcgPlayerPrices = await prisma.tcgPlayerPrices.create({
     *   data: {
     *     // ... data to create a TcgPlayerPrices
     *   }
     * })
     * 
     */
    create<T extends TcgPlayerPricesCreateArgs>(args: SelectSubset<T, TcgPlayerPricesCreateArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TcgPlayerPrices.
     * @param {TcgPlayerPricesCreateManyArgs} args - Arguments to create many TcgPlayerPrices.
     * @example
     * // Create many TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TcgPlayerPricesCreateManyArgs>(args?: SelectSubset<T, TcgPlayerPricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TcgPlayerPrices and returns the data saved in the database.
     * @param {TcgPlayerPricesCreateManyAndReturnArgs} args - Arguments to create many TcgPlayerPrices.
     * @example
     * // Create many TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TcgPlayerPrices and only return the `id`
     * const tcgPlayerPricesWithIdOnly = await prisma.tcgPlayerPrices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TcgPlayerPricesCreateManyAndReturnArgs>(args?: SelectSubset<T, TcgPlayerPricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TcgPlayerPrices.
     * @param {TcgPlayerPricesDeleteArgs} args - Arguments to delete one TcgPlayerPrices.
     * @example
     * // Delete one TcgPlayerPrices
     * const TcgPlayerPrices = await prisma.tcgPlayerPrices.delete({
     *   where: {
     *     // ... filter to delete one TcgPlayerPrices
     *   }
     * })
     * 
     */
    delete<T extends TcgPlayerPricesDeleteArgs>(args: SelectSubset<T, TcgPlayerPricesDeleteArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TcgPlayerPrices.
     * @param {TcgPlayerPricesUpdateArgs} args - Arguments to update one TcgPlayerPrices.
     * @example
     * // Update one TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TcgPlayerPricesUpdateArgs>(args: SelectSubset<T, TcgPlayerPricesUpdateArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TcgPlayerPrices.
     * @param {TcgPlayerPricesDeleteManyArgs} args - Arguments to filter TcgPlayerPrices to delete.
     * @example
     * // Delete a few TcgPlayerPrices
     * const { count } = await prisma.tcgPlayerPrices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TcgPlayerPricesDeleteManyArgs>(args?: SelectSubset<T, TcgPlayerPricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcgPlayerPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TcgPlayerPricesUpdateManyArgs>(args: SelectSubset<T, TcgPlayerPricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcgPlayerPrices and returns the data updated in the database.
     * @param {TcgPlayerPricesUpdateManyAndReturnArgs} args - Arguments to update many TcgPlayerPrices.
     * @example
     * // Update many TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TcgPlayerPrices and only return the `id`
     * const tcgPlayerPricesWithIdOnly = await prisma.tcgPlayerPrices.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TcgPlayerPricesUpdateManyAndReturnArgs>(args: SelectSubset<T, TcgPlayerPricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TcgPlayerPrices.
     * @param {TcgPlayerPricesUpsertArgs} args - Arguments to update or create a TcgPlayerPrices.
     * @example
     * // Update or create a TcgPlayerPrices
     * const tcgPlayerPrices = await prisma.tcgPlayerPrices.upsert({
     *   create: {
     *     // ... data to create a TcgPlayerPrices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TcgPlayerPrices we want to update
     *   }
     * })
     */
    upsert<T extends TcgPlayerPricesUpsertArgs>(args: SelectSubset<T, TcgPlayerPricesUpsertArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TcgPlayerPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesCountArgs} args - Arguments to filter TcgPlayerPrices to count.
     * @example
     * // Count the number of TcgPlayerPrices
     * const count = await prisma.tcgPlayerPrices.count({
     *   where: {
     *     // ... the filter for the TcgPlayerPrices we want to count
     *   }
     * })
    **/
    count<T extends TcgPlayerPricesCountArgs>(
      args?: Subset<T, TcgPlayerPricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TcgPlayerPricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TcgPlayerPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TcgPlayerPricesAggregateArgs>(args: Subset<T, TcgPlayerPricesAggregateArgs>): Prisma.PrismaPromise<GetTcgPlayerPricesAggregateType<T>>

    /**
     * Group by TcgPlayerPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerPricesGroupByArgs} args - Group by arguments.
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
      T extends TcgPlayerPricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TcgPlayerPricesGroupByArgs['orderBy'] }
        : { orderBy?: TcgPlayerPricesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TcgPlayerPricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTcgPlayerPricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TcgPlayerPrices model
   */
  readonly fields: TcgPlayerPricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TcgPlayerPrices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TcgPlayerPricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tcgplayer<T extends TcgPlayerPrices$tcgplayerArgs<ExtArgs> = {}>(args?: Subset<T, TcgPlayerPrices$tcgplayerArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TcgPlayerPrices model
   */
  interface TcgPlayerPricesFieldRefs {
    readonly id: FieldRef<"TcgPlayerPrices", 'String'>
    readonly normalLow: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly normalMid: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly normalHigh: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly normalMarket: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly normalDirectLow: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly holofoilLow: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly holofoilMid: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly holofoilHigh: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly holofoilMarket: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly holofoilDirectLow: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly reverseHolofoilLow: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly reverseHolofoilMid: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly reverseHolofoilHigh: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly reverseHolofoilMarket: FieldRef<"TcgPlayerPrices", 'Float'>
    readonly reverseHolofoilDirectLow: FieldRef<"TcgPlayerPrices", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TcgPlayerPrices findUnique
   */
  export type TcgPlayerPricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayerPrices to fetch.
     */
    where: TcgPlayerPricesWhereUniqueInput
  }

  /**
   * TcgPlayerPrices findUniqueOrThrow
   */
  export type TcgPlayerPricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayerPrices to fetch.
     */
    where: TcgPlayerPricesWhereUniqueInput
  }

  /**
   * TcgPlayerPrices findFirst
   */
  export type TcgPlayerPricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayerPrices to fetch.
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayerPrices to fetch.
     */
    orderBy?: TcgPlayerPricesOrderByWithRelationInput | TcgPlayerPricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcgPlayerPrices.
     */
    cursor?: TcgPlayerPricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayerPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayerPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcgPlayerPrices.
     */
    distinct?: TcgPlayerPricesScalarFieldEnum | TcgPlayerPricesScalarFieldEnum[]
  }

  /**
   * TcgPlayerPrices findFirstOrThrow
   */
  export type TcgPlayerPricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayerPrices to fetch.
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayerPrices to fetch.
     */
    orderBy?: TcgPlayerPricesOrderByWithRelationInput | TcgPlayerPricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcgPlayerPrices.
     */
    cursor?: TcgPlayerPricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayerPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayerPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcgPlayerPrices.
     */
    distinct?: TcgPlayerPricesScalarFieldEnum | TcgPlayerPricesScalarFieldEnum[]
  }

  /**
   * TcgPlayerPrices findMany
   */
  export type TcgPlayerPricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayerPrices to fetch.
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayerPrices to fetch.
     */
    orderBy?: TcgPlayerPricesOrderByWithRelationInput | TcgPlayerPricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TcgPlayerPrices.
     */
    cursor?: TcgPlayerPricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayerPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayerPrices.
     */
    skip?: number
    distinct?: TcgPlayerPricesScalarFieldEnum | TcgPlayerPricesScalarFieldEnum[]
  }

  /**
   * TcgPlayerPrices create
   */
  export type TcgPlayerPricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * The data needed to create a TcgPlayerPrices.
     */
    data: XOR<TcgPlayerPricesCreateInput, TcgPlayerPricesUncheckedCreateInput>
  }

  /**
   * TcgPlayerPrices createMany
   */
  export type TcgPlayerPricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TcgPlayerPrices.
     */
    data: TcgPlayerPricesCreateManyInput | TcgPlayerPricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TcgPlayerPrices createManyAndReturn
   */
  export type TcgPlayerPricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * The data used to create many TcgPlayerPrices.
     */
    data: TcgPlayerPricesCreateManyInput | TcgPlayerPricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TcgPlayerPrices update
   */
  export type TcgPlayerPricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * The data needed to update a TcgPlayerPrices.
     */
    data: XOR<TcgPlayerPricesUpdateInput, TcgPlayerPricesUncheckedUpdateInput>
    /**
     * Choose, which TcgPlayerPrices to update.
     */
    where: TcgPlayerPricesWhereUniqueInput
  }

  /**
   * TcgPlayerPrices updateMany
   */
  export type TcgPlayerPricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TcgPlayerPrices.
     */
    data: XOR<TcgPlayerPricesUpdateManyMutationInput, TcgPlayerPricesUncheckedUpdateManyInput>
    /**
     * Filter which TcgPlayerPrices to update
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * Limit how many TcgPlayerPrices to update.
     */
    limit?: number
  }

  /**
   * TcgPlayerPrices updateManyAndReturn
   */
  export type TcgPlayerPricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * The data used to update TcgPlayerPrices.
     */
    data: XOR<TcgPlayerPricesUpdateManyMutationInput, TcgPlayerPricesUncheckedUpdateManyInput>
    /**
     * Filter which TcgPlayerPrices to update
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * Limit how many TcgPlayerPrices to update.
     */
    limit?: number
  }

  /**
   * TcgPlayerPrices upsert
   */
  export type TcgPlayerPricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * The filter to search for the TcgPlayerPrices to update in case it exists.
     */
    where: TcgPlayerPricesWhereUniqueInput
    /**
     * In case the TcgPlayerPrices found by the `where` argument doesn't exist, create a new TcgPlayerPrices with this data.
     */
    create: XOR<TcgPlayerPricesCreateInput, TcgPlayerPricesUncheckedCreateInput>
    /**
     * In case the TcgPlayerPrices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TcgPlayerPricesUpdateInput, TcgPlayerPricesUncheckedUpdateInput>
  }

  /**
   * TcgPlayerPrices delete
   */
  export type TcgPlayerPricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
    /**
     * Filter which TcgPlayerPrices to delete.
     */
    where: TcgPlayerPricesWhereUniqueInput
  }

  /**
   * TcgPlayerPrices deleteMany
   */
  export type TcgPlayerPricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcgPlayerPrices to delete
     */
    where?: TcgPlayerPricesWhereInput
    /**
     * Limit how many TcgPlayerPrices to delete.
     */
    limit?: number
  }

  /**
   * TcgPlayerPrices.tcgplayer
   */
  export type TcgPlayerPrices$tcgplayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    where?: TcgPlayerWhereInput
  }

  /**
   * TcgPlayerPrices without action
   */
  export type TcgPlayerPricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayerPrices
     */
    select?: TcgPlayerPricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayerPrices
     */
    omit?: TcgPlayerPricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerPricesInclude<ExtArgs> | null
  }


  /**
   * Model TcgPlayer
   */

  export type AggregateTcgPlayer = {
    _count: TcgPlayerCountAggregateOutputType | null
    _min: TcgPlayerMinAggregateOutputType | null
    _max: TcgPlayerMaxAggregateOutputType | null
  }

  export type TcgPlayerMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    url: string | null
    updatedAt: Date | null
    pricesId: string | null
  }

  export type TcgPlayerMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    url: string | null
    updatedAt: Date | null
    pricesId: string | null
  }

  export type TcgPlayerCountAggregateOutputType = {
    id: number
    cardId: number
    url: number
    updatedAt: number
    pricesId: number
    _all: number
  }


  export type TcgPlayerMinAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    pricesId?: true
  }

  export type TcgPlayerMaxAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    pricesId?: true
  }

  export type TcgPlayerCountAggregateInputType = {
    id?: true
    cardId?: true
    url?: true
    updatedAt?: true
    pricesId?: true
    _all?: true
  }

  export type TcgPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcgPlayer to aggregate.
     */
    where?: TcgPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayers to fetch.
     */
    orderBy?: TcgPlayerOrderByWithRelationInput | TcgPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TcgPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TcgPlayers
    **/
    _count?: true | TcgPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TcgPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TcgPlayerMaxAggregateInputType
  }

  export type GetTcgPlayerAggregateType<T extends TcgPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateTcgPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTcgPlayer[P]>
      : GetScalarType<T[P], AggregateTcgPlayer[P]>
  }




  export type TcgPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TcgPlayerWhereInput
    orderBy?: TcgPlayerOrderByWithAggregationInput | TcgPlayerOrderByWithAggregationInput[]
    by: TcgPlayerScalarFieldEnum[] | TcgPlayerScalarFieldEnum
    having?: TcgPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TcgPlayerCountAggregateInputType | true
    _min?: TcgPlayerMinAggregateInputType
    _max?: TcgPlayerMaxAggregateInputType
  }

  export type TcgPlayerGroupByOutputType = {
    id: string
    cardId: string
    url: string | null
    updatedAt: Date | null
    pricesId: string
    _count: TcgPlayerCountAggregateOutputType | null
    _min: TcgPlayerMinAggregateOutputType | null
    _max: TcgPlayerMaxAggregateOutputType | null
  }

  type GetTcgPlayerGroupByPayload<T extends TcgPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TcgPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TcgPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TcgPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], TcgPlayerGroupByOutputType[P]>
        }
      >
    >


  export type TcgPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    pricesId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcgPlayer"]>

  export type TcgPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    pricesId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcgPlayer"]>

  export type TcgPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    pricesId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tcgPlayer"]>

  export type TcgPlayerSelectScalar = {
    id?: boolean
    cardId?: boolean
    url?: boolean
    updatedAt?: boolean
    pricesId?: boolean
  }

  export type TcgPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "url" | "updatedAt" | "pricesId", ExtArgs["result"]["tcgPlayer"]>
  export type TcgPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }
  export type TcgPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }
  export type TcgPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    prices?: boolean | TcgPlayerPricesDefaultArgs<ExtArgs>
  }

  export type $TcgPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TcgPlayer"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      prices: Prisma.$TcgPlayerPricesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      url: string | null
      updatedAt: Date | null
      pricesId: string
    }, ExtArgs["result"]["tcgPlayer"]>
    composites: {}
  }

  type TcgPlayerGetPayload<S extends boolean | null | undefined | TcgPlayerDefaultArgs> = $Result.GetResult<Prisma.$TcgPlayerPayload, S>

  type TcgPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TcgPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TcgPlayerCountAggregateInputType | true
    }

  export interface TcgPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TcgPlayer'], meta: { name: 'TcgPlayer' } }
    /**
     * Find zero or one TcgPlayer that matches the filter.
     * @param {TcgPlayerFindUniqueArgs} args - Arguments to find a TcgPlayer
     * @example
     * // Get one TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TcgPlayerFindUniqueArgs>(args: SelectSubset<T, TcgPlayerFindUniqueArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TcgPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TcgPlayerFindUniqueOrThrowArgs} args - Arguments to find a TcgPlayer
     * @example
     * // Get one TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TcgPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, TcgPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcgPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerFindFirstArgs} args - Arguments to find a TcgPlayer
     * @example
     * // Get one TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TcgPlayerFindFirstArgs>(args?: SelectSubset<T, TcgPlayerFindFirstArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TcgPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerFindFirstOrThrowArgs} args - Arguments to find a TcgPlayer
     * @example
     * // Get one TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TcgPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, TcgPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TcgPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TcgPlayers
     * const tcgPlayers = await prisma.tcgPlayer.findMany()
     * 
     * // Get first 10 TcgPlayers
     * const tcgPlayers = await prisma.tcgPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tcgPlayerWithIdOnly = await prisma.tcgPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TcgPlayerFindManyArgs>(args?: SelectSubset<T, TcgPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TcgPlayer.
     * @param {TcgPlayerCreateArgs} args - Arguments to create a TcgPlayer.
     * @example
     * // Create one TcgPlayer
     * const TcgPlayer = await prisma.tcgPlayer.create({
     *   data: {
     *     // ... data to create a TcgPlayer
     *   }
     * })
     * 
     */
    create<T extends TcgPlayerCreateArgs>(args: SelectSubset<T, TcgPlayerCreateArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TcgPlayers.
     * @param {TcgPlayerCreateManyArgs} args - Arguments to create many TcgPlayers.
     * @example
     * // Create many TcgPlayers
     * const tcgPlayer = await prisma.tcgPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TcgPlayerCreateManyArgs>(args?: SelectSubset<T, TcgPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TcgPlayers and returns the data saved in the database.
     * @param {TcgPlayerCreateManyAndReturnArgs} args - Arguments to create many TcgPlayers.
     * @example
     * // Create many TcgPlayers
     * const tcgPlayer = await prisma.tcgPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TcgPlayers and only return the `id`
     * const tcgPlayerWithIdOnly = await prisma.tcgPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TcgPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, TcgPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TcgPlayer.
     * @param {TcgPlayerDeleteArgs} args - Arguments to delete one TcgPlayer.
     * @example
     * // Delete one TcgPlayer
     * const TcgPlayer = await prisma.tcgPlayer.delete({
     *   where: {
     *     // ... filter to delete one TcgPlayer
     *   }
     * })
     * 
     */
    delete<T extends TcgPlayerDeleteArgs>(args: SelectSubset<T, TcgPlayerDeleteArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TcgPlayer.
     * @param {TcgPlayerUpdateArgs} args - Arguments to update one TcgPlayer.
     * @example
     * // Update one TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TcgPlayerUpdateArgs>(args: SelectSubset<T, TcgPlayerUpdateArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TcgPlayers.
     * @param {TcgPlayerDeleteManyArgs} args - Arguments to filter TcgPlayers to delete.
     * @example
     * // Delete a few TcgPlayers
     * const { count } = await prisma.tcgPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TcgPlayerDeleteManyArgs>(args?: SelectSubset<T, TcgPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcgPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TcgPlayers
     * const tcgPlayer = await prisma.tcgPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TcgPlayerUpdateManyArgs>(args: SelectSubset<T, TcgPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TcgPlayers and returns the data updated in the database.
     * @param {TcgPlayerUpdateManyAndReturnArgs} args - Arguments to update many TcgPlayers.
     * @example
     * // Update many TcgPlayers
     * const tcgPlayer = await prisma.tcgPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TcgPlayers and only return the `id`
     * const tcgPlayerWithIdOnly = await prisma.tcgPlayer.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TcgPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, TcgPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TcgPlayer.
     * @param {TcgPlayerUpsertArgs} args - Arguments to update or create a TcgPlayer.
     * @example
     * // Update or create a TcgPlayer
     * const tcgPlayer = await prisma.tcgPlayer.upsert({
     *   create: {
     *     // ... data to create a TcgPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TcgPlayer we want to update
     *   }
     * })
     */
    upsert<T extends TcgPlayerUpsertArgs>(args: SelectSubset<T, TcgPlayerUpsertArgs<ExtArgs>>): Prisma__TcgPlayerClient<$Result.GetResult<Prisma.$TcgPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TcgPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerCountArgs} args - Arguments to filter TcgPlayers to count.
     * @example
     * // Count the number of TcgPlayers
     * const count = await prisma.tcgPlayer.count({
     *   where: {
     *     // ... the filter for the TcgPlayers we want to count
     *   }
     * })
    **/
    count<T extends TcgPlayerCountArgs>(
      args?: Subset<T, TcgPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TcgPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TcgPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TcgPlayerAggregateArgs>(args: Subset<T, TcgPlayerAggregateArgs>): Prisma.PrismaPromise<GetTcgPlayerAggregateType<T>>

    /**
     * Group by TcgPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TcgPlayerGroupByArgs} args - Group by arguments.
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
      T extends TcgPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TcgPlayerGroupByArgs['orderBy'] }
        : { orderBy?: TcgPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TcgPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTcgPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TcgPlayer model
   */
  readonly fields: TcgPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TcgPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TcgPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prices<T extends TcgPlayerPricesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TcgPlayerPricesDefaultArgs<ExtArgs>>): Prisma__TcgPlayerPricesClient<$Result.GetResult<Prisma.$TcgPlayerPricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TcgPlayer model
   */
  interface TcgPlayerFieldRefs {
    readonly id: FieldRef<"TcgPlayer", 'String'>
    readonly cardId: FieldRef<"TcgPlayer", 'String'>
    readonly url: FieldRef<"TcgPlayer", 'String'>
    readonly updatedAt: FieldRef<"TcgPlayer", 'DateTime'>
    readonly pricesId: FieldRef<"TcgPlayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TcgPlayer findUnique
   */
  export type TcgPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayer to fetch.
     */
    where: TcgPlayerWhereUniqueInput
  }

  /**
   * TcgPlayer findUniqueOrThrow
   */
  export type TcgPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayer to fetch.
     */
    where: TcgPlayerWhereUniqueInput
  }

  /**
   * TcgPlayer findFirst
   */
  export type TcgPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayer to fetch.
     */
    where?: TcgPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayers to fetch.
     */
    orderBy?: TcgPlayerOrderByWithRelationInput | TcgPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcgPlayers.
     */
    cursor?: TcgPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcgPlayers.
     */
    distinct?: TcgPlayerScalarFieldEnum | TcgPlayerScalarFieldEnum[]
  }

  /**
   * TcgPlayer findFirstOrThrow
   */
  export type TcgPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayer to fetch.
     */
    where?: TcgPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayers to fetch.
     */
    orderBy?: TcgPlayerOrderByWithRelationInput | TcgPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TcgPlayers.
     */
    cursor?: TcgPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TcgPlayers.
     */
    distinct?: TcgPlayerScalarFieldEnum | TcgPlayerScalarFieldEnum[]
  }

  /**
   * TcgPlayer findMany
   */
  export type TcgPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TcgPlayers to fetch.
     */
    where?: TcgPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TcgPlayers to fetch.
     */
    orderBy?: TcgPlayerOrderByWithRelationInput | TcgPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TcgPlayers.
     */
    cursor?: TcgPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TcgPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TcgPlayers.
     */
    skip?: number
    distinct?: TcgPlayerScalarFieldEnum | TcgPlayerScalarFieldEnum[]
  }

  /**
   * TcgPlayer create
   */
  export type TcgPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a TcgPlayer.
     */
    data: XOR<TcgPlayerCreateInput, TcgPlayerUncheckedCreateInput>
  }

  /**
   * TcgPlayer createMany
   */
  export type TcgPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TcgPlayers.
     */
    data: TcgPlayerCreateManyInput | TcgPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TcgPlayer createManyAndReturn
   */
  export type TcgPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many TcgPlayers.
     */
    data: TcgPlayerCreateManyInput | TcgPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TcgPlayer update
   */
  export type TcgPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a TcgPlayer.
     */
    data: XOR<TcgPlayerUpdateInput, TcgPlayerUncheckedUpdateInput>
    /**
     * Choose, which TcgPlayer to update.
     */
    where: TcgPlayerWhereUniqueInput
  }

  /**
   * TcgPlayer updateMany
   */
  export type TcgPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TcgPlayers.
     */
    data: XOR<TcgPlayerUpdateManyMutationInput, TcgPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TcgPlayers to update
     */
    where?: TcgPlayerWhereInput
    /**
     * Limit how many TcgPlayers to update.
     */
    limit?: number
  }

  /**
   * TcgPlayer updateManyAndReturn
   */
  export type TcgPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * The data used to update TcgPlayers.
     */
    data: XOR<TcgPlayerUpdateManyMutationInput, TcgPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TcgPlayers to update
     */
    where?: TcgPlayerWhereInput
    /**
     * Limit how many TcgPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TcgPlayer upsert
   */
  export type TcgPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the TcgPlayer to update in case it exists.
     */
    where: TcgPlayerWhereUniqueInput
    /**
     * In case the TcgPlayer found by the `where` argument doesn't exist, create a new TcgPlayer with this data.
     */
    create: XOR<TcgPlayerCreateInput, TcgPlayerUncheckedCreateInput>
    /**
     * In case the TcgPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TcgPlayerUpdateInput, TcgPlayerUncheckedUpdateInput>
  }

  /**
   * TcgPlayer delete
   */
  export type TcgPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
    /**
     * Filter which TcgPlayer to delete.
     */
    where: TcgPlayerWhereUniqueInput
  }

  /**
   * TcgPlayer deleteMany
   */
  export type TcgPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TcgPlayers to delete
     */
    where?: TcgPlayerWhereInput
    /**
     * Limit how many TcgPlayers to delete.
     */
    limit?: number
  }

  /**
   * TcgPlayer without action
   */
  export type TcgPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TcgPlayer
     */
    select?: TcgPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TcgPlayer
     */
    omit?: TcgPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TcgPlayerInclude<ExtArgs> | null
  }


  /**
   * Model CardSet
   */

  export type AggregateCardSet = {
    _count: CardSetCountAggregateOutputType | null
    _avg: CardSetAvgAggregateOutputType | null
    _sum: CardSetSumAggregateOutputType | null
    _min: CardSetMinAggregateOutputType | null
    _max: CardSetMaxAggregateOutputType | null
  }

  export type CardSetAvgAggregateOutputType = {
    printedTotal: number | null
    total: number | null
  }

  export type CardSetSumAggregateOutputType = {
    printedTotal: number | null
    total: number | null
  }

  export type CardSetMinAggregateOutputType = {
    id: string | null
    name: string | null
    series: string | null
    printedTotal: number | null
    total: number | null
    ptcgoCode: string | null
    releaseDate: Date | null
    updatedAt: Date | null
    symbol: string | null
    logo: string | null
  }

  export type CardSetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    series: string | null
    printedTotal: number | null
    total: number | null
    ptcgoCode: string | null
    releaseDate: Date | null
    updatedAt: Date | null
    symbol: string | null
    logo: string | null
  }

  export type CardSetCountAggregateOutputType = {
    id: number
    name: number
    series: number
    printedTotal: number
    total: number
    ptcgoCode: number
    releaseDate: number
    updatedAt: number
    symbol: number
    logo: number
    _all: number
  }


  export type CardSetAvgAggregateInputType = {
    printedTotal?: true
    total?: true
  }

  export type CardSetSumAggregateInputType = {
    printedTotal?: true
    total?: true
  }

  export type CardSetMinAggregateInputType = {
    id?: true
    name?: true
    series?: true
    printedTotal?: true
    total?: true
    ptcgoCode?: true
    releaseDate?: true
    updatedAt?: true
    symbol?: true
    logo?: true
  }

  export type CardSetMaxAggregateInputType = {
    id?: true
    name?: true
    series?: true
    printedTotal?: true
    total?: true
    ptcgoCode?: true
    releaseDate?: true
    updatedAt?: true
    symbol?: true
    logo?: true
  }

  export type CardSetCountAggregateInputType = {
    id?: true
    name?: true
    series?: true
    printedTotal?: true
    total?: true
    ptcgoCode?: true
    releaseDate?: true
    updatedAt?: true
    symbol?: true
    logo?: true
    _all?: true
  }

  export type CardSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardSet to aggregate.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardSets
    **/
    _count?: true | CardSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardSetMaxAggregateInputType
  }

  export type GetCardSetAggregateType<T extends CardSetAggregateArgs> = {
        [P in keyof T & keyof AggregateCardSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardSet[P]>
      : GetScalarType<T[P], AggregateCardSet[P]>
  }




  export type CardSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardSetWhereInput
    orderBy?: CardSetOrderByWithAggregationInput | CardSetOrderByWithAggregationInput[]
    by: CardSetScalarFieldEnum[] | CardSetScalarFieldEnum
    having?: CardSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardSetCountAggregateInputType | true
    _avg?: CardSetAvgAggregateInputType
    _sum?: CardSetSumAggregateInputType
    _min?: CardSetMinAggregateInputType
    _max?: CardSetMaxAggregateInputType
  }

  export type CardSetGroupByOutputType = {
    id: string
    name: string | null
    series: string | null
    printedTotal: number | null
    total: number | null
    ptcgoCode: string | null
    releaseDate: Date | null
    updatedAt: Date | null
    symbol: string | null
    logo: string | null
    _count: CardSetCountAggregateOutputType | null
    _avg: CardSetAvgAggregateOutputType | null
    _sum: CardSetSumAggregateOutputType | null
    _min: CardSetMinAggregateOutputType | null
    _max: CardSetMaxAggregateOutputType | null
  }

  type GetCardSetGroupByPayload<T extends CardSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardSetGroupByOutputType[P]>
            : GetScalarType<T[P], CardSetGroupByOutputType[P]>
        }
      >
    >


  export type CardSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    series?: boolean
    printedTotal?: boolean
    total?: boolean
    ptcgoCode?: boolean
    releaseDate?: boolean
    updatedAt?: boolean
    symbol?: boolean
    logo?: boolean
    cards?: boolean | CardSet$cardsArgs<ExtArgs>
    legalities?: boolean | CardSet$legalitiesArgs<ExtArgs>
    _count?: boolean | CardSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    series?: boolean
    printedTotal?: boolean
    total?: boolean
    ptcgoCode?: boolean
    releaseDate?: boolean
    updatedAt?: boolean
    symbol?: boolean
    logo?: boolean
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    series?: boolean
    printedTotal?: boolean
    total?: boolean
    ptcgoCode?: boolean
    releaseDate?: boolean
    updatedAt?: boolean
    symbol?: boolean
    logo?: boolean
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectScalar = {
    id?: boolean
    name?: boolean
    series?: boolean
    printedTotal?: boolean
    total?: boolean
    ptcgoCode?: boolean
    releaseDate?: boolean
    updatedAt?: boolean
    symbol?: boolean
    logo?: boolean
  }

  export type CardSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "series" | "printedTotal" | "total" | "ptcgoCode" | "releaseDate" | "updatedAt" | "symbol" | "logo", ExtArgs["result"]["cardSet"]>
  export type CardSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardSet$cardsArgs<ExtArgs>
    legalities?: boolean | CardSet$legalitiesArgs<ExtArgs>
    _count?: boolean | CardSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardSet"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
      legalities: Prisma.$SetLegalitiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      series: string | null
      printedTotal: number | null
      total: number | null
      ptcgoCode: string | null
      releaseDate: Date | null
      updatedAt: Date | null
      symbol: string | null
      logo: string | null
    }, ExtArgs["result"]["cardSet"]>
    composites: {}
  }

  type CardSetGetPayload<S extends boolean | null | undefined | CardSetDefaultArgs> = $Result.GetResult<Prisma.$CardSetPayload, S>

  type CardSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardSetCountAggregateInputType | true
    }

  export interface CardSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardSet'], meta: { name: 'CardSet' } }
    /**
     * Find zero or one CardSet that matches the filter.
     * @param {CardSetFindUniqueArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardSetFindUniqueArgs>(args: SelectSubset<T, CardSetFindUniqueArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardSetFindUniqueOrThrowArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardSetFindUniqueOrThrowArgs>(args: SelectSubset<T, CardSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindFirstArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardSetFindFirstArgs>(args?: SelectSubset<T, CardSetFindFirstArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindFirstOrThrowArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardSetFindFirstOrThrowArgs>(args?: SelectSubset<T, CardSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardSets
     * const cardSets = await prisma.cardSet.findMany()
     * 
     * // Get first 10 CardSets
     * const cardSets = await prisma.cardSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardSetFindManyArgs>(args?: SelectSubset<T, CardSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardSet.
     * @param {CardSetCreateArgs} args - Arguments to create a CardSet.
     * @example
     * // Create one CardSet
     * const CardSet = await prisma.cardSet.create({
     *   data: {
     *     // ... data to create a CardSet
     *   }
     * })
     * 
     */
    create<T extends CardSetCreateArgs>(args: SelectSubset<T, CardSetCreateArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardSets.
     * @param {CardSetCreateManyArgs} args - Arguments to create many CardSets.
     * @example
     * // Create many CardSets
     * const cardSet = await prisma.cardSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardSetCreateManyArgs>(args?: SelectSubset<T, CardSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardSets and returns the data saved in the database.
     * @param {CardSetCreateManyAndReturnArgs} args - Arguments to create many CardSets.
     * @example
     * // Create many CardSets
     * const cardSet = await prisma.cardSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardSets and only return the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardSetCreateManyAndReturnArgs>(args?: SelectSubset<T, CardSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardSet.
     * @param {CardSetDeleteArgs} args - Arguments to delete one CardSet.
     * @example
     * // Delete one CardSet
     * const CardSet = await prisma.cardSet.delete({
     *   where: {
     *     // ... filter to delete one CardSet
     *   }
     * })
     * 
     */
    delete<T extends CardSetDeleteArgs>(args: SelectSubset<T, CardSetDeleteArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardSet.
     * @param {CardSetUpdateArgs} args - Arguments to update one CardSet.
     * @example
     * // Update one CardSet
     * const cardSet = await prisma.cardSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardSetUpdateArgs>(args: SelectSubset<T, CardSetUpdateArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardSets.
     * @param {CardSetDeleteManyArgs} args - Arguments to filter CardSets to delete.
     * @example
     * // Delete a few CardSets
     * const { count } = await prisma.cardSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardSetDeleteManyArgs>(args?: SelectSubset<T, CardSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardSets
     * const cardSet = await prisma.cardSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardSetUpdateManyArgs>(args: SelectSubset<T, CardSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardSets and returns the data updated in the database.
     * @param {CardSetUpdateManyAndReturnArgs} args - Arguments to update many CardSets.
     * @example
     * // Update many CardSets
     * const cardSet = await prisma.cardSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardSets and only return the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CardSetUpdateManyAndReturnArgs>(args: SelectSubset<T, CardSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardSet.
     * @param {CardSetUpsertArgs} args - Arguments to update or create a CardSet.
     * @example
     * // Update or create a CardSet
     * const cardSet = await prisma.cardSet.upsert({
     *   create: {
     *     // ... data to create a CardSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardSet we want to update
     *   }
     * })
     */
    upsert<T extends CardSetUpsertArgs>(args: SelectSubset<T, CardSetUpsertArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetCountArgs} args - Arguments to filter CardSets to count.
     * @example
     * // Count the number of CardSets
     * const count = await prisma.cardSet.count({
     *   where: {
     *     // ... the filter for the CardSets we want to count
     *   }
     * })
    **/
    count<T extends CardSetCountArgs>(
      args?: Subset<T, CardSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardSetAggregateArgs>(args: Subset<T, CardSetAggregateArgs>): Prisma.PrismaPromise<GetCardSetAggregateType<T>>

    /**
     * Group by CardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetGroupByArgs} args - Group by arguments.
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
      T extends CardSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardSetGroupByArgs['orderBy'] }
        : { orderBy?: CardSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardSet model
   */
  readonly fields: CardSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends CardSet$cardsArgs<ExtArgs> = {}>(args?: Subset<T, CardSet$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legalities<T extends CardSet$legalitiesArgs<ExtArgs> = {}>(args?: Subset<T, CardSet$legalitiesArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardSet model
   */
  interface CardSetFieldRefs {
    readonly id: FieldRef<"CardSet", 'String'>
    readonly name: FieldRef<"CardSet", 'String'>
    readonly series: FieldRef<"CardSet", 'String'>
    readonly printedTotal: FieldRef<"CardSet", 'Int'>
    readonly total: FieldRef<"CardSet", 'Int'>
    readonly ptcgoCode: FieldRef<"CardSet", 'String'>
    readonly releaseDate: FieldRef<"CardSet", 'DateTime'>
    readonly updatedAt: FieldRef<"CardSet", 'DateTime'>
    readonly symbol: FieldRef<"CardSet", 'String'>
    readonly logo: FieldRef<"CardSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardSet findUnique
   */
  export type CardSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet findUniqueOrThrow
   */
  export type CardSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet findFirst
   */
  export type CardSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardSets.
     */
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet findFirstOrThrow
   */
  export type CardSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardSets.
     */
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet findMany
   */
  export type CardSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSets to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet create
   */
  export type CardSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The data needed to create a CardSet.
     */
    data: XOR<CardSetCreateInput, CardSetUncheckedCreateInput>
  }

  /**
   * CardSet createMany
   */
  export type CardSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardSets.
     */
    data: CardSetCreateManyInput | CardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardSet createManyAndReturn
   */
  export type CardSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * The data used to create many CardSets.
     */
    data: CardSetCreateManyInput | CardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardSet update
   */
  export type CardSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The data needed to update a CardSet.
     */
    data: XOR<CardSetUpdateInput, CardSetUncheckedUpdateInput>
    /**
     * Choose, which CardSet to update.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet updateMany
   */
  export type CardSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardSets.
     */
    data: XOR<CardSetUpdateManyMutationInput, CardSetUncheckedUpdateManyInput>
    /**
     * Filter which CardSets to update
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to update.
     */
    limit?: number
  }

  /**
   * CardSet updateManyAndReturn
   */
  export type CardSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * The data used to update CardSets.
     */
    data: XOR<CardSetUpdateManyMutationInput, CardSetUncheckedUpdateManyInput>
    /**
     * Filter which CardSets to update
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to update.
     */
    limit?: number
  }

  /**
   * CardSet upsert
   */
  export type CardSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The filter to search for the CardSet to update in case it exists.
     */
    where: CardSetWhereUniqueInput
    /**
     * In case the CardSet found by the `where` argument doesn't exist, create a new CardSet with this data.
     */
    create: XOR<CardSetCreateInput, CardSetUncheckedCreateInput>
    /**
     * In case the CardSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardSetUpdateInput, CardSetUncheckedUpdateInput>
  }

  /**
   * CardSet delete
   */
  export type CardSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter which CardSet to delete.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet deleteMany
   */
  export type CardSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardSets to delete
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to delete.
     */
    limit?: number
  }

  /**
   * CardSet.cards
   */
  export type CardSet$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * CardSet.legalities
   */
  export type CardSet$legalitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    where?: SetLegalitiesWhereInput
  }

  /**
   * CardSet without action
   */
  export type CardSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
  }


  /**
   * Model SetLegalities
   */

  export type AggregateSetLegalities = {
    _count: SetLegalitiesCountAggregateOutputType | null
    _min: SetLegalitiesMinAggregateOutputType | null
    _max: SetLegalitiesMaxAggregateOutputType | null
  }

  export type SetLegalitiesMinAggregateOutputType = {
    id: string | null
    setId: string | null
    unlimited: string | null
    standard: string | null
    expanded: string | null
  }

  export type SetLegalitiesMaxAggregateOutputType = {
    id: string | null
    setId: string | null
    unlimited: string | null
    standard: string | null
    expanded: string | null
  }

  export type SetLegalitiesCountAggregateOutputType = {
    id: number
    setId: number
    unlimited: number
    standard: number
    expanded: number
    _all: number
  }


  export type SetLegalitiesMinAggregateInputType = {
    id?: true
    setId?: true
    unlimited?: true
    standard?: true
    expanded?: true
  }

  export type SetLegalitiesMaxAggregateInputType = {
    id?: true
    setId?: true
    unlimited?: true
    standard?: true
    expanded?: true
  }

  export type SetLegalitiesCountAggregateInputType = {
    id?: true
    setId?: true
    unlimited?: true
    standard?: true
    expanded?: true
    _all?: true
  }

  export type SetLegalitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLegalities to aggregate.
     */
    where?: SetLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLegalities to fetch.
     */
    orderBy?: SetLegalitiesOrderByWithRelationInput | SetLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetLegalities
    **/
    _count?: true | SetLegalitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetLegalitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetLegalitiesMaxAggregateInputType
  }

  export type GetSetLegalitiesAggregateType<T extends SetLegalitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSetLegalities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetLegalities[P]>
      : GetScalarType<T[P], AggregateSetLegalities[P]>
  }




  export type SetLegalitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetLegalitiesWhereInput
    orderBy?: SetLegalitiesOrderByWithAggregationInput | SetLegalitiesOrderByWithAggregationInput[]
    by: SetLegalitiesScalarFieldEnum[] | SetLegalitiesScalarFieldEnum
    having?: SetLegalitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetLegalitiesCountAggregateInputType | true
    _min?: SetLegalitiesMinAggregateInputType
    _max?: SetLegalitiesMaxAggregateInputType
  }

  export type SetLegalitiesGroupByOutputType = {
    id: string
    setId: string
    unlimited: string | null
    standard: string | null
    expanded: string | null
    _count: SetLegalitiesCountAggregateOutputType | null
    _min: SetLegalitiesMinAggregateOutputType | null
    _max: SetLegalitiesMaxAggregateOutputType | null
  }

  type GetSetLegalitiesGroupByPayload<T extends SetLegalitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetLegalitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetLegalitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetLegalitiesGroupByOutputType[P]>
            : GetScalarType<T[P], SetLegalitiesGroupByOutputType[P]>
        }
      >
    >


  export type SetLegalitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLegalities"]>

  export type SetLegalitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLegalities"]>

  export type SetLegalitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setLegalities"]>

  export type SetLegalitiesSelectScalar = {
    id?: boolean
    setId?: boolean
    unlimited?: boolean
    standard?: boolean
    expanded?: boolean
  }

  export type SetLegalitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setId" | "unlimited" | "standard" | "expanded", ExtArgs["result"]["setLegalities"]>
  export type SetLegalitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }
  export type SetLegalitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }
  export type SetLegalitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }

  export type $SetLegalitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetLegalities"
    objects: {
      set: Prisma.$CardSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      setId: string
      unlimited: string | null
      standard: string | null
      expanded: string | null
    }, ExtArgs["result"]["setLegalities"]>
    composites: {}
  }

  type SetLegalitiesGetPayload<S extends boolean | null | undefined | SetLegalitiesDefaultArgs> = $Result.GetResult<Prisma.$SetLegalitiesPayload, S>

  type SetLegalitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetLegalitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetLegalitiesCountAggregateInputType | true
    }

  export interface SetLegalitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetLegalities'], meta: { name: 'SetLegalities' } }
    /**
     * Find zero or one SetLegalities that matches the filter.
     * @param {SetLegalitiesFindUniqueArgs} args - Arguments to find a SetLegalities
     * @example
     * // Get one SetLegalities
     * const setLegalities = await prisma.setLegalities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetLegalitiesFindUniqueArgs>(args: SelectSubset<T, SetLegalitiesFindUniqueArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SetLegalities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetLegalitiesFindUniqueOrThrowArgs} args - Arguments to find a SetLegalities
     * @example
     * // Get one SetLegalities
     * const setLegalities = await prisma.setLegalities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetLegalitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, SetLegalitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLegalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesFindFirstArgs} args - Arguments to find a SetLegalities
     * @example
     * // Get one SetLegalities
     * const setLegalities = await prisma.setLegalities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetLegalitiesFindFirstArgs>(args?: SelectSubset<T, SetLegalitiesFindFirstArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetLegalities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesFindFirstOrThrowArgs} args - Arguments to find a SetLegalities
     * @example
     * // Get one SetLegalities
     * const setLegalities = await prisma.setLegalities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetLegalitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, SetLegalitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SetLegalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetLegalities
     * const setLegalities = await prisma.setLegalities.findMany()
     * 
     * // Get first 10 SetLegalities
     * const setLegalities = await prisma.setLegalities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setLegalitiesWithIdOnly = await prisma.setLegalities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetLegalitiesFindManyArgs>(args?: SelectSubset<T, SetLegalitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SetLegalities.
     * @param {SetLegalitiesCreateArgs} args - Arguments to create a SetLegalities.
     * @example
     * // Create one SetLegalities
     * const SetLegalities = await prisma.setLegalities.create({
     *   data: {
     *     // ... data to create a SetLegalities
     *   }
     * })
     * 
     */
    create<T extends SetLegalitiesCreateArgs>(args: SelectSubset<T, SetLegalitiesCreateArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SetLegalities.
     * @param {SetLegalitiesCreateManyArgs} args - Arguments to create many SetLegalities.
     * @example
     * // Create many SetLegalities
     * const setLegalities = await prisma.setLegalities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetLegalitiesCreateManyArgs>(args?: SelectSubset<T, SetLegalitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SetLegalities and returns the data saved in the database.
     * @param {SetLegalitiesCreateManyAndReturnArgs} args - Arguments to create many SetLegalities.
     * @example
     * // Create many SetLegalities
     * const setLegalities = await prisma.setLegalities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SetLegalities and only return the `id`
     * const setLegalitiesWithIdOnly = await prisma.setLegalities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetLegalitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, SetLegalitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SetLegalities.
     * @param {SetLegalitiesDeleteArgs} args - Arguments to delete one SetLegalities.
     * @example
     * // Delete one SetLegalities
     * const SetLegalities = await prisma.setLegalities.delete({
     *   where: {
     *     // ... filter to delete one SetLegalities
     *   }
     * })
     * 
     */
    delete<T extends SetLegalitiesDeleteArgs>(args: SelectSubset<T, SetLegalitiesDeleteArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SetLegalities.
     * @param {SetLegalitiesUpdateArgs} args - Arguments to update one SetLegalities.
     * @example
     * // Update one SetLegalities
     * const setLegalities = await prisma.setLegalities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetLegalitiesUpdateArgs>(args: SelectSubset<T, SetLegalitiesUpdateArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SetLegalities.
     * @param {SetLegalitiesDeleteManyArgs} args - Arguments to filter SetLegalities to delete.
     * @example
     * // Delete a few SetLegalities
     * const { count } = await prisma.setLegalities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetLegalitiesDeleteManyArgs>(args?: SelectSubset<T, SetLegalitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetLegalities
     * const setLegalities = await prisma.setLegalities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetLegalitiesUpdateManyArgs>(args: SelectSubset<T, SetLegalitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetLegalities and returns the data updated in the database.
     * @param {SetLegalitiesUpdateManyAndReturnArgs} args - Arguments to update many SetLegalities.
     * @example
     * // Update many SetLegalities
     * const setLegalities = await prisma.setLegalities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SetLegalities and only return the `id`
     * const setLegalitiesWithIdOnly = await prisma.setLegalities.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SetLegalitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, SetLegalitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SetLegalities.
     * @param {SetLegalitiesUpsertArgs} args - Arguments to update or create a SetLegalities.
     * @example
     * // Update or create a SetLegalities
     * const setLegalities = await prisma.setLegalities.upsert({
     *   create: {
     *     // ... data to create a SetLegalities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetLegalities we want to update
     *   }
     * })
     */
    upsert<T extends SetLegalitiesUpsertArgs>(args: SelectSubset<T, SetLegalitiesUpsertArgs<ExtArgs>>): Prisma__SetLegalitiesClient<$Result.GetResult<Prisma.$SetLegalitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SetLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesCountArgs} args - Arguments to filter SetLegalities to count.
     * @example
     * // Count the number of SetLegalities
     * const count = await prisma.setLegalities.count({
     *   where: {
     *     // ... the filter for the SetLegalities we want to count
     *   }
     * })
    **/
    count<T extends SetLegalitiesCountArgs>(
      args?: Subset<T, SetLegalitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetLegalitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetLegalitiesAggregateArgs>(args: Subset<T, SetLegalitiesAggregateArgs>): Prisma.PrismaPromise<GetSetLegalitiesAggregateType<T>>

    /**
     * Group by SetLegalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetLegalitiesGroupByArgs} args - Group by arguments.
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
      T extends SetLegalitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetLegalitiesGroupByArgs['orderBy'] }
        : { orderBy?: SetLegalitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetLegalitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetLegalitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetLegalities model
   */
  readonly fields: SetLegalitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetLegalities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetLegalitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    set<T extends CardSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardSetDefaultArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SetLegalities model
   */
  interface SetLegalitiesFieldRefs {
    readonly id: FieldRef<"SetLegalities", 'String'>
    readonly setId: FieldRef<"SetLegalities", 'String'>
    readonly unlimited: FieldRef<"SetLegalities", 'String'>
    readonly standard: FieldRef<"SetLegalities", 'String'>
    readonly expanded: FieldRef<"SetLegalities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SetLegalities findUnique
   */
  export type SetLegalitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which SetLegalities to fetch.
     */
    where: SetLegalitiesWhereUniqueInput
  }

  /**
   * SetLegalities findUniqueOrThrow
   */
  export type SetLegalitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which SetLegalities to fetch.
     */
    where: SetLegalitiesWhereUniqueInput
  }

  /**
   * SetLegalities findFirst
   */
  export type SetLegalitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which SetLegalities to fetch.
     */
    where?: SetLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLegalities to fetch.
     */
    orderBy?: SetLegalitiesOrderByWithRelationInput | SetLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLegalities.
     */
    cursor?: SetLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLegalities.
     */
    distinct?: SetLegalitiesScalarFieldEnum | SetLegalitiesScalarFieldEnum[]
  }

  /**
   * SetLegalities findFirstOrThrow
   */
  export type SetLegalitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which SetLegalities to fetch.
     */
    where?: SetLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLegalities to fetch.
     */
    orderBy?: SetLegalitiesOrderByWithRelationInput | SetLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetLegalities.
     */
    cursor?: SetLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLegalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetLegalities.
     */
    distinct?: SetLegalitiesScalarFieldEnum | SetLegalitiesScalarFieldEnum[]
  }

  /**
   * SetLegalities findMany
   */
  export type SetLegalitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter, which SetLegalities to fetch.
     */
    where?: SetLegalitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetLegalities to fetch.
     */
    orderBy?: SetLegalitiesOrderByWithRelationInput | SetLegalitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetLegalities.
     */
    cursor?: SetLegalitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetLegalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetLegalities.
     */
    skip?: number
    distinct?: SetLegalitiesScalarFieldEnum | SetLegalitiesScalarFieldEnum[]
  }

  /**
   * SetLegalities create
   */
  export type SetLegalitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a SetLegalities.
     */
    data: XOR<SetLegalitiesCreateInput, SetLegalitiesUncheckedCreateInput>
  }

  /**
   * SetLegalities createMany
   */
  export type SetLegalitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetLegalities.
     */
    data: SetLegalitiesCreateManyInput | SetLegalitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SetLegalities createManyAndReturn
   */
  export type SetLegalitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * The data used to create many SetLegalities.
     */
    data: SetLegalitiesCreateManyInput | SetLegalitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLegalities update
   */
  export type SetLegalitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a SetLegalities.
     */
    data: XOR<SetLegalitiesUpdateInput, SetLegalitiesUncheckedUpdateInput>
    /**
     * Choose, which SetLegalities to update.
     */
    where: SetLegalitiesWhereUniqueInput
  }

  /**
   * SetLegalities updateMany
   */
  export type SetLegalitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetLegalities.
     */
    data: XOR<SetLegalitiesUpdateManyMutationInput, SetLegalitiesUncheckedUpdateManyInput>
    /**
     * Filter which SetLegalities to update
     */
    where?: SetLegalitiesWhereInput
    /**
     * Limit how many SetLegalities to update.
     */
    limit?: number
  }

  /**
   * SetLegalities updateManyAndReturn
   */
  export type SetLegalitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * The data used to update SetLegalities.
     */
    data: XOR<SetLegalitiesUpdateManyMutationInput, SetLegalitiesUncheckedUpdateManyInput>
    /**
     * Filter which SetLegalities to update
     */
    where?: SetLegalitiesWhereInput
    /**
     * Limit how many SetLegalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SetLegalities upsert
   */
  export type SetLegalitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the SetLegalities to update in case it exists.
     */
    where: SetLegalitiesWhereUniqueInput
    /**
     * In case the SetLegalities found by the `where` argument doesn't exist, create a new SetLegalities with this data.
     */
    create: XOR<SetLegalitiesCreateInput, SetLegalitiesUncheckedCreateInput>
    /**
     * In case the SetLegalities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetLegalitiesUpdateInput, SetLegalitiesUncheckedUpdateInput>
  }

  /**
   * SetLegalities delete
   */
  export type SetLegalitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
    /**
     * Filter which SetLegalities to delete.
     */
    where: SetLegalitiesWhereUniqueInput
  }

  /**
   * SetLegalities deleteMany
   */
  export type SetLegalitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetLegalities to delete
     */
    where?: SetLegalitiesWhereInput
    /**
     * Limit how many SetLegalities to delete.
     */
    limit?: number
  }

  /**
   * SetLegalities without action
   */
  export type SetLegalitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetLegalities
     */
    select?: SetLegalitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetLegalities
     */
    omit?: SetLegalitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetLegalitiesInclude<ExtArgs> | null
  }


  /**
   * Model ImportMetadata
   */

  export type AggregateImportMetadata = {
    _count: ImportMetadataCountAggregateOutputType | null
    _avg: ImportMetadataAvgAggregateOutputType | null
    _sum: ImportMetadataSumAggregateOutputType | null
    _min: ImportMetadataMinAggregateOutputType | null
    _max: ImportMetadataMaxAggregateOutputType | null
  }

  export type ImportMetadataAvgAggregateOutputType = {
    totalCount: number | null
    isFullImport: number | null
  }

  export type ImportMetadataSumAggregateOutputType = {
    totalCount: number | null
    isFullImport: number | null
  }

  export type ImportMetadataMinAggregateOutputType = {
    id: string | null
    totalCount: number | null
    importedAt: Date | null
    isFullImport: number | null
  }

  export type ImportMetadataMaxAggregateOutputType = {
    id: string | null
    totalCount: number | null
    importedAt: Date | null
    isFullImport: number | null
  }

  export type ImportMetadataCountAggregateOutputType = {
    id: number
    totalCount: number
    importedAt: number
    isFullImport: number
    _all: number
  }


  export type ImportMetadataAvgAggregateInputType = {
    totalCount?: true
    isFullImport?: true
  }

  export type ImportMetadataSumAggregateInputType = {
    totalCount?: true
    isFullImport?: true
  }

  export type ImportMetadataMinAggregateInputType = {
    id?: true
    totalCount?: true
    importedAt?: true
    isFullImport?: true
  }

  export type ImportMetadataMaxAggregateInputType = {
    id?: true
    totalCount?: true
    importedAt?: true
    isFullImport?: true
  }

  export type ImportMetadataCountAggregateInputType = {
    id?: true
    totalCount?: true
    importedAt?: true
    isFullImport?: true
    _all?: true
  }

  export type ImportMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportMetadata to aggregate.
     */
    where?: ImportMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportMetadata to fetch.
     */
    orderBy?: ImportMetadataOrderByWithRelationInput | ImportMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportMetadata
    **/
    _count?: true | ImportMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportMetadataMaxAggregateInputType
  }

  export type GetImportMetadataAggregateType<T extends ImportMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateImportMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportMetadata[P]>
      : GetScalarType<T[P], AggregateImportMetadata[P]>
  }




  export type ImportMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportMetadataWhereInput
    orderBy?: ImportMetadataOrderByWithAggregationInput | ImportMetadataOrderByWithAggregationInput[]
    by: ImportMetadataScalarFieldEnum[] | ImportMetadataScalarFieldEnum
    having?: ImportMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportMetadataCountAggregateInputType | true
    _avg?: ImportMetadataAvgAggregateInputType
    _sum?: ImportMetadataSumAggregateInputType
    _min?: ImportMetadataMinAggregateInputType
    _max?: ImportMetadataMaxAggregateInputType
  }

  export type ImportMetadataGroupByOutputType = {
    id: string
    totalCount: number | null
    importedAt: Date | null
    isFullImport: number | null
    _count: ImportMetadataCountAggregateOutputType | null
    _avg: ImportMetadataAvgAggregateOutputType | null
    _sum: ImportMetadataSumAggregateOutputType | null
    _min: ImportMetadataMinAggregateOutputType | null
    _max: ImportMetadataMaxAggregateOutputType | null
  }

  type GetImportMetadataGroupByPayload<T extends ImportMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ImportMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ImportMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCount?: boolean
    importedAt?: boolean
    isFullImport?: boolean
  }, ExtArgs["result"]["importMetadata"]>

  export type ImportMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCount?: boolean
    importedAt?: boolean
    isFullImport?: boolean
  }, ExtArgs["result"]["importMetadata"]>

  export type ImportMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCount?: boolean
    importedAt?: boolean
    isFullImport?: boolean
  }, ExtArgs["result"]["importMetadata"]>

  export type ImportMetadataSelectScalar = {
    id?: boolean
    totalCount?: boolean
    importedAt?: boolean
    isFullImport?: boolean
  }

  export type ImportMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalCount" | "importedAt" | "isFullImport", ExtArgs["result"]["importMetadata"]>

  export type $ImportMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportMetadata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalCount: number | null
      importedAt: Date | null
      isFullImport: number | null
    }, ExtArgs["result"]["importMetadata"]>
    composites: {}
  }

  type ImportMetadataGetPayload<S extends boolean | null | undefined | ImportMetadataDefaultArgs> = $Result.GetResult<Prisma.$ImportMetadataPayload, S>

  type ImportMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportMetadataCountAggregateInputType | true
    }

  export interface ImportMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportMetadata'], meta: { name: 'ImportMetadata' } }
    /**
     * Find zero or one ImportMetadata that matches the filter.
     * @param {ImportMetadataFindUniqueArgs} args - Arguments to find a ImportMetadata
     * @example
     * // Get one ImportMetadata
     * const importMetadata = await prisma.importMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportMetadataFindUniqueArgs>(args: SelectSubset<T, ImportMetadataFindUniqueArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportMetadataFindUniqueOrThrowArgs} args - Arguments to find a ImportMetadata
     * @example
     * // Get one ImportMetadata
     * const importMetadata = await prisma.importMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataFindFirstArgs} args - Arguments to find a ImportMetadata
     * @example
     * // Get one ImportMetadata
     * const importMetadata = await prisma.importMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportMetadataFindFirstArgs>(args?: SelectSubset<T, ImportMetadataFindFirstArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataFindFirstOrThrowArgs} args - Arguments to find a ImportMetadata
     * @example
     * // Get one ImportMetadata
     * const importMetadata = await prisma.importMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportMetadata
     * const importMetadata = await prisma.importMetadata.findMany()
     * 
     * // Get first 10 ImportMetadata
     * const importMetadata = await prisma.importMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importMetadataWithIdOnly = await prisma.importMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportMetadataFindManyArgs>(args?: SelectSubset<T, ImportMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportMetadata.
     * @param {ImportMetadataCreateArgs} args - Arguments to create a ImportMetadata.
     * @example
     * // Create one ImportMetadata
     * const ImportMetadata = await prisma.importMetadata.create({
     *   data: {
     *     // ... data to create a ImportMetadata
     *   }
     * })
     * 
     */
    create<T extends ImportMetadataCreateArgs>(args: SelectSubset<T, ImportMetadataCreateArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportMetadata.
     * @param {ImportMetadataCreateManyArgs} args - Arguments to create many ImportMetadata.
     * @example
     * // Create many ImportMetadata
     * const importMetadata = await prisma.importMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportMetadataCreateManyArgs>(args?: SelectSubset<T, ImportMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportMetadata and returns the data saved in the database.
     * @param {ImportMetadataCreateManyAndReturnArgs} args - Arguments to create many ImportMetadata.
     * @example
     * // Create many ImportMetadata
     * const importMetadata = await prisma.importMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportMetadata and only return the `id`
     * const importMetadataWithIdOnly = await prisma.importMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportMetadata.
     * @param {ImportMetadataDeleteArgs} args - Arguments to delete one ImportMetadata.
     * @example
     * // Delete one ImportMetadata
     * const ImportMetadata = await prisma.importMetadata.delete({
     *   where: {
     *     // ... filter to delete one ImportMetadata
     *   }
     * })
     * 
     */
    delete<T extends ImportMetadataDeleteArgs>(args: SelectSubset<T, ImportMetadataDeleteArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportMetadata.
     * @param {ImportMetadataUpdateArgs} args - Arguments to update one ImportMetadata.
     * @example
     * // Update one ImportMetadata
     * const importMetadata = await prisma.importMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportMetadataUpdateArgs>(args: SelectSubset<T, ImportMetadataUpdateArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportMetadata.
     * @param {ImportMetadataDeleteManyArgs} args - Arguments to filter ImportMetadata to delete.
     * @example
     * // Delete a few ImportMetadata
     * const { count } = await prisma.importMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportMetadataDeleteManyArgs>(args?: SelectSubset<T, ImportMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportMetadata
     * const importMetadata = await prisma.importMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportMetadataUpdateManyArgs>(args: SelectSubset<T, ImportMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportMetadata and returns the data updated in the database.
     * @param {ImportMetadataUpdateManyAndReturnArgs} args - Arguments to update many ImportMetadata.
     * @example
     * // Update many ImportMetadata
     * const importMetadata = await prisma.importMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportMetadata and only return the `id`
     * const importMetadataWithIdOnly = await prisma.importMetadata.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ImportMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportMetadata.
     * @param {ImportMetadataUpsertArgs} args - Arguments to update or create a ImportMetadata.
     * @example
     * // Update or create a ImportMetadata
     * const importMetadata = await prisma.importMetadata.upsert({
     *   create: {
     *     // ... data to create a ImportMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ImportMetadataUpsertArgs>(args: SelectSubset<T, ImportMetadataUpsertArgs<ExtArgs>>): Prisma__ImportMetadataClient<$Result.GetResult<Prisma.$ImportMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataCountArgs} args - Arguments to filter ImportMetadata to count.
     * @example
     * // Count the number of ImportMetadata
     * const count = await prisma.importMetadata.count({
     *   where: {
     *     // ... the filter for the ImportMetadata we want to count
     *   }
     * })
    **/
    count<T extends ImportMetadataCountArgs>(
      args?: Subset<T, ImportMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportMetadataAggregateArgs>(args: Subset<T, ImportMetadataAggregateArgs>): Prisma.PrismaPromise<GetImportMetadataAggregateType<T>>

    /**
     * Group by ImportMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportMetadataGroupByArgs} args - Group by arguments.
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
      T extends ImportMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ImportMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportMetadata model
   */
  readonly fields: ImportMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ImportMetadata model
   */
  interface ImportMetadataFieldRefs {
    readonly id: FieldRef<"ImportMetadata", 'String'>
    readonly totalCount: FieldRef<"ImportMetadata", 'Int'>
    readonly importedAt: FieldRef<"ImportMetadata", 'DateTime'>
    readonly isFullImport: FieldRef<"ImportMetadata", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ImportMetadata findUnique
   */
  export type ImportMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ImportMetadata to fetch.
     */
    where: ImportMetadataWhereUniqueInput
  }

  /**
   * ImportMetadata findUniqueOrThrow
   */
  export type ImportMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ImportMetadata to fetch.
     */
    where: ImportMetadataWhereUniqueInput
  }

  /**
   * ImportMetadata findFirst
   */
  export type ImportMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ImportMetadata to fetch.
     */
    where?: ImportMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportMetadata to fetch.
     */
    orderBy?: ImportMetadataOrderByWithRelationInput | ImportMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportMetadata.
     */
    cursor?: ImportMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportMetadata.
     */
    distinct?: ImportMetadataScalarFieldEnum | ImportMetadataScalarFieldEnum[]
  }

  /**
   * ImportMetadata findFirstOrThrow
   */
  export type ImportMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ImportMetadata to fetch.
     */
    where?: ImportMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportMetadata to fetch.
     */
    orderBy?: ImportMetadataOrderByWithRelationInput | ImportMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportMetadata.
     */
    cursor?: ImportMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportMetadata.
     */
    distinct?: ImportMetadataScalarFieldEnum | ImportMetadataScalarFieldEnum[]
  }

  /**
   * ImportMetadata findMany
   */
  export type ImportMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ImportMetadata to fetch.
     */
    where?: ImportMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportMetadata to fetch.
     */
    orderBy?: ImportMetadataOrderByWithRelationInput | ImportMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportMetadata.
     */
    cursor?: ImportMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportMetadata.
     */
    skip?: number
    distinct?: ImportMetadataScalarFieldEnum | ImportMetadataScalarFieldEnum[]
  }

  /**
   * ImportMetadata create
   */
  export type ImportMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * The data needed to create a ImportMetadata.
     */
    data: XOR<ImportMetadataCreateInput, ImportMetadataUncheckedCreateInput>
  }

  /**
   * ImportMetadata createMany
   */
  export type ImportMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportMetadata.
     */
    data: ImportMetadataCreateManyInput | ImportMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportMetadata createManyAndReturn
   */
  export type ImportMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many ImportMetadata.
     */
    data: ImportMetadataCreateManyInput | ImportMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportMetadata update
   */
  export type ImportMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * The data needed to update a ImportMetadata.
     */
    data: XOR<ImportMetadataUpdateInput, ImportMetadataUncheckedUpdateInput>
    /**
     * Choose, which ImportMetadata to update.
     */
    where: ImportMetadataWhereUniqueInput
  }

  /**
   * ImportMetadata updateMany
   */
  export type ImportMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportMetadata.
     */
    data: XOR<ImportMetadataUpdateManyMutationInput, ImportMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ImportMetadata to update
     */
    where?: ImportMetadataWhereInput
    /**
     * Limit how many ImportMetadata to update.
     */
    limit?: number
  }

  /**
   * ImportMetadata updateManyAndReturn
   */
  export type ImportMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * The data used to update ImportMetadata.
     */
    data: XOR<ImportMetadataUpdateManyMutationInput, ImportMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ImportMetadata to update
     */
    where?: ImportMetadataWhereInput
    /**
     * Limit how many ImportMetadata to update.
     */
    limit?: number
  }

  /**
   * ImportMetadata upsert
   */
  export type ImportMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * The filter to search for the ImportMetadata to update in case it exists.
     */
    where: ImportMetadataWhereUniqueInput
    /**
     * In case the ImportMetadata found by the `where` argument doesn't exist, create a new ImportMetadata with this data.
     */
    create: XOR<ImportMetadataCreateInput, ImportMetadataUncheckedCreateInput>
    /**
     * In case the ImportMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportMetadataUpdateInput, ImportMetadataUncheckedUpdateInput>
  }

  /**
   * ImportMetadata delete
   */
  export type ImportMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
    /**
     * Filter which ImportMetadata to delete.
     */
    where: ImportMetadataWhereUniqueInput
  }

  /**
   * ImportMetadata deleteMany
   */
  export type ImportMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportMetadata to delete
     */
    where?: ImportMetadataWhereInput
    /**
     * Limit how many ImportMetadata to delete.
     */
    limit?: number
  }

  /**
   * ImportMetadata without action
   */
  export type ImportMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportMetadata
     */
    select?: ImportMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportMetadata
     */
    omit?: ImportMetadataOmit<ExtArgs> | null
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


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    supertype: 'supertype',
    subtypes: 'subtypes',
    level: 'level',
    hp: 'hp',
    types: 'types',
    evolvesFrom: 'evolvesFrom',
    evolvesTo: 'evolvesTo',
    rules: 'rules',
    flavorText: 'flavorText',
    artist: 'artist',
    rarity: 'rarity',
    number: 'number',
    nationalPokedexNumbers: 'nationalPokedexNumbers',
    setId: 'setId',
    retreatCost: 'retreatCost',
    convertedRetreatCost: 'convertedRetreatCost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const AbilityScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    name: 'name',
    text: 'text',
    type: 'type'
  };

  export type AbilityScalarFieldEnum = (typeof AbilityScalarFieldEnum)[keyof typeof AbilityScalarFieldEnum]


  export const AttackScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    name: 'name',
    cost: 'cost',
    convertedEnergyCost: 'convertedEnergyCost',
    damage: 'damage',
    text: 'text'
  };

  export type AttackScalarFieldEnum = (typeof AttackScalarFieldEnum)[keyof typeof AttackScalarFieldEnum]


  export const WeaknessScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    type: 'type',
    value: 'value'
  };

  export type WeaknessScalarFieldEnum = (typeof WeaknessScalarFieldEnum)[keyof typeof WeaknessScalarFieldEnum]


  export const ResistanceScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    type: 'type',
    value: 'value'
  };

  export type ResistanceScalarFieldEnum = (typeof ResistanceScalarFieldEnum)[keyof typeof ResistanceScalarFieldEnum]


  export const CardLegalitiesScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    unlimited: 'unlimited',
    standard: 'standard',
    expanded: 'expanded'
  };

  export type CardLegalitiesScalarFieldEnum = (typeof CardLegalitiesScalarFieldEnum)[keyof typeof CardLegalitiesScalarFieldEnum]


  export const CardImagesScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    small: 'small',
    large: 'large'
  };

  export type CardImagesScalarFieldEnum = (typeof CardImagesScalarFieldEnum)[keyof typeof CardImagesScalarFieldEnum]


  export const CardMarketScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    url: 'url',
    updatedAt: 'updatedAt',
    averageSellPrice: 'averageSellPrice',
    lowPrice: 'lowPrice',
    trendPrice: 'trendPrice',
    germanProLow: 'germanProLow',
    suggestedPrice: 'suggestedPrice',
    reverseHoloSell: 'reverseHoloSell',
    reverseHoloLow: 'reverseHoloLow',
    reverseHoloTrend: 'reverseHoloTrend',
    lowPriceExPlus: 'lowPriceExPlus',
    avg1: 'avg1',
    avg7: 'avg7',
    avg30: 'avg30',
    reverseHoloAvg1: 'reverseHoloAvg1',
    reverseHoloAvg7: 'reverseHoloAvg7',
    reverseHoloAvg30: 'reverseHoloAvg30'
  };

  export type CardMarketScalarFieldEnum = (typeof CardMarketScalarFieldEnum)[keyof typeof CardMarketScalarFieldEnum]


  export const TcgPlayerPricesScalarFieldEnum: {
    id: 'id',
    normalLow: 'normalLow',
    normalMid: 'normalMid',
    normalHigh: 'normalHigh',
    normalMarket: 'normalMarket',
    normalDirectLow: 'normalDirectLow',
    holofoilLow: 'holofoilLow',
    holofoilMid: 'holofoilMid',
    holofoilHigh: 'holofoilHigh',
    holofoilMarket: 'holofoilMarket',
    holofoilDirectLow: 'holofoilDirectLow',
    reverseHolofoilLow: 'reverseHolofoilLow',
    reverseHolofoilMid: 'reverseHolofoilMid',
    reverseHolofoilHigh: 'reverseHolofoilHigh',
    reverseHolofoilMarket: 'reverseHolofoilMarket',
    reverseHolofoilDirectLow: 'reverseHolofoilDirectLow'
  };

  export type TcgPlayerPricesScalarFieldEnum = (typeof TcgPlayerPricesScalarFieldEnum)[keyof typeof TcgPlayerPricesScalarFieldEnum]


  export const TcgPlayerScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    url: 'url',
    updatedAt: 'updatedAt',
    pricesId: 'pricesId'
  };

  export type TcgPlayerScalarFieldEnum = (typeof TcgPlayerScalarFieldEnum)[keyof typeof TcgPlayerScalarFieldEnum]


  export const CardSetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    series: 'series',
    printedTotal: 'printedTotal',
    total: 'total',
    ptcgoCode: 'ptcgoCode',
    releaseDate: 'releaseDate',
    updatedAt: 'updatedAt',
    symbol: 'symbol',
    logo: 'logo'
  };

  export type CardSetScalarFieldEnum = (typeof CardSetScalarFieldEnum)[keyof typeof CardSetScalarFieldEnum]


  export const SetLegalitiesScalarFieldEnum: {
    id: 'id',
    setId: 'setId',
    unlimited: 'unlimited',
    standard: 'standard',
    expanded: 'expanded'
  };

  export type SetLegalitiesScalarFieldEnum = (typeof SetLegalitiesScalarFieldEnum)[keyof typeof SetLegalitiesScalarFieldEnum]


  export const ImportMetadataScalarFieldEnum: {
    id: 'id',
    totalCount: 'totalCount',
    importedAt: 'importedAt',
    isFullImport: 'isFullImport'
  };

  export type ImportMetadataScalarFieldEnum = (typeof ImportMetadataScalarFieldEnum)[keyof typeof ImportMetadataScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    supertype?: StringNullableFilter<"Card"> | string | null
    subtypes?: StringNullableListFilter<"Card">
    level?: StringNullableFilter<"Card"> | string | null
    hp?: StringNullableFilter<"Card"> | string | null
    types?: StringNullableListFilter<"Card">
    evolvesFrom?: StringNullableFilter<"Card"> | string | null
    evolvesTo?: StringNullableListFilter<"Card">
    rules?: StringNullableListFilter<"Card">
    flavorText?: StringNullableFilter<"Card"> | string | null
    artist?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    number?: StringFilter<"Card"> | string
    nationalPokedexNumbers?: IntNullableListFilter<"Card">
    setId?: StringNullableFilter<"Card"> | string | null
    retreatCost?: StringNullableListFilter<"Card">
    convertedRetreatCost?: IntNullableFilter<"Card"> | number | null
    createdAt?: DateTimeNullableFilter<"Card"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Card"> | Date | string | null
    abilities?: AbilityListRelationFilter
    attacks?: AttackListRelationFilter
    weaknesses?: WeaknessListRelationFilter
    resistances?: ResistanceListRelationFilter
    legalities?: XOR<CardLegalitiesNullableScalarRelationFilter, CardLegalitiesWhereInput> | null
    images?: XOR<CardImagesNullableScalarRelationFilter, CardImagesWhereInput> | null
    cardmarket?: XOR<CardMarketNullableScalarRelationFilter, CardMarketWhereInput> | null
    tcgplayer?: XOR<TcgPlayerNullableScalarRelationFilter, TcgPlayerWhereInput> | null
    set?: XOR<CardSetNullableScalarRelationFilter, CardSetWhereInput> | null
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    supertype?: SortOrderInput | SortOrder
    subtypes?: SortOrder
    level?: SortOrderInput | SortOrder
    hp?: SortOrderInput | SortOrder
    types?: SortOrder
    evolvesFrom?: SortOrderInput | SortOrder
    evolvesTo?: SortOrder
    rules?: SortOrder
    flavorText?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    number?: SortOrder
    nationalPokedexNumbers?: SortOrder
    setId?: SortOrderInput | SortOrder
    retreatCost?: SortOrder
    convertedRetreatCost?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    abilities?: AbilityOrderByRelationAggregateInput
    attacks?: AttackOrderByRelationAggregateInput
    weaknesses?: WeaknessOrderByRelationAggregateInput
    resistances?: ResistanceOrderByRelationAggregateInput
    legalities?: CardLegalitiesOrderByWithRelationInput
    images?: CardImagesOrderByWithRelationInput
    cardmarket?: CardMarketOrderByWithRelationInput
    tcgplayer?: TcgPlayerOrderByWithRelationInput
    set?: CardSetOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    supertype?: StringNullableFilter<"Card"> | string | null
    subtypes?: StringNullableListFilter<"Card">
    level?: StringNullableFilter<"Card"> | string | null
    hp?: StringNullableFilter<"Card"> | string | null
    types?: StringNullableListFilter<"Card">
    evolvesFrom?: StringNullableFilter<"Card"> | string | null
    evolvesTo?: StringNullableListFilter<"Card">
    rules?: StringNullableListFilter<"Card">
    flavorText?: StringNullableFilter<"Card"> | string | null
    artist?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    number?: StringFilter<"Card"> | string
    nationalPokedexNumbers?: IntNullableListFilter<"Card">
    setId?: StringNullableFilter<"Card"> | string | null
    retreatCost?: StringNullableListFilter<"Card">
    convertedRetreatCost?: IntNullableFilter<"Card"> | number | null
    createdAt?: DateTimeNullableFilter<"Card"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Card"> | Date | string | null
    abilities?: AbilityListRelationFilter
    attacks?: AttackListRelationFilter
    weaknesses?: WeaknessListRelationFilter
    resistances?: ResistanceListRelationFilter
    legalities?: XOR<CardLegalitiesNullableScalarRelationFilter, CardLegalitiesWhereInput> | null
    images?: XOR<CardImagesNullableScalarRelationFilter, CardImagesWhereInput> | null
    cardmarket?: XOR<CardMarketNullableScalarRelationFilter, CardMarketWhereInput> | null
    tcgplayer?: XOR<TcgPlayerNullableScalarRelationFilter, TcgPlayerWhereInput> | null
    set?: XOR<CardSetNullableScalarRelationFilter, CardSetWhereInput> | null
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    supertype?: SortOrderInput | SortOrder
    subtypes?: SortOrder
    level?: SortOrderInput | SortOrder
    hp?: SortOrderInput | SortOrder
    types?: SortOrder
    evolvesFrom?: SortOrderInput | SortOrder
    evolvesTo?: SortOrder
    rules?: SortOrder
    flavorText?: SortOrderInput | SortOrder
    artist?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    number?: SortOrder
    nationalPokedexNumbers?: SortOrder
    setId?: SortOrderInput | SortOrder
    retreatCost?: SortOrder
    convertedRetreatCost?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    supertype?: StringNullableWithAggregatesFilter<"Card"> | string | null
    subtypes?: StringNullableListFilter<"Card">
    level?: StringNullableWithAggregatesFilter<"Card"> | string | null
    hp?: StringNullableWithAggregatesFilter<"Card"> | string | null
    types?: StringNullableListFilter<"Card">
    evolvesFrom?: StringNullableWithAggregatesFilter<"Card"> | string | null
    evolvesTo?: StringNullableListFilter<"Card">
    rules?: StringNullableListFilter<"Card">
    flavorText?: StringNullableWithAggregatesFilter<"Card"> | string | null
    artist?: StringNullableWithAggregatesFilter<"Card"> | string | null
    rarity?: StringNullableWithAggregatesFilter<"Card"> | string | null
    number?: StringWithAggregatesFilter<"Card"> | string
    nationalPokedexNumbers?: IntNullableListFilter<"Card">
    setId?: StringNullableWithAggregatesFilter<"Card"> | string | null
    retreatCost?: StringNullableListFilter<"Card">
    convertedRetreatCost?: IntNullableWithAggregatesFilter<"Card"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Card"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Card"> | Date | string | null
  }

  export type AbilityWhereInput = {
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    id?: StringFilter<"Ability"> | string
    cardId?: StringFilter<"Ability"> | string
    name?: StringNullableFilter<"Ability"> | string | null
    text?: StringNullableFilter<"Ability"> | string | null
    type?: StringNullableFilter<"Ability"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type AbilityOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type AbilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbilityWhereInput | AbilityWhereInput[]
    OR?: AbilityWhereInput[]
    NOT?: AbilityWhereInput | AbilityWhereInput[]
    cardId?: StringFilter<"Ability"> | string
    name?: StringNullableFilter<"Ability"> | string | null
    text?: StringNullableFilter<"Ability"> | string | null
    type?: StringNullableFilter<"Ability"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type AbilityOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: AbilityCountOrderByAggregateInput
    _max?: AbilityMaxOrderByAggregateInput
    _min?: AbilityMinOrderByAggregateInput
  }

  export type AbilityScalarWhereWithAggregatesInput = {
    AND?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    OR?: AbilityScalarWhereWithAggregatesInput[]
    NOT?: AbilityScalarWhereWithAggregatesInput | AbilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ability"> | string
    cardId?: StringWithAggregatesFilter<"Ability"> | string
    name?: StringNullableWithAggregatesFilter<"Ability"> | string | null
    text?: StringNullableWithAggregatesFilter<"Ability"> | string | null
    type?: StringNullableWithAggregatesFilter<"Ability"> | string | null
  }

  export type AttackWhereInput = {
    AND?: AttackWhereInput | AttackWhereInput[]
    OR?: AttackWhereInput[]
    NOT?: AttackWhereInput | AttackWhereInput[]
    id?: StringFilter<"Attack"> | string
    cardId?: StringFilter<"Attack"> | string
    name?: StringNullableFilter<"Attack"> | string | null
    cost?: StringNullableListFilter<"Attack">
    convertedEnergyCost?: IntNullableFilter<"Attack"> | number | null
    damage?: StringNullableFilter<"Attack"> | string | null
    text?: StringNullableFilter<"Attack"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type AttackOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrderInput | SortOrder
    cost?: SortOrder
    convertedEnergyCost?: SortOrderInput | SortOrder
    damage?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type AttackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttackWhereInput | AttackWhereInput[]
    OR?: AttackWhereInput[]
    NOT?: AttackWhereInput | AttackWhereInput[]
    cardId?: StringFilter<"Attack"> | string
    name?: StringNullableFilter<"Attack"> | string | null
    cost?: StringNullableListFilter<"Attack">
    convertedEnergyCost?: IntNullableFilter<"Attack"> | number | null
    damage?: StringNullableFilter<"Attack"> | string | null
    text?: StringNullableFilter<"Attack"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type AttackOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrderInput | SortOrder
    cost?: SortOrder
    convertedEnergyCost?: SortOrderInput | SortOrder
    damage?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: AttackCountOrderByAggregateInput
    _avg?: AttackAvgOrderByAggregateInput
    _max?: AttackMaxOrderByAggregateInput
    _min?: AttackMinOrderByAggregateInput
    _sum?: AttackSumOrderByAggregateInput
  }

  export type AttackScalarWhereWithAggregatesInput = {
    AND?: AttackScalarWhereWithAggregatesInput | AttackScalarWhereWithAggregatesInput[]
    OR?: AttackScalarWhereWithAggregatesInput[]
    NOT?: AttackScalarWhereWithAggregatesInput | AttackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attack"> | string
    cardId?: StringWithAggregatesFilter<"Attack"> | string
    name?: StringNullableWithAggregatesFilter<"Attack"> | string | null
    cost?: StringNullableListFilter<"Attack">
    convertedEnergyCost?: IntNullableWithAggregatesFilter<"Attack"> | number | null
    damage?: StringNullableWithAggregatesFilter<"Attack"> | string | null
    text?: StringNullableWithAggregatesFilter<"Attack"> | string | null
  }

  export type WeaknessWhereInput = {
    AND?: WeaknessWhereInput | WeaknessWhereInput[]
    OR?: WeaknessWhereInput[]
    NOT?: WeaknessWhereInput | WeaknessWhereInput[]
    id?: StringFilter<"Weakness"> | string
    cardId?: StringFilter<"Weakness"> | string
    type?: StringNullableFilter<"Weakness"> | string | null
    value?: StringNullableFilter<"Weakness"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type WeaknessOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type WeaknessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeaknessWhereInput | WeaknessWhereInput[]
    OR?: WeaknessWhereInput[]
    NOT?: WeaknessWhereInput | WeaknessWhereInput[]
    cardId?: StringFilter<"Weakness"> | string
    type?: StringNullableFilter<"Weakness"> | string | null
    value?: StringNullableFilter<"Weakness"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type WeaknessOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: WeaknessCountOrderByAggregateInput
    _max?: WeaknessMaxOrderByAggregateInput
    _min?: WeaknessMinOrderByAggregateInput
  }

  export type WeaknessScalarWhereWithAggregatesInput = {
    AND?: WeaknessScalarWhereWithAggregatesInput | WeaknessScalarWhereWithAggregatesInput[]
    OR?: WeaknessScalarWhereWithAggregatesInput[]
    NOT?: WeaknessScalarWhereWithAggregatesInput | WeaknessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Weakness"> | string
    cardId?: StringWithAggregatesFilter<"Weakness"> | string
    type?: StringNullableWithAggregatesFilter<"Weakness"> | string | null
    value?: StringNullableWithAggregatesFilter<"Weakness"> | string | null
  }

  export type ResistanceWhereInput = {
    AND?: ResistanceWhereInput | ResistanceWhereInput[]
    OR?: ResistanceWhereInput[]
    NOT?: ResistanceWhereInput | ResistanceWhereInput[]
    id?: StringFilter<"Resistance"> | string
    cardId?: StringFilter<"Resistance"> | string
    type?: StringNullableFilter<"Resistance"> | string | null
    value?: StringNullableFilter<"Resistance"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type ResistanceOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type ResistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResistanceWhereInput | ResistanceWhereInput[]
    OR?: ResistanceWhereInput[]
    NOT?: ResistanceWhereInput | ResistanceWhereInput[]
    cardId?: StringFilter<"Resistance"> | string
    type?: StringNullableFilter<"Resistance"> | string | null
    value?: StringNullableFilter<"Resistance"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type ResistanceOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: ResistanceCountOrderByAggregateInput
    _max?: ResistanceMaxOrderByAggregateInput
    _min?: ResistanceMinOrderByAggregateInput
  }

  export type ResistanceScalarWhereWithAggregatesInput = {
    AND?: ResistanceScalarWhereWithAggregatesInput | ResistanceScalarWhereWithAggregatesInput[]
    OR?: ResistanceScalarWhereWithAggregatesInput[]
    NOT?: ResistanceScalarWhereWithAggregatesInput | ResistanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resistance"> | string
    cardId?: StringWithAggregatesFilter<"Resistance"> | string
    type?: StringNullableWithAggregatesFilter<"Resistance"> | string | null
    value?: StringNullableWithAggregatesFilter<"Resistance"> | string | null
  }

  export type CardLegalitiesWhereInput = {
    AND?: CardLegalitiesWhereInput | CardLegalitiesWhereInput[]
    OR?: CardLegalitiesWhereInput[]
    NOT?: CardLegalitiesWhereInput | CardLegalitiesWhereInput[]
    id?: StringFilter<"CardLegalities"> | string
    cardId?: StringFilter<"CardLegalities"> | string
    unlimited?: StringNullableFilter<"CardLegalities"> | string | null
    standard?: StringNullableFilter<"CardLegalities"> | string | null
    expanded?: StringNullableFilter<"CardLegalities"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type CardLegalitiesOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    unlimited?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    expanded?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type CardLegalitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardId?: string
    AND?: CardLegalitiesWhereInput | CardLegalitiesWhereInput[]
    OR?: CardLegalitiesWhereInput[]
    NOT?: CardLegalitiesWhereInput | CardLegalitiesWhereInput[]
    unlimited?: StringNullableFilter<"CardLegalities"> | string | null
    standard?: StringNullableFilter<"CardLegalities"> | string | null
    expanded?: StringNullableFilter<"CardLegalities"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id" | "cardId">

  export type CardLegalitiesOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    unlimited?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    expanded?: SortOrderInput | SortOrder
    _count?: CardLegalitiesCountOrderByAggregateInput
    _max?: CardLegalitiesMaxOrderByAggregateInput
    _min?: CardLegalitiesMinOrderByAggregateInput
  }

  export type CardLegalitiesScalarWhereWithAggregatesInput = {
    AND?: CardLegalitiesScalarWhereWithAggregatesInput | CardLegalitiesScalarWhereWithAggregatesInput[]
    OR?: CardLegalitiesScalarWhereWithAggregatesInput[]
    NOT?: CardLegalitiesScalarWhereWithAggregatesInput | CardLegalitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardLegalities"> | string
    cardId?: StringWithAggregatesFilter<"CardLegalities"> | string
    unlimited?: StringNullableWithAggregatesFilter<"CardLegalities"> | string | null
    standard?: StringNullableWithAggregatesFilter<"CardLegalities"> | string | null
    expanded?: StringNullableWithAggregatesFilter<"CardLegalities"> | string | null
  }

  export type CardImagesWhereInput = {
    AND?: CardImagesWhereInput | CardImagesWhereInput[]
    OR?: CardImagesWhereInput[]
    NOT?: CardImagesWhereInput | CardImagesWhereInput[]
    id?: StringFilter<"CardImages"> | string
    cardId?: StringFilter<"CardImages"> | string
    small?: StringNullableFilter<"CardImages"> | string | null
    large?: StringNullableFilter<"CardImages"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type CardImagesOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    small?: SortOrderInput | SortOrder
    large?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type CardImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardId?: string
    AND?: CardImagesWhereInput | CardImagesWhereInput[]
    OR?: CardImagesWhereInput[]
    NOT?: CardImagesWhereInput | CardImagesWhereInput[]
    small?: StringNullableFilter<"CardImages"> | string | null
    large?: StringNullableFilter<"CardImages"> | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id" | "cardId">

  export type CardImagesOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    small?: SortOrderInput | SortOrder
    large?: SortOrderInput | SortOrder
    _count?: CardImagesCountOrderByAggregateInput
    _max?: CardImagesMaxOrderByAggregateInput
    _min?: CardImagesMinOrderByAggregateInput
  }

  export type CardImagesScalarWhereWithAggregatesInput = {
    AND?: CardImagesScalarWhereWithAggregatesInput | CardImagesScalarWhereWithAggregatesInput[]
    OR?: CardImagesScalarWhereWithAggregatesInput[]
    NOT?: CardImagesScalarWhereWithAggregatesInput | CardImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardImages"> | string
    cardId?: StringWithAggregatesFilter<"CardImages"> | string
    small?: StringNullableWithAggregatesFilter<"CardImages"> | string | null
    large?: StringNullableWithAggregatesFilter<"CardImages"> | string | null
  }

  export type CardMarketWhereInput = {
    AND?: CardMarketWhereInput | CardMarketWhereInput[]
    OR?: CardMarketWhereInput[]
    NOT?: CardMarketWhereInput | CardMarketWhereInput[]
    id?: StringFilter<"CardMarket"> | string
    cardId?: StringFilter<"CardMarket"> | string
    url?: StringNullableFilter<"CardMarket"> | string | null
    updatedAt?: DateTimeNullableFilter<"CardMarket"> | Date | string | null
    averageSellPrice?: FloatNullableFilter<"CardMarket"> | number | null
    lowPrice?: FloatNullableFilter<"CardMarket"> | number | null
    trendPrice?: FloatNullableFilter<"CardMarket"> | number | null
    germanProLow?: FloatNullableFilter<"CardMarket"> | number | null
    suggestedPrice?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloSell?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloLow?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloTrend?: FloatNullableFilter<"CardMarket"> | number | null
    lowPriceExPlus?: FloatNullableFilter<"CardMarket"> | number | null
    avg1?: FloatNullableFilter<"CardMarket"> | number | null
    avg7?: FloatNullableFilter<"CardMarket"> | number | null
    avg30?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg1?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg7?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg30?: FloatNullableFilter<"CardMarket"> | number | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type CardMarketOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    averageSellPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    trendPrice?: SortOrderInput | SortOrder
    germanProLow?: SortOrderInput | SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    reverseHoloSell?: SortOrderInput | SortOrder
    reverseHoloLow?: SortOrderInput | SortOrder
    reverseHoloTrend?: SortOrderInput | SortOrder
    lowPriceExPlus?: SortOrderInput | SortOrder
    avg1?: SortOrderInput | SortOrder
    avg7?: SortOrderInput | SortOrder
    avg30?: SortOrderInput | SortOrder
    reverseHoloAvg1?: SortOrderInput | SortOrder
    reverseHoloAvg7?: SortOrderInput | SortOrder
    reverseHoloAvg30?: SortOrderInput | SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type CardMarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardId?: string
    AND?: CardMarketWhereInput | CardMarketWhereInput[]
    OR?: CardMarketWhereInput[]
    NOT?: CardMarketWhereInput | CardMarketWhereInput[]
    url?: StringNullableFilter<"CardMarket"> | string | null
    updatedAt?: DateTimeNullableFilter<"CardMarket"> | Date | string | null
    averageSellPrice?: FloatNullableFilter<"CardMarket"> | number | null
    lowPrice?: FloatNullableFilter<"CardMarket"> | number | null
    trendPrice?: FloatNullableFilter<"CardMarket"> | number | null
    germanProLow?: FloatNullableFilter<"CardMarket"> | number | null
    suggestedPrice?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloSell?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloLow?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloTrend?: FloatNullableFilter<"CardMarket"> | number | null
    lowPriceExPlus?: FloatNullableFilter<"CardMarket"> | number | null
    avg1?: FloatNullableFilter<"CardMarket"> | number | null
    avg7?: FloatNullableFilter<"CardMarket"> | number | null
    avg30?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg1?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg7?: FloatNullableFilter<"CardMarket"> | number | null
    reverseHoloAvg30?: FloatNullableFilter<"CardMarket"> | number | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id" | "cardId">

  export type CardMarketOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    averageSellPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    trendPrice?: SortOrderInput | SortOrder
    germanProLow?: SortOrderInput | SortOrder
    suggestedPrice?: SortOrderInput | SortOrder
    reverseHoloSell?: SortOrderInput | SortOrder
    reverseHoloLow?: SortOrderInput | SortOrder
    reverseHoloTrend?: SortOrderInput | SortOrder
    lowPriceExPlus?: SortOrderInput | SortOrder
    avg1?: SortOrderInput | SortOrder
    avg7?: SortOrderInput | SortOrder
    avg30?: SortOrderInput | SortOrder
    reverseHoloAvg1?: SortOrderInput | SortOrder
    reverseHoloAvg7?: SortOrderInput | SortOrder
    reverseHoloAvg30?: SortOrderInput | SortOrder
    _count?: CardMarketCountOrderByAggregateInput
    _avg?: CardMarketAvgOrderByAggregateInput
    _max?: CardMarketMaxOrderByAggregateInput
    _min?: CardMarketMinOrderByAggregateInput
    _sum?: CardMarketSumOrderByAggregateInput
  }

  export type CardMarketScalarWhereWithAggregatesInput = {
    AND?: CardMarketScalarWhereWithAggregatesInput | CardMarketScalarWhereWithAggregatesInput[]
    OR?: CardMarketScalarWhereWithAggregatesInput[]
    NOT?: CardMarketScalarWhereWithAggregatesInput | CardMarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardMarket"> | string
    cardId?: StringWithAggregatesFilter<"CardMarket"> | string
    url?: StringNullableWithAggregatesFilter<"CardMarket"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CardMarket"> | Date | string | null
    averageSellPrice?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    lowPrice?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    trendPrice?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    germanProLow?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    suggestedPrice?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloSell?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloLow?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloTrend?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    lowPriceExPlus?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    avg1?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    avg7?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    avg30?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloAvg1?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloAvg7?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
    reverseHoloAvg30?: FloatNullableWithAggregatesFilter<"CardMarket"> | number | null
  }

  export type TcgPlayerPricesWhereInput = {
    AND?: TcgPlayerPricesWhereInput | TcgPlayerPricesWhereInput[]
    OR?: TcgPlayerPricesWhereInput[]
    NOT?: TcgPlayerPricesWhereInput | TcgPlayerPricesWhereInput[]
    id?: StringFilter<"TcgPlayerPrices"> | string
    normalLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    tcgplayer?: XOR<TcgPlayerNullableScalarRelationFilter, TcgPlayerWhereInput> | null
  }

  export type TcgPlayerPricesOrderByWithRelationInput = {
    id?: SortOrder
    normalLow?: SortOrderInput | SortOrder
    normalMid?: SortOrderInput | SortOrder
    normalHigh?: SortOrderInput | SortOrder
    normalMarket?: SortOrderInput | SortOrder
    normalDirectLow?: SortOrderInput | SortOrder
    holofoilLow?: SortOrderInput | SortOrder
    holofoilMid?: SortOrderInput | SortOrder
    holofoilHigh?: SortOrderInput | SortOrder
    holofoilMarket?: SortOrderInput | SortOrder
    holofoilDirectLow?: SortOrderInput | SortOrder
    reverseHolofoilLow?: SortOrderInput | SortOrder
    reverseHolofoilMid?: SortOrderInput | SortOrder
    reverseHolofoilHigh?: SortOrderInput | SortOrder
    reverseHolofoilMarket?: SortOrderInput | SortOrder
    reverseHolofoilDirectLow?: SortOrderInput | SortOrder
    tcgplayer?: TcgPlayerOrderByWithRelationInput
  }

  export type TcgPlayerPricesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TcgPlayerPricesWhereInput | TcgPlayerPricesWhereInput[]
    OR?: TcgPlayerPricesWhereInput[]
    NOT?: TcgPlayerPricesWhereInput | TcgPlayerPricesWhereInput[]
    normalLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    normalDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    holofoilDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMid?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilHigh?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMarket?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilDirectLow?: FloatNullableFilter<"TcgPlayerPrices"> | number | null
    tcgplayer?: XOR<TcgPlayerNullableScalarRelationFilter, TcgPlayerWhereInput> | null
  }, "id">

  export type TcgPlayerPricesOrderByWithAggregationInput = {
    id?: SortOrder
    normalLow?: SortOrderInput | SortOrder
    normalMid?: SortOrderInput | SortOrder
    normalHigh?: SortOrderInput | SortOrder
    normalMarket?: SortOrderInput | SortOrder
    normalDirectLow?: SortOrderInput | SortOrder
    holofoilLow?: SortOrderInput | SortOrder
    holofoilMid?: SortOrderInput | SortOrder
    holofoilHigh?: SortOrderInput | SortOrder
    holofoilMarket?: SortOrderInput | SortOrder
    holofoilDirectLow?: SortOrderInput | SortOrder
    reverseHolofoilLow?: SortOrderInput | SortOrder
    reverseHolofoilMid?: SortOrderInput | SortOrder
    reverseHolofoilHigh?: SortOrderInput | SortOrder
    reverseHolofoilMarket?: SortOrderInput | SortOrder
    reverseHolofoilDirectLow?: SortOrderInput | SortOrder
    _count?: TcgPlayerPricesCountOrderByAggregateInput
    _avg?: TcgPlayerPricesAvgOrderByAggregateInput
    _max?: TcgPlayerPricesMaxOrderByAggregateInput
    _min?: TcgPlayerPricesMinOrderByAggregateInput
    _sum?: TcgPlayerPricesSumOrderByAggregateInput
  }

  export type TcgPlayerPricesScalarWhereWithAggregatesInput = {
    AND?: TcgPlayerPricesScalarWhereWithAggregatesInput | TcgPlayerPricesScalarWhereWithAggregatesInput[]
    OR?: TcgPlayerPricesScalarWhereWithAggregatesInput[]
    NOT?: TcgPlayerPricesScalarWhereWithAggregatesInput | TcgPlayerPricesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TcgPlayerPrices"> | string
    normalLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    normalMid?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    normalHigh?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    normalMarket?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    normalDirectLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    holofoilLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    holofoilMid?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    holofoilHigh?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    holofoilMarket?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    holofoilDirectLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMid?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilHigh?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilMarket?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
    reverseHolofoilDirectLow?: FloatNullableWithAggregatesFilter<"TcgPlayerPrices"> | number | null
  }

  export type TcgPlayerWhereInput = {
    AND?: TcgPlayerWhereInput | TcgPlayerWhereInput[]
    OR?: TcgPlayerWhereInput[]
    NOT?: TcgPlayerWhereInput | TcgPlayerWhereInput[]
    id?: StringFilter<"TcgPlayer"> | string
    cardId?: StringFilter<"TcgPlayer"> | string
    url?: StringNullableFilter<"TcgPlayer"> | string | null
    updatedAt?: DateTimeNullableFilter<"TcgPlayer"> | Date | string | null
    pricesId?: StringFilter<"TcgPlayer"> | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    prices?: XOR<TcgPlayerPricesScalarRelationFilter, TcgPlayerPricesWhereInput>
  }

  export type TcgPlayerOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pricesId?: SortOrder
    card?: CardOrderByWithRelationInput
    prices?: TcgPlayerPricesOrderByWithRelationInput
  }

  export type TcgPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardId?: string
    pricesId?: string
    AND?: TcgPlayerWhereInput | TcgPlayerWhereInput[]
    OR?: TcgPlayerWhereInput[]
    NOT?: TcgPlayerWhereInput | TcgPlayerWhereInput[]
    url?: StringNullableFilter<"TcgPlayer"> | string | null
    updatedAt?: DateTimeNullableFilter<"TcgPlayer"> | Date | string | null
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    prices?: XOR<TcgPlayerPricesScalarRelationFilter, TcgPlayerPricesWhereInput>
  }, "id" | "cardId" | "pricesId">

  export type TcgPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pricesId?: SortOrder
    _count?: TcgPlayerCountOrderByAggregateInput
    _max?: TcgPlayerMaxOrderByAggregateInput
    _min?: TcgPlayerMinOrderByAggregateInput
  }

  export type TcgPlayerScalarWhereWithAggregatesInput = {
    AND?: TcgPlayerScalarWhereWithAggregatesInput | TcgPlayerScalarWhereWithAggregatesInput[]
    OR?: TcgPlayerScalarWhereWithAggregatesInput[]
    NOT?: TcgPlayerScalarWhereWithAggregatesInput | TcgPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TcgPlayer"> | string
    cardId?: StringWithAggregatesFilter<"TcgPlayer"> | string
    url?: StringNullableWithAggregatesFilter<"TcgPlayer"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TcgPlayer"> | Date | string | null
    pricesId?: StringWithAggregatesFilter<"TcgPlayer"> | string
  }

  export type CardSetWhereInput = {
    AND?: CardSetWhereInput | CardSetWhereInput[]
    OR?: CardSetWhereInput[]
    NOT?: CardSetWhereInput | CardSetWhereInput[]
    id?: StringFilter<"CardSet"> | string
    name?: StringNullableFilter<"CardSet"> | string | null
    series?: StringNullableFilter<"CardSet"> | string | null
    printedTotal?: IntNullableFilter<"CardSet"> | number | null
    total?: IntNullableFilter<"CardSet"> | number | null
    ptcgoCode?: StringNullableFilter<"CardSet"> | string | null
    releaseDate?: DateTimeNullableFilter<"CardSet"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"CardSet"> | Date | string | null
    symbol?: StringNullableFilter<"CardSet"> | string | null
    logo?: StringNullableFilter<"CardSet"> | string | null
    cards?: CardListRelationFilter
    legalities?: XOR<SetLegalitiesNullableScalarRelationFilter, SetLegalitiesWhereInput> | null
  }

  export type CardSetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    printedTotal?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    ptcgoCode?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    cards?: CardOrderByRelationAggregateInput
    legalities?: SetLegalitiesOrderByWithRelationInput
  }

  export type CardSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardSetWhereInput | CardSetWhereInput[]
    OR?: CardSetWhereInput[]
    NOT?: CardSetWhereInput | CardSetWhereInput[]
    name?: StringNullableFilter<"CardSet"> | string | null
    series?: StringNullableFilter<"CardSet"> | string | null
    printedTotal?: IntNullableFilter<"CardSet"> | number | null
    total?: IntNullableFilter<"CardSet"> | number | null
    ptcgoCode?: StringNullableFilter<"CardSet"> | string | null
    releaseDate?: DateTimeNullableFilter<"CardSet"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"CardSet"> | Date | string | null
    symbol?: StringNullableFilter<"CardSet"> | string | null
    logo?: StringNullableFilter<"CardSet"> | string | null
    cards?: CardListRelationFilter
    legalities?: XOR<SetLegalitiesNullableScalarRelationFilter, SetLegalitiesWhereInput> | null
  }, "id">

  export type CardSetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    printedTotal?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    ptcgoCode?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    symbol?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: CardSetCountOrderByAggregateInput
    _avg?: CardSetAvgOrderByAggregateInput
    _max?: CardSetMaxOrderByAggregateInput
    _min?: CardSetMinOrderByAggregateInput
    _sum?: CardSetSumOrderByAggregateInput
  }

  export type CardSetScalarWhereWithAggregatesInput = {
    AND?: CardSetScalarWhereWithAggregatesInput | CardSetScalarWhereWithAggregatesInput[]
    OR?: CardSetScalarWhereWithAggregatesInput[]
    NOT?: CardSetScalarWhereWithAggregatesInput | CardSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardSet"> | string
    name?: StringNullableWithAggregatesFilter<"CardSet"> | string | null
    series?: StringNullableWithAggregatesFilter<"CardSet"> | string | null
    printedTotal?: IntNullableWithAggregatesFilter<"CardSet"> | number | null
    total?: IntNullableWithAggregatesFilter<"CardSet"> | number | null
    ptcgoCode?: StringNullableWithAggregatesFilter<"CardSet"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"CardSet"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"CardSet"> | Date | string | null
    symbol?: StringNullableWithAggregatesFilter<"CardSet"> | string | null
    logo?: StringNullableWithAggregatesFilter<"CardSet"> | string | null
  }

  export type SetLegalitiesWhereInput = {
    AND?: SetLegalitiesWhereInput | SetLegalitiesWhereInput[]
    OR?: SetLegalitiesWhereInput[]
    NOT?: SetLegalitiesWhereInput | SetLegalitiesWhereInput[]
    id?: StringFilter<"SetLegalities"> | string
    setId?: StringFilter<"SetLegalities"> | string
    unlimited?: StringNullableFilter<"SetLegalities"> | string | null
    standard?: StringNullableFilter<"SetLegalities"> | string | null
    expanded?: StringNullableFilter<"SetLegalities"> | string | null
    set?: XOR<CardSetScalarRelationFilter, CardSetWhereInput>
  }

  export type SetLegalitiesOrderByWithRelationInput = {
    id?: SortOrder
    setId?: SortOrder
    unlimited?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    expanded?: SortOrderInput | SortOrder
    set?: CardSetOrderByWithRelationInput
  }

  export type SetLegalitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    setId?: string
    AND?: SetLegalitiesWhereInput | SetLegalitiesWhereInput[]
    OR?: SetLegalitiesWhereInput[]
    NOT?: SetLegalitiesWhereInput | SetLegalitiesWhereInput[]
    unlimited?: StringNullableFilter<"SetLegalities"> | string | null
    standard?: StringNullableFilter<"SetLegalities"> | string | null
    expanded?: StringNullableFilter<"SetLegalities"> | string | null
    set?: XOR<CardSetScalarRelationFilter, CardSetWhereInput>
  }, "id" | "setId">

  export type SetLegalitiesOrderByWithAggregationInput = {
    id?: SortOrder
    setId?: SortOrder
    unlimited?: SortOrderInput | SortOrder
    standard?: SortOrderInput | SortOrder
    expanded?: SortOrderInput | SortOrder
    _count?: SetLegalitiesCountOrderByAggregateInput
    _max?: SetLegalitiesMaxOrderByAggregateInput
    _min?: SetLegalitiesMinOrderByAggregateInput
  }

  export type SetLegalitiesScalarWhereWithAggregatesInput = {
    AND?: SetLegalitiesScalarWhereWithAggregatesInput | SetLegalitiesScalarWhereWithAggregatesInput[]
    OR?: SetLegalitiesScalarWhereWithAggregatesInput[]
    NOT?: SetLegalitiesScalarWhereWithAggregatesInput | SetLegalitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetLegalities"> | string
    setId?: StringWithAggregatesFilter<"SetLegalities"> | string
    unlimited?: StringNullableWithAggregatesFilter<"SetLegalities"> | string | null
    standard?: StringNullableWithAggregatesFilter<"SetLegalities"> | string | null
    expanded?: StringNullableWithAggregatesFilter<"SetLegalities"> | string | null
  }

  export type ImportMetadataWhereInput = {
    AND?: ImportMetadataWhereInput | ImportMetadataWhereInput[]
    OR?: ImportMetadataWhereInput[]
    NOT?: ImportMetadataWhereInput | ImportMetadataWhereInput[]
    id?: StringFilter<"ImportMetadata"> | string
    totalCount?: IntNullableFilter<"ImportMetadata"> | number | null
    importedAt?: DateTimeNullableFilter<"ImportMetadata"> | Date | string | null
    isFullImport?: IntNullableFilter<"ImportMetadata"> | number | null
  }

  export type ImportMetadataOrderByWithRelationInput = {
    id?: SortOrder
    totalCount?: SortOrderInput | SortOrder
    importedAt?: SortOrderInput | SortOrder
    isFullImport?: SortOrderInput | SortOrder
  }

  export type ImportMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportMetadataWhereInput | ImportMetadataWhereInput[]
    OR?: ImportMetadataWhereInput[]
    NOT?: ImportMetadataWhereInput | ImportMetadataWhereInput[]
    totalCount?: IntNullableFilter<"ImportMetadata"> | number | null
    importedAt?: DateTimeNullableFilter<"ImportMetadata"> | Date | string | null
    isFullImport?: IntNullableFilter<"ImportMetadata"> | number | null
  }, "id">

  export type ImportMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    totalCount?: SortOrderInput | SortOrder
    importedAt?: SortOrderInput | SortOrder
    isFullImport?: SortOrderInput | SortOrder
    _count?: ImportMetadataCountOrderByAggregateInput
    _avg?: ImportMetadataAvgOrderByAggregateInput
    _max?: ImportMetadataMaxOrderByAggregateInput
    _min?: ImportMetadataMinOrderByAggregateInput
    _sum?: ImportMetadataSumOrderByAggregateInput
  }

  export type ImportMetadataScalarWhereWithAggregatesInput = {
    AND?: ImportMetadataScalarWhereWithAggregatesInput | ImportMetadataScalarWhereWithAggregatesInput[]
    OR?: ImportMetadataScalarWhereWithAggregatesInput[]
    NOT?: ImportMetadataScalarWhereWithAggregatesInput | ImportMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportMetadata"> | string
    totalCount?: IntNullableWithAggregatesFilter<"ImportMetadata"> | number | null
    importedAt?: DateTimeNullableWithAggregatesFilter<"ImportMetadata"> | Date | string | null
    isFullImport?: IntNullableWithAggregatesFilter<"ImportMetadata"> | number | null
  }

  export type CardCreateInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AbilityCreateInput = {
    id: string
    name?: string | null
    text?: string | null
    type?: string | null
    card: CardCreateNestedOneWithoutAbilitiesInput
  }

  export type AbilityUncheckedCreateInput = {
    id: string
    cardId: string
    name?: string | null
    text?: string | null
    type?: string | null
  }

  export type AbilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutAbilitiesNestedInput
  }

  export type AbilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbilityCreateManyInput = {
    id: string
    cardId: string
    name?: string | null
    text?: string | null
    type?: string | null
  }

  export type AbilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackCreateInput = {
    id: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
    card: CardCreateNestedOneWithoutAttacksInput
  }

  export type AttackUncheckedCreateInput = {
    id: string
    cardId: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
  }

  export type AttackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutAttacksNestedInput
  }

  export type AttackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackCreateManyInput = {
    id: string
    cardId: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
  }

  export type AttackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessCreateInput = {
    id: string
    type?: string | null
    value?: string | null
    card: CardCreateNestedOneWithoutWeaknessesInput
  }

  export type WeaknessUncheckedCreateInput = {
    id: string
    cardId: string
    type?: string | null
    value?: string | null
  }

  export type WeaknessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutWeaknessesNestedInput
  }

  export type WeaknessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessCreateManyInput = {
    id: string
    cardId: string
    type?: string | null
    value?: string | null
  }

  export type WeaknessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceCreateInput = {
    id: string
    type?: string | null
    value?: string | null
    card: CardCreateNestedOneWithoutResistancesInput
  }

  export type ResistanceUncheckedCreateInput = {
    id: string
    cardId: string
    type?: string | null
    value?: string | null
  }

  export type ResistanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutResistancesNestedInput
  }

  export type ResistanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceCreateManyInput = {
    id: string
    cardId: string
    type?: string | null
    value?: string | null
  }

  export type ResistanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardLegalitiesCreateInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
    card: CardCreateNestedOneWithoutLegalitiesInput
  }

  export type CardLegalitiesUncheckedCreateInput = {
    id: string
    cardId: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type CardLegalitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutLegalitiesNestedInput
  }

  export type CardLegalitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardLegalitiesCreateManyInput = {
    id: string
    cardId: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type CardLegalitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardLegalitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardImagesCreateInput = {
    id: string
    small?: string | null
    large?: string | null
    card: CardCreateNestedOneWithoutImagesInput
  }

  export type CardImagesUncheckedCreateInput = {
    id: string
    cardId: string
    small?: string | null
    large?: string | null
  }

  export type CardImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutImagesNestedInput
  }

  export type CardImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardImagesCreateManyInput = {
    id: string
    cardId: string
    small?: string | null
    large?: string | null
  }

  export type CardImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardMarketCreateInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    averageSellPrice?: number | null
    lowPrice?: number | null
    trendPrice?: number | null
    germanProLow?: number | null
    suggestedPrice?: number | null
    reverseHoloSell?: number | null
    reverseHoloLow?: number | null
    reverseHoloTrend?: number | null
    lowPriceExPlus?: number | null
    avg1?: number | null
    avg7?: number | null
    avg30?: number | null
    reverseHoloAvg1?: number | null
    reverseHoloAvg7?: number | null
    reverseHoloAvg30?: number | null
    card: CardCreateNestedOneWithoutCardmarketInput
  }

  export type CardMarketUncheckedCreateInput = {
    id: string
    cardId: string
    url?: string | null
    updatedAt?: Date | string | null
    averageSellPrice?: number | null
    lowPrice?: number | null
    trendPrice?: number | null
    germanProLow?: number | null
    suggestedPrice?: number | null
    reverseHoloSell?: number | null
    reverseHoloLow?: number | null
    reverseHoloTrend?: number | null
    lowPriceExPlus?: number | null
    avg1?: number | null
    avg7?: number | null
    avg30?: number | null
    reverseHoloAvg1?: number | null
    reverseHoloAvg7?: number | null
    reverseHoloAvg30?: number | null
  }

  export type CardMarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
    card?: CardUpdateOneRequiredWithoutCardmarketNestedInput
  }

  export type CardMarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CardMarketCreateManyInput = {
    id: string
    cardId: string
    url?: string | null
    updatedAt?: Date | string | null
    averageSellPrice?: number | null
    lowPrice?: number | null
    trendPrice?: number | null
    germanProLow?: number | null
    suggestedPrice?: number | null
    reverseHoloSell?: number | null
    reverseHoloLow?: number | null
    reverseHoloTrend?: number | null
    lowPriceExPlus?: number | null
    avg1?: number | null
    avg7?: number | null
    avg30?: number | null
    reverseHoloAvg1?: number | null
    reverseHoloAvg7?: number | null
    reverseHoloAvg30?: number | null
  }

  export type CardMarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CardMarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TcgPlayerPricesCreateInput = {
    id: string
    normalLow?: number | null
    normalMid?: number | null
    normalHigh?: number | null
    normalMarket?: number | null
    normalDirectLow?: number | null
    holofoilLow?: number | null
    holofoilMid?: number | null
    holofoilHigh?: number | null
    holofoilMarket?: number | null
    holofoilDirectLow?: number | null
    reverseHolofoilLow?: number | null
    reverseHolofoilMid?: number | null
    reverseHolofoilHigh?: number | null
    reverseHolofoilMarket?: number | null
    reverseHolofoilDirectLow?: number | null
    tcgplayer?: TcgPlayerCreateNestedOneWithoutPricesInput
  }

  export type TcgPlayerPricesUncheckedCreateInput = {
    id: string
    normalLow?: number | null
    normalMid?: number | null
    normalHigh?: number | null
    normalMarket?: number | null
    normalDirectLow?: number | null
    holofoilLow?: number | null
    holofoilMid?: number | null
    holofoilHigh?: number | null
    holofoilMarket?: number | null
    holofoilDirectLow?: number | null
    reverseHolofoilLow?: number | null
    reverseHolofoilMid?: number | null
    reverseHolofoilHigh?: number | null
    reverseHolofoilMarket?: number | null
    reverseHolofoilDirectLow?: number | null
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutPricesInput
  }

  export type TcgPlayerPricesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    tcgplayer?: TcgPlayerUpdateOneWithoutPricesNestedInput
  }

  export type TcgPlayerPricesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutPricesNestedInput
  }

  export type TcgPlayerPricesCreateManyInput = {
    id: string
    normalLow?: number | null
    normalMid?: number | null
    normalHigh?: number | null
    normalMarket?: number | null
    normalDirectLow?: number | null
    holofoilLow?: number | null
    holofoilMid?: number | null
    holofoilHigh?: number | null
    holofoilMarket?: number | null
    holofoilDirectLow?: number | null
    reverseHolofoilLow?: number | null
    reverseHolofoilMid?: number | null
    reverseHolofoilHigh?: number | null
    reverseHolofoilMarket?: number | null
    reverseHolofoilDirectLow?: number | null
  }

  export type TcgPlayerPricesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TcgPlayerPricesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TcgPlayerCreateInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    card: CardCreateNestedOneWithoutTcgplayerInput
    prices: TcgPlayerPricesCreateNestedOneWithoutTcgplayerInput
  }

  export type TcgPlayerUncheckedCreateInput = {
    id: string
    cardId: string
    url?: string | null
    updatedAt?: Date | string | null
    pricesId: string
  }

  export type TcgPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card?: CardUpdateOneRequiredWithoutTcgplayerNestedInput
    prices?: TcgPlayerPricesUpdateOneRequiredWithoutTcgplayerNestedInput
  }

  export type TcgPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pricesId?: StringFieldUpdateOperationsInput | string
  }

  export type TcgPlayerCreateManyInput = {
    id: string
    cardId: string
    url?: string | null
    updatedAt?: Date | string | null
    pricesId: string
  }

  export type TcgPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TcgPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pricesId?: StringFieldUpdateOperationsInput | string
  }

  export type CardSetCreateInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    cards?: CardCreateNestedManyWithoutSetInput
    legalities?: SetLegalitiesCreateNestedOneWithoutSetInput
  }

  export type CardSetUncheckedCreateInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    cards?: CardUncheckedCreateNestedManyWithoutSetInput
    legalities?: SetLegalitiesUncheckedCreateNestedOneWithoutSetInput
  }

  export type CardSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cards?: CardUpdateManyWithoutSetNestedInput
    legalities?: SetLegalitiesUpdateOneWithoutSetNestedInput
  }

  export type CardSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cards?: CardUncheckedUpdateManyWithoutSetNestedInput
    legalities?: SetLegalitiesUncheckedUpdateOneWithoutSetNestedInput
  }

  export type CardSetCreateManyInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
  }

  export type CardSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetLegalitiesCreateInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
    set: CardSetCreateNestedOneWithoutLegalitiesInput
  }

  export type SetLegalitiesUncheckedCreateInput = {
    id: string
    setId: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type SetLegalitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
    set?: CardSetUpdateOneRequiredWithoutLegalitiesNestedInput
  }

  export type SetLegalitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setId?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetLegalitiesCreateManyInput = {
    id: string
    setId: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type SetLegalitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetLegalitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    setId?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportMetadataCreateInput = {
    id: string
    totalCount?: number | null
    importedAt?: Date | string | null
    isFullImport?: number | null
  }

  export type ImportMetadataUncheckedCreateInput = {
    id: string
    totalCount?: number | null
    importedAt?: Date | string | null
    isFullImport?: number | null
  }

  export type ImportMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: NullableIntFieldUpdateOperationsInput | number | null
    importedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFullImport?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImportMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: NullableIntFieldUpdateOperationsInput | number | null
    importedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFullImport?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImportMetadataCreateManyInput = {
    id: string
    totalCount?: number | null
    importedAt?: Date | string | null
    isFullImport?: number | null
  }

  export type ImportMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: NullableIntFieldUpdateOperationsInput | number | null
    importedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFullImport?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImportMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCount?: NullableIntFieldUpdateOperationsInput | number | null
    importedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFullImport?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type AbilityListRelationFilter = {
    every?: AbilityWhereInput
    some?: AbilityWhereInput
    none?: AbilityWhereInput
  }

  export type AttackListRelationFilter = {
    every?: AttackWhereInput
    some?: AttackWhereInput
    none?: AttackWhereInput
  }

  export type WeaknessListRelationFilter = {
    every?: WeaknessWhereInput
    some?: WeaknessWhereInput
    none?: WeaknessWhereInput
  }

  export type ResistanceListRelationFilter = {
    every?: ResistanceWhereInput
    some?: ResistanceWhereInput
    none?: ResistanceWhereInput
  }

  export type CardLegalitiesNullableScalarRelationFilter = {
    is?: CardLegalitiesWhereInput | null
    isNot?: CardLegalitiesWhereInput | null
  }

  export type CardImagesNullableScalarRelationFilter = {
    is?: CardImagesWhereInput | null
    isNot?: CardImagesWhereInput | null
  }

  export type CardMarketNullableScalarRelationFilter = {
    is?: CardMarketWhereInput | null
    isNot?: CardMarketWhereInput | null
  }

  export type TcgPlayerNullableScalarRelationFilter = {
    is?: TcgPlayerWhereInput | null
    isNot?: TcgPlayerWhereInput | null
  }

  export type CardSetNullableScalarRelationFilter = {
    is?: CardSetWhereInput | null
    isNot?: CardSetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AbilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeaknessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResistanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supertype?: SortOrder
    subtypes?: SortOrder
    level?: SortOrder
    hp?: SortOrder
    types?: SortOrder
    evolvesFrom?: SortOrder
    evolvesTo?: SortOrder
    rules?: SortOrder
    flavorText?: SortOrder
    artist?: SortOrder
    rarity?: SortOrder
    number?: SortOrder
    nationalPokedexNumbers?: SortOrder
    setId?: SortOrder
    retreatCost?: SortOrder
    convertedRetreatCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    nationalPokedexNumbers?: SortOrder
    convertedRetreatCost?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supertype?: SortOrder
    level?: SortOrder
    hp?: SortOrder
    evolvesFrom?: SortOrder
    flavorText?: SortOrder
    artist?: SortOrder
    rarity?: SortOrder
    number?: SortOrder
    setId?: SortOrder
    convertedRetreatCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    supertype?: SortOrder
    level?: SortOrder
    hp?: SortOrder
    evolvesFrom?: SortOrder
    flavorText?: SortOrder
    artist?: SortOrder
    rarity?: SortOrder
    number?: SortOrder
    setId?: SortOrder
    convertedRetreatCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    nationalPokedexNumbers?: SortOrder
    convertedRetreatCost?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type AbilityCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    type?: SortOrder
  }

  export type AbilityMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    type?: SortOrder
  }

  export type AbilityMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    type?: SortOrder
  }

  export type AttackCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    convertedEnergyCost?: SortOrder
    damage?: SortOrder
    text?: SortOrder
  }

  export type AttackAvgOrderByAggregateInput = {
    convertedEnergyCost?: SortOrder
  }

  export type AttackMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    convertedEnergyCost?: SortOrder
    damage?: SortOrder
    text?: SortOrder
  }

  export type AttackMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    name?: SortOrder
    convertedEnergyCost?: SortOrder
    damage?: SortOrder
    text?: SortOrder
  }

  export type AttackSumOrderByAggregateInput = {
    convertedEnergyCost?: SortOrder
  }

  export type WeaknessCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type WeaknessMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type WeaknessMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type ResistanceCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type ResistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type ResistanceMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type CardLegalitiesCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type CardLegalitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type CardLegalitiesMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type CardImagesCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type CardImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type CardImagesMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CardMarketCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    averageSellPrice?: SortOrder
    lowPrice?: SortOrder
    trendPrice?: SortOrder
    germanProLow?: SortOrder
    suggestedPrice?: SortOrder
    reverseHoloSell?: SortOrder
    reverseHoloLow?: SortOrder
    reverseHoloTrend?: SortOrder
    lowPriceExPlus?: SortOrder
    avg1?: SortOrder
    avg7?: SortOrder
    avg30?: SortOrder
    reverseHoloAvg1?: SortOrder
    reverseHoloAvg7?: SortOrder
    reverseHoloAvg30?: SortOrder
  }

  export type CardMarketAvgOrderByAggregateInput = {
    averageSellPrice?: SortOrder
    lowPrice?: SortOrder
    trendPrice?: SortOrder
    germanProLow?: SortOrder
    suggestedPrice?: SortOrder
    reverseHoloSell?: SortOrder
    reverseHoloLow?: SortOrder
    reverseHoloTrend?: SortOrder
    lowPriceExPlus?: SortOrder
    avg1?: SortOrder
    avg7?: SortOrder
    avg30?: SortOrder
    reverseHoloAvg1?: SortOrder
    reverseHoloAvg7?: SortOrder
    reverseHoloAvg30?: SortOrder
  }

  export type CardMarketMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    averageSellPrice?: SortOrder
    lowPrice?: SortOrder
    trendPrice?: SortOrder
    germanProLow?: SortOrder
    suggestedPrice?: SortOrder
    reverseHoloSell?: SortOrder
    reverseHoloLow?: SortOrder
    reverseHoloTrend?: SortOrder
    lowPriceExPlus?: SortOrder
    avg1?: SortOrder
    avg7?: SortOrder
    avg30?: SortOrder
    reverseHoloAvg1?: SortOrder
    reverseHoloAvg7?: SortOrder
    reverseHoloAvg30?: SortOrder
  }

  export type CardMarketMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    averageSellPrice?: SortOrder
    lowPrice?: SortOrder
    trendPrice?: SortOrder
    germanProLow?: SortOrder
    suggestedPrice?: SortOrder
    reverseHoloSell?: SortOrder
    reverseHoloLow?: SortOrder
    reverseHoloTrend?: SortOrder
    lowPriceExPlus?: SortOrder
    avg1?: SortOrder
    avg7?: SortOrder
    avg30?: SortOrder
    reverseHoloAvg1?: SortOrder
    reverseHoloAvg7?: SortOrder
    reverseHoloAvg30?: SortOrder
  }

  export type CardMarketSumOrderByAggregateInput = {
    averageSellPrice?: SortOrder
    lowPrice?: SortOrder
    trendPrice?: SortOrder
    germanProLow?: SortOrder
    suggestedPrice?: SortOrder
    reverseHoloSell?: SortOrder
    reverseHoloLow?: SortOrder
    reverseHoloTrend?: SortOrder
    lowPriceExPlus?: SortOrder
    avg1?: SortOrder
    avg7?: SortOrder
    avg30?: SortOrder
    reverseHoloAvg1?: SortOrder
    reverseHoloAvg7?: SortOrder
    reverseHoloAvg30?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TcgPlayerPricesCountOrderByAggregateInput = {
    id?: SortOrder
    normalLow?: SortOrder
    normalMid?: SortOrder
    normalHigh?: SortOrder
    normalMarket?: SortOrder
    normalDirectLow?: SortOrder
    holofoilLow?: SortOrder
    holofoilMid?: SortOrder
    holofoilHigh?: SortOrder
    holofoilMarket?: SortOrder
    holofoilDirectLow?: SortOrder
    reverseHolofoilLow?: SortOrder
    reverseHolofoilMid?: SortOrder
    reverseHolofoilHigh?: SortOrder
    reverseHolofoilMarket?: SortOrder
    reverseHolofoilDirectLow?: SortOrder
  }

  export type TcgPlayerPricesAvgOrderByAggregateInput = {
    normalLow?: SortOrder
    normalMid?: SortOrder
    normalHigh?: SortOrder
    normalMarket?: SortOrder
    normalDirectLow?: SortOrder
    holofoilLow?: SortOrder
    holofoilMid?: SortOrder
    holofoilHigh?: SortOrder
    holofoilMarket?: SortOrder
    holofoilDirectLow?: SortOrder
    reverseHolofoilLow?: SortOrder
    reverseHolofoilMid?: SortOrder
    reverseHolofoilHigh?: SortOrder
    reverseHolofoilMarket?: SortOrder
    reverseHolofoilDirectLow?: SortOrder
  }

  export type TcgPlayerPricesMaxOrderByAggregateInput = {
    id?: SortOrder
    normalLow?: SortOrder
    normalMid?: SortOrder
    normalHigh?: SortOrder
    normalMarket?: SortOrder
    normalDirectLow?: SortOrder
    holofoilLow?: SortOrder
    holofoilMid?: SortOrder
    holofoilHigh?: SortOrder
    holofoilMarket?: SortOrder
    holofoilDirectLow?: SortOrder
    reverseHolofoilLow?: SortOrder
    reverseHolofoilMid?: SortOrder
    reverseHolofoilHigh?: SortOrder
    reverseHolofoilMarket?: SortOrder
    reverseHolofoilDirectLow?: SortOrder
  }

  export type TcgPlayerPricesMinOrderByAggregateInput = {
    id?: SortOrder
    normalLow?: SortOrder
    normalMid?: SortOrder
    normalHigh?: SortOrder
    normalMarket?: SortOrder
    normalDirectLow?: SortOrder
    holofoilLow?: SortOrder
    holofoilMid?: SortOrder
    holofoilHigh?: SortOrder
    holofoilMarket?: SortOrder
    holofoilDirectLow?: SortOrder
    reverseHolofoilLow?: SortOrder
    reverseHolofoilMid?: SortOrder
    reverseHolofoilHigh?: SortOrder
    reverseHolofoilMarket?: SortOrder
    reverseHolofoilDirectLow?: SortOrder
  }

  export type TcgPlayerPricesSumOrderByAggregateInput = {
    normalLow?: SortOrder
    normalMid?: SortOrder
    normalHigh?: SortOrder
    normalMarket?: SortOrder
    normalDirectLow?: SortOrder
    holofoilLow?: SortOrder
    holofoilMid?: SortOrder
    holofoilHigh?: SortOrder
    holofoilMarket?: SortOrder
    holofoilDirectLow?: SortOrder
    reverseHolofoilLow?: SortOrder
    reverseHolofoilMid?: SortOrder
    reverseHolofoilHigh?: SortOrder
    reverseHolofoilMarket?: SortOrder
    reverseHolofoilDirectLow?: SortOrder
  }

  export type TcgPlayerPricesScalarRelationFilter = {
    is?: TcgPlayerPricesWhereInput
    isNot?: TcgPlayerPricesWhereInput
  }

  export type TcgPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    pricesId?: SortOrder
  }

  export type TcgPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    pricesId?: SortOrder
  }

  export type TcgPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    url?: SortOrder
    updatedAt?: SortOrder
    pricesId?: SortOrder
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type SetLegalitiesNullableScalarRelationFilter = {
    is?: SetLegalitiesWhereInput | null
    isNot?: SetLegalitiesWhereInput | null
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardSetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    series?: SortOrder
    printedTotal?: SortOrder
    total?: SortOrder
    ptcgoCode?: SortOrder
    releaseDate?: SortOrder
    updatedAt?: SortOrder
    symbol?: SortOrder
    logo?: SortOrder
  }

  export type CardSetAvgOrderByAggregateInput = {
    printedTotal?: SortOrder
    total?: SortOrder
  }

  export type CardSetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    series?: SortOrder
    printedTotal?: SortOrder
    total?: SortOrder
    ptcgoCode?: SortOrder
    releaseDate?: SortOrder
    updatedAt?: SortOrder
    symbol?: SortOrder
    logo?: SortOrder
  }

  export type CardSetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    series?: SortOrder
    printedTotal?: SortOrder
    total?: SortOrder
    ptcgoCode?: SortOrder
    releaseDate?: SortOrder
    updatedAt?: SortOrder
    symbol?: SortOrder
    logo?: SortOrder
  }

  export type CardSetSumOrderByAggregateInput = {
    printedTotal?: SortOrder
    total?: SortOrder
  }

  export type CardSetScalarRelationFilter = {
    is?: CardSetWhereInput
    isNot?: CardSetWhereInput
  }

  export type SetLegalitiesCountOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type SetLegalitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type SetLegalitiesMinOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    unlimited?: SortOrder
    standard?: SortOrder
    expanded?: SortOrder
  }

  export type ImportMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    importedAt?: SortOrder
    isFullImport?: SortOrder
  }

  export type ImportMetadataAvgOrderByAggregateInput = {
    totalCount?: SortOrder
    isFullImport?: SortOrder
  }

  export type ImportMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    importedAt?: SortOrder
    isFullImport?: SortOrder
  }

  export type ImportMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    importedAt?: SortOrder
    isFullImport?: SortOrder
  }

  export type ImportMetadataSumOrderByAggregateInput = {
    totalCount?: SortOrder
    isFullImport?: SortOrder
  }

  export type CardCreatesubtypesInput = {
    set: string[]
  }

  export type CardCreatetypesInput = {
    set: string[]
  }

  export type CardCreateevolvesToInput = {
    set: string[]
  }

  export type CardCreaterulesInput = {
    set: string[]
  }

  export type CardCreatenationalPokedexNumbersInput = {
    set: number[]
  }

  export type CardCreateretreatCostInput = {
    set: string[]
  }

  export type AbilityCreateNestedManyWithoutCardInput = {
    create?: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput> | AbilityCreateWithoutCardInput[] | AbilityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCardInput | AbilityCreateOrConnectWithoutCardInput[]
    createMany?: AbilityCreateManyCardInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type AttackCreateNestedManyWithoutCardInput = {
    create?: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput> | AttackCreateWithoutCardInput[] | AttackUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AttackCreateOrConnectWithoutCardInput | AttackCreateOrConnectWithoutCardInput[]
    createMany?: AttackCreateManyCardInputEnvelope
    connect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
  }

  export type WeaknessCreateNestedManyWithoutCardInput = {
    create?: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput> | WeaknessCreateWithoutCardInput[] | WeaknessUncheckedCreateWithoutCardInput[]
    connectOrCreate?: WeaknessCreateOrConnectWithoutCardInput | WeaknessCreateOrConnectWithoutCardInput[]
    createMany?: WeaknessCreateManyCardInputEnvelope
    connect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
  }

  export type ResistanceCreateNestedManyWithoutCardInput = {
    create?: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput> | ResistanceCreateWithoutCardInput[] | ResistanceUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ResistanceCreateOrConnectWithoutCardInput | ResistanceCreateOrConnectWithoutCardInput[]
    createMany?: ResistanceCreateManyCardInputEnvelope
    connect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
  }

  export type CardLegalitiesCreateNestedOneWithoutCardInput = {
    create?: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardLegalitiesCreateOrConnectWithoutCardInput
    connect?: CardLegalitiesWhereUniqueInput
  }

  export type CardImagesCreateNestedOneWithoutCardInput = {
    create?: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardImagesCreateOrConnectWithoutCardInput
    connect?: CardImagesWhereUniqueInput
  }

  export type CardMarketCreateNestedOneWithoutCardInput = {
    create?: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardMarketCreateOrConnectWithoutCardInput
    connect?: CardMarketWhereUniqueInput
  }

  export type TcgPlayerCreateNestedOneWithoutCardInput = {
    create?: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutCardInput
    connect?: TcgPlayerWhereUniqueInput
  }

  export type CardSetCreateNestedOneWithoutCardsInput = {
    create?: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutCardsInput
    connect?: CardSetWhereUniqueInput
  }

  export type AbilityUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput> | AbilityCreateWithoutCardInput[] | AbilityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCardInput | AbilityCreateOrConnectWithoutCardInput[]
    createMany?: AbilityCreateManyCardInputEnvelope
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
  }

  export type AttackUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput> | AttackCreateWithoutCardInput[] | AttackUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AttackCreateOrConnectWithoutCardInput | AttackCreateOrConnectWithoutCardInput[]
    createMany?: AttackCreateManyCardInputEnvelope
    connect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
  }

  export type WeaknessUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput> | WeaknessCreateWithoutCardInput[] | WeaknessUncheckedCreateWithoutCardInput[]
    connectOrCreate?: WeaknessCreateOrConnectWithoutCardInput | WeaknessCreateOrConnectWithoutCardInput[]
    createMany?: WeaknessCreateManyCardInputEnvelope
    connect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
  }

  export type ResistanceUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput> | ResistanceCreateWithoutCardInput[] | ResistanceUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ResistanceCreateOrConnectWithoutCardInput | ResistanceCreateOrConnectWithoutCardInput[]
    createMany?: ResistanceCreateManyCardInputEnvelope
    connect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
  }

  export type CardLegalitiesUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardLegalitiesCreateOrConnectWithoutCardInput
    connect?: CardLegalitiesWhereUniqueInput
  }

  export type CardImagesUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardImagesCreateOrConnectWithoutCardInput
    connect?: CardImagesWhereUniqueInput
  }

  export type CardMarketUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardMarketCreateOrConnectWithoutCardInput
    connect?: CardMarketWhereUniqueInput
  }

  export type TcgPlayerUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutCardInput
    connect?: TcgPlayerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CardUpdatesubtypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdatetypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdateevolvesToInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdaterulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdatenationalPokedexNumbersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type CardUpdateretreatCostInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AbilityUpdateManyWithoutCardNestedInput = {
    create?: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput> | AbilityCreateWithoutCardInput[] | AbilityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCardInput | AbilityCreateOrConnectWithoutCardInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutCardInput | AbilityUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AbilityCreateManyCardInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutCardInput | AbilityUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutCardInput | AbilityUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type AttackUpdateManyWithoutCardNestedInput = {
    create?: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput> | AttackCreateWithoutCardInput[] | AttackUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AttackCreateOrConnectWithoutCardInput | AttackCreateOrConnectWithoutCardInput[]
    upsert?: AttackUpsertWithWhereUniqueWithoutCardInput | AttackUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AttackCreateManyCardInputEnvelope
    set?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    disconnect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    delete?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    connect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    update?: AttackUpdateWithWhereUniqueWithoutCardInput | AttackUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AttackUpdateManyWithWhereWithoutCardInput | AttackUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AttackScalarWhereInput | AttackScalarWhereInput[]
  }

  export type WeaknessUpdateManyWithoutCardNestedInput = {
    create?: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput> | WeaknessCreateWithoutCardInput[] | WeaknessUncheckedCreateWithoutCardInput[]
    connectOrCreate?: WeaknessCreateOrConnectWithoutCardInput | WeaknessCreateOrConnectWithoutCardInput[]
    upsert?: WeaknessUpsertWithWhereUniqueWithoutCardInput | WeaknessUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: WeaknessCreateManyCardInputEnvelope
    set?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    disconnect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    delete?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    connect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    update?: WeaknessUpdateWithWhereUniqueWithoutCardInput | WeaknessUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: WeaknessUpdateManyWithWhereWithoutCardInput | WeaknessUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: WeaknessScalarWhereInput | WeaknessScalarWhereInput[]
  }

  export type ResistanceUpdateManyWithoutCardNestedInput = {
    create?: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput> | ResistanceCreateWithoutCardInput[] | ResistanceUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ResistanceCreateOrConnectWithoutCardInput | ResistanceCreateOrConnectWithoutCardInput[]
    upsert?: ResistanceUpsertWithWhereUniqueWithoutCardInput | ResistanceUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ResistanceCreateManyCardInputEnvelope
    set?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    disconnect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    delete?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    connect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    update?: ResistanceUpdateWithWhereUniqueWithoutCardInput | ResistanceUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ResistanceUpdateManyWithWhereWithoutCardInput | ResistanceUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ResistanceScalarWhereInput | ResistanceScalarWhereInput[]
  }

  export type CardLegalitiesUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardLegalitiesCreateOrConnectWithoutCardInput
    upsert?: CardLegalitiesUpsertWithoutCardInput
    disconnect?: CardLegalitiesWhereInput | boolean
    delete?: CardLegalitiesWhereInput | boolean
    connect?: CardLegalitiesWhereUniqueInput
    update?: XOR<XOR<CardLegalitiesUpdateToOneWithWhereWithoutCardInput, CardLegalitiesUpdateWithoutCardInput>, CardLegalitiesUncheckedUpdateWithoutCardInput>
  }

  export type CardImagesUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardImagesCreateOrConnectWithoutCardInput
    upsert?: CardImagesUpsertWithoutCardInput
    disconnect?: CardImagesWhereInput | boolean
    delete?: CardImagesWhereInput | boolean
    connect?: CardImagesWhereUniqueInput
    update?: XOR<XOR<CardImagesUpdateToOneWithWhereWithoutCardInput, CardImagesUpdateWithoutCardInput>, CardImagesUncheckedUpdateWithoutCardInput>
  }

  export type CardMarketUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardMarketCreateOrConnectWithoutCardInput
    upsert?: CardMarketUpsertWithoutCardInput
    disconnect?: CardMarketWhereInput | boolean
    delete?: CardMarketWhereInput | boolean
    connect?: CardMarketWhereUniqueInput
    update?: XOR<XOR<CardMarketUpdateToOneWithWhereWithoutCardInput, CardMarketUpdateWithoutCardInput>, CardMarketUncheckedUpdateWithoutCardInput>
  }

  export type TcgPlayerUpdateOneWithoutCardNestedInput = {
    create?: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutCardInput
    upsert?: TcgPlayerUpsertWithoutCardInput
    disconnect?: TcgPlayerWhereInput | boolean
    delete?: TcgPlayerWhereInput | boolean
    connect?: TcgPlayerWhereUniqueInput
    update?: XOR<XOR<TcgPlayerUpdateToOneWithWhereWithoutCardInput, TcgPlayerUpdateWithoutCardInput>, TcgPlayerUncheckedUpdateWithoutCardInput>
  }

  export type CardSetUpdateOneWithoutCardsNestedInput = {
    create?: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutCardsInput
    upsert?: CardSetUpsertWithoutCardsInput
    disconnect?: CardSetWhereInput | boolean
    delete?: CardSetWhereInput | boolean
    connect?: CardSetWhereUniqueInput
    update?: XOR<XOR<CardSetUpdateToOneWithWhereWithoutCardsInput, CardSetUpdateWithoutCardsInput>, CardSetUncheckedUpdateWithoutCardsInput>
  }

  export type AbilityUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput> | AbilityCreateWithoutCardInput[] | AbilityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AbilityCreateOrConnectWithoutCardInput | AbilityCreateOrConnectWithoutCardInput[]
    upsert?: AbilityUpsertWithWhereUniqueWithoutCardInput | AbilityUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AbilityCreateManyCardInputEnvelope
    set?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    disconnect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    delete?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    connect?: AbilityWhereUniqueInput | AbilityWhereUniqueInput[]
    update?: AbilityUpdateWithWhereUniqueWithoutCardInput | AbilityUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AbilityUpdateManyWithWhereWithoutCardInput | AbilityUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
  }

  export type AttackUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput> | AttackCreateWithoutCardInput[] | AttackUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AttackCreateOrConnectWithoutCardInput | AttackCreateOrConnectWithoutCardInput[]
    upsert?: AttackUpsertWithWhereUniqueWithoutCardInput | AttackUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AttackCreateManyCardInputEnvelope
    set?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    disconnect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    delete?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    connect?: AttackWhereUniqueInput | AttackWhereUniqueInput[]
    update?: AttackUpdateWithWhereUniqueWithoutCardInput | AttackUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AttackUpdateManyWithWhereWithoutCardInput | AttackUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AttackScalarWhereInput | AttackScalarWhereInput[]
  }

  export type WeaknessUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput> | WeaknessCreateWithoutCardInput[] | WeaknessUncheckedCreateWithoutCardInput[]
    connectOrCreate?: WeaknessCreateOrConnectWithoutCardInput | WeaknessCreateOrConnectWithoutCardInput[]
    upsert?: WeaknessUpsertWithWhereUniqueWithoutCardInput | WeaknessUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: WeaknessCreateManyCardInputEnvelope
    set?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    disconnect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    delete?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    connect?: WeaknessWhereUniqueInput | WeaknessWhereUniqueInput[]
    update?: WeaknessUpdateWithWhereUniqueWithoutCardInput | WeaknessUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: WeaknessUpdateManyWithWhereWithoutCardInput | WeaknessUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: WeaknessScalarWhereInput | WeaknessScalarWhereInput[]
  }

  export type ResistanceUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput> | ResistanceCreateWithoutCardInput[] | ResistanceUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ResistanceCreateOrConnectWithoutCardInput | ResistanceCreateOrConnectWithoutCardInput[]
    upsert?: ResistanceUpsertWithWhereUniqueWithoutCardInput | ResistanceUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ResistanceCreateManyCardInputEnvelope
    set?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    disconnect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    delete?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    connect?: ResistanceWhereUniqueInput | ResistanceWhereUniqueInput[]
    update?: ResistanceUpdateWithWhereUniqueWithoutCardInput | ResistanceUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ResistanceUpdateManyWithWhereWithoutCardInput | ResistanceUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ResistanceScalarWhereInput | ResistanceScalarWhereInput[]
  }

  export type CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardLegalitiesCreateOrConnectWithoutCardInput
    upsert?: CardLegalitiesUpsertWithoutCardInput
    disconnect?: CardLegalitiesWhereInput | boolean
    delete?: CardLegalitiesWhereInput | boolean
    connect?: CardLegalitiesWhereUniqueInput
    update?: XOR<XOR<CardLegalitiesUpdateToOneWithWhereWithoutCardInput, CardLegalitiesUpdateWithoutCardInput>, CardLegalitiesUncheckedUpdateWithoutCardInput>
  }

  export type CardImagesUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardImagesCreateOrConnectWithoutCardInput
    upsert?: CardImagesUpsertWithoutCardInput
    disconnect?: CardImagesWhereInput | boolean
    delete?: CardImagesWhereInput | boolean
    connect?: CardImagesWhereUniqueInput
    update?: XOR<XOR<CardImagesUpdateToOneWithWhereWithoutCardInput, CardImagesUpdateWithoutCardInput>, CardImagesUncheckedUpdateWithoutCardInput>
  }

  export type CardMarketUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
    connectOrCreate?: CardMarketCreateOrConnectWithoutCardInput
    upsert?: CardMarketUpsertWithoutCardInput
    disconnect?: CardMarketWhereInput | boolean
    delete?: CardMarketWhereInput | boolean
    connect?: CardMarketWhereUniqueInput
    update?: XOR<XOR<CardMarketUpdateToOneWithWhereWithoutCardInput, CardMarketUpdateWithoutCardInput>, CardMarketUncheckedUpdateWithoutCardInput>
  }

  export type TcgPlayerUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutCardInput
    upsert?: TcgPlayerUpsertWithoutCardInput
    disconnect?: TcgPlayerWhereInput | boolean
    delete?: TcgPlayerWhereInput | boolean
    connect?: TcgPlayerWhereUniqueInput
    update?: XOR<XOR<TcgPlayerUpdateToOneWithWhereWithoutCardInput, TcgPlayerUpdateWithoutCardInput>, TcgPlayerUncheckedUpdateWithoutCardInput>
  }

  export type CardCreateNestedOneWithoutAbilitiesInput = {
    create?: XOR<CardCreateWithoutAbilitiesInput, CardUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutAbilitiesInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: XOR<CardCreateWithoutAbilitiesInput, CardUncheckedCreateWithoutAbilitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutAbilitiesInput
    upsert?: CardUpsertWithoutAbilitiesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutAbilitiesInput, CardUpdateWithoutAbilitiesInput>, CardUncheckedUpdateWithoutAbilitiesInput>
  }

  export type AttackCreatecostInput = {
    set: string[]
  }

  export type CardCreateNestedOneWithoutAttacksInput = {
    create?: XOR<CardCreateWithoutAttacksInput, CardUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: CardCreateOrConnectWithoutAttacksInput
    connect?: CardWhereUniqueInput
  }

  export type AttackUpdatecostInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdateOneRequiredWithoutAttacksNestedInput = {
    create?: XOR<CardCreateWithoutAttacksInput, CardUncheckedCreateWithoutAttacksInput>
    connectOrCreate?: CardCreateOrConnectWithoutAttacksInput
    upsert?: CardUpsertWithoutAttacksInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutAttacksInput, CardUpdateWithoutAttacksInput>, CardUncheckedUpdateWithoutAttacksInput>
  }

  export type CardCreateNestedOneWithoutWeaknessesInput = {
    create?: XOR<CardCreateWithoutWeaknessesInput, CardUncheckedCreateWithoutWeaknessesInput>
    connectOrCreate?: CardCreateOrConnectWithoutWeaknessesInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutWeaknessesNestedInput = {
    create?: XOR<CardCreateWithoutWeaknessesInput, CardUncheckedCreateWithoutWeaknessesInput>
    connectOrCreate?: CardCreateOrConnectWithoutWeaknessesInput
    upsert?: CardUpsertWithoutWeaknessesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutWeaknessesInput, CardUpdateWithoutWeaknessesInput>, CardUncheckedUpdateWithoutWeaknessesInput>
  }

  export type CardCreateNestedOneWithoutResistancesInput = {
    create?: XOR<CardCreateWithoutResistancesInput, CardUncheckedCreateWithoutResistancesInput>
    connectOrCreate?: CardCreateOrConnectWithoutResistancesInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutResistancesNestedInput = {
    create?: XOR<CardCreateWithoutResistancesInput, CardUncheckedCreateWithoutResistancesInput>
    connectOrCreate?: CardCreateOrConnectWithoutResistancesInput
    upsert?: CardUpsertWithoutResistancesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutResistancesInput, CardUpdateWithoutResistancesInput>, CardUncheckedUpdateWithoutResistancesInput>
  }

  export type CardCreateNestedOneWithoutLegalitiesInput = {
    create?: XOR<CardCreateWithoutLegalitiesInput, CardUncheckedCreateWithoutLegalitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutLegalitiesInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutLegalitiesNestedInput = {
    create?: XOR<CardCreateWithoutLegalitiesInput, CardUncheckedCreateWithoutLegalitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutLegalitiesInput
    upsert?: CardUpsertWithoutLegalitiesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutLegalitiesInput, CardUpdateWithoutLegalitiesInput>, CardUncheckedUpdateWithoutLegalitiesInput>
  }

  export type CardCreateNestedOneWithoutImagesInput = {
    create?: XOR<CardCreateWithoutImagesInput, CardUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CardCreateOrConnectWithoutImagesInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CardCreateWithoutImagesInput, CardUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CardCreateOrConnectWithoutImagesInput
    upsert?: CardUpsertWithoutImagesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutImagesInput, CardUpdateWithoutImagesInput>, CardUncheckedUpdateWithoutImagesInput>
  }

  export type CardCreateNestedOneWithoutCardmarketInput = {
    create?: XOR<CardCreateWithoutCardmarketInput, CardUncheckedCreateWithoutCardmarketInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardmarketInput
    connect?: CardWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateOneRequiredWithoutCardmarketNestedInput = {
    create?: XOR<CardCreateWithoutCardmarketInput, CardUncheckedCreateWithoutCardmarketInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardmarketInput
    upsert?: CardUpsertWithoutCardmarketInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCardmarketInput, CardUpdateWithoutCardmarketInput>, CardUncheckedUpdateWithoutCardmarketInput>
  }

  export type TcgPlayerCreateNestedOneWithoutPricesInput = {
    create?: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutPricesInput
    connect?: TcgPlayerWhereUniqueInput
  }

  export type TcgPlayerUncheckedCreateNestedOneWithoutPricesInput = {
    create?: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutPricesInput
    connect?: TcgPlayerWhereUniqueInput
  }

  export type TcgPlayerUpdateOneWithoutPricesNestedInput = {
    create?: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutPricesInput
    upsert?: TcgPlayerUpsertWithoutPricesInput
    disconnect?: TcgPlayerWhereInput | boolean
    delete?: TcgPlayerWhereInput | boolean
    connect?: TcgPlayerWhereUniqueInput
    update?: XOR<XOR<TcgPlayerUpdateToOneWithWhereWithoutPricesInput, TcgPlayerUpdateWithoutPricesInput>, TcgPlayerUncheckedUpdateWithoutPricesInput>
  }

  export type TcgPlayerUncheckedUpdateOneWithoutPricesNestedInput = {
    create?: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
    connectOrCreate?: TcgPlayerCreateOrConnectWithoutPricesInput
    upsert?: TcgPlayerUpsertWithoutPricesInput
    disconnect?: TcgPlayerWhereInput | boolean
    delete?: TcgPlayerWhereInput | boolean
    connect?: TcgPlayerWhereUniqueInput
    update?: XOR<XOR<TcgPlayerUpdateToOneWithWhereWithoutPricesInput, TcgPlayerUpdateWithoutPricesInput>, TcgPlayerUncheckedUpdateWithoutPricesInput>
  }

  export type CardCreateNestedOneWithoutTcgplayerInput = {
    create?: XOR<CardCreateWithoutTcgplayerInput, CardUncheckedCreateWithoutTcgplayerInput>
    connectOrCreate?: CardCreateOrConnectWithoutTcgplayerInput
    connect?: CardWhereUniqueInput
  }

  export type TcgPlayerPricesCreateNestedOneWithoutTcgplayerInput = {
    create?: XOR<TcgPlayerPricesCreateWithoutTcgplayerInput, TcgPlayerPricesUncheckedCreateWithoutTcgplayerInput>
    connectOrCreate?: TcgPlayerPricesCreateOrConnectWithoutTcgplayerInput
    connect?: TcgPlayerPricesWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutTcgplayerNestedInput = {
    create?: XOR<CardCreateWithoutTcgplayerInput, CardUncheckedCreateWithoutTcgplayerInput>
    connectOrCreate?: CardCreateOrConnectWithoutTcgplayerInput
    upsert?: CardUpsertWithoutTcgplayerInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutTcgplayerInput, CardUpdateWithoutTcgplayerInput>, CardUncheckedUpdateWithoutTcgplayerInput>
  }

  export type TcgPlayerPricesUpdateOneRequiredWithoutTcgplayerNestedInput = {
    create?: XOR<TcgPlayerPricesCreateWithoutTcgplayerInput, TcgPlayerPricesUncheckedCreateWithoutTcgplayerInput>
    connectOrCreate?: TcgPlayerPricesCreateOrConnectWithoutTcgplayerInput
    upsert?: TcgPlayerPricesUpsertWithoutTcgplayerInput
    connect?: TcgPlayerPricesWhereUniqueInput
    update?: XOR<XOR<TcgPlayerPricesUpdateToOneWithWhereWithoutTcgplayerInput, TcgPlayerPricesUpdateWithoutTcgplayerInput>, TcgPlayerPricesUncheckedUpdateWithoutTcgplayerInput>
  }

  export type CardCreateNestedManyWithoutSetInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SetLegalitiesCreateNestedOneWithoutSetInput = {
    create?: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
    connectOrCreate?: SetLegalitiesCreateOrConnectWithoutSetInput
    connect?: SetLegalitiesWhereUniqueInput
  }

  export type CardUncheckedCreateNestedManyWithoutSetInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type SetLegalitiesUncheckedCreateNestedOneWithoutSetInput = {
    create?: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
    connectOrCreate?: SetLegalitiesCreateOrConnectWithoutSetInput
    connect?: SetLegalitiesWhereUniqueInput
  }

  export type CardUpdateManyWithoutSetNestedInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSetInput | CardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSetInput | CardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSetInput | CardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SetLegalitiesUpdateOneWithoutSetNestedInput = {
    create?: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
    connectOrCreate?: SetLegalitiesCreateOrConnectWithoutSetInput
    upsert?: SetLegalitiesUpsertWithoutSetInput
    disconnect?: SetLegalitiesWhereInput | boolean
    delete?: SetLegalitiesWhereInput | boolean
    connect?: SetLegalitiesWhereUniqueInput
    update?: XOR<XOR<SetLegalitiesUpdateToOneWithWhereWithoutSetInput, SetLegalitiesUpdateWithoutSetInput>, SetLegalitiesUncheckedUpdateWithoutSetInput>
  }

  export type CardUncheckedUpdateManyWithoutSetNestedInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSetInput | CardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSetInput | CardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSetInput | CardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type SetLegalitiesUncheckedUpdateOneWithoutSetNestedInput = {
    create?: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
    connectOrCreate?: SetLegalitiesCreateOrConnectWithoutSetInput
    upsert?: SetLegalitiesUpsertWithoutSetInput
    disconnect?: SetLegalitiesWhereInput | boolean
    delete?: SetLegalitiesWhereInput | boolean
    connect?: SetLegalitiesWhereUniqueInput
    update?: XOR<XOR<SetLegalitiesUpdateToOneWithWhereWithoutSetInput, SetLegalitiesUpdateWithoutSetInput>, SetLegalitiesUncheckedUpdateWithoutSetInput>
  }

  export type CardSetCreateNestedOneWithoutLegalitiesInput = {
    create?: XOR<CardSetCreateWithoutLegalitiesInput, CardSetUncheckedCreateWithoutLegalitiesInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutLegalitiesInput
    connect?: CardSetWhereUniqueInput
  }

  export type CardSetUpdateOneRequiredWithoutLegalitiesNestedInput = {
    create?: XOR<CardSetCreateWithoutLegalitiesInput, CardSetUncheckedCreateWithoutLegalitiesInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutLegalitiesInput
    upsert?: CardSetUpsertWithoutLegalitiesInput
    connect?: CardSetWhereUniqueInput
    update?: XOR<XOR<CardSetUpdateToOneWithWhereWithoutLegalitiesInput, CardSetUpdateWithoutLegalitiesInput>, CardSetUncheckedUpdateWithoutLegalitiesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AbilityCreateWithoutCardInput = {
    id: string
    name?: string | null
    text?: string | null
    type?: string | null
  }

  export type AbilityUncheckedCreateWithoutCardInput = {
    id: string
    name?: string | null
    text?: string | null
    type?: string | null
  }

  export type AbilityCreateOrConnectWithoutCardInput = {
    where: AbilityWhereUniqueInput
    create: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput>
  }

  export type AbilityCreateManyCardInputEnvelope = {
    data: AbilityCreateManyCardInput | AbilityCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type AttackCreateWithoutCardInput = {
    id: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
  }

  export type AttackUncheckedCreateWithoutCardInput = {
    id: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
  }

  export type AttackCreateOrConnectWithoutCardInput = {
    where: AttackWhereUniqueInput
    create: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput>
  }

  export type AttackCreateManyCardInputEnvelope = {
    data: AttackCreateManyCardInput | AttackCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type WeaknessCreateWithoutCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type WeaknessUncheckedCreateWithoutCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type WeaknessCreateOrConnectWithoutCardInput = {
    where: WeaknessWhereUniqueInput
    create: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput>
  }

  export type WeaknessCreateManyCardInputEnvelope = {
    data: WeaknessCreateManyCardInput | WeaknessCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type ResistanceCreateWithoutCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type ResistanceUncheckedCreateWithoutCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type ResistanceCreateOrConnectWithoutCardInput = {
    where: ResistanceWhereUniqueInput
    create: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput>
  }

  export type ResistanceCreateManyCardInputEnvelope = {
    data: ResistanceCreateManyCardInput | ResistanceCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardLegalitiesCreateWithoutCardInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type CardLegalitiesUncheckedCreateWithoutCardInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type CardLegalitiesCreateOrConnectWithoutCardInput = {
    where: CardLegalitiesWhereUniqueInput
    create: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
  }

  export type CardImagesCreateWithoutCardInput = {
    id: string
    small?: string | null
    large?: string | null
  }

  export type CardImagesUncheckedCreateWithoutCardInput = {
    id: string
    small?: string | null
    large?: string | null
  }

  export type CardImagesCreateOrConnectWithoutCardInput = {
    where: CardImagesWhereUniqueInput
    create: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
  }

  export type CardMarketCreateWithoutCardInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    averageSellPrice?: number | null
    lowPrice?: number | null
    trendPrice?: number | null
    germanProLow?: number | null
    suggestedPrice?: number | null
    reverseHoloSell?: number | null
    reverseHoloLow?: number | null
    reverseHoloTrend?: number | null
    lowPriceExPlus?: number | null
    avg1?: number | null
    avg7?: number | null
    avg30?: number | null
    reverseHoloAvg1?: number | null
    reverseHoloAvg7?: number | null
    reverseHoloAvg30?: number | null
  }

  export type CardMarketUncheckedCreateWithoutCardInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    averageSellPrice?: number | null
    lowPrice?: number | null
    trendPrice?: number | null
    germanProLow?: number | null
    suggestedPrice?: number | null
    reverseHoloSell?: number | null
    reverseHoloLow?: number | null
    reverseHoloTrend?: number | null
    lowPriceExPlus?: number | null
    avg1?: number | null
    avg7?: number | null
    avg30?: number | null
    reverseHoloAvg1?: number | null
    reverseHoloAvg7?: number | null
    reverseHoloAvg30?: number | null
  }

  export type CardMarketCreateOrConnectWithoutCardInput = {
    where: CardMarketWhereUniqueInput
    create: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
  }

  export type TcgPlayerCreateWithoutCardInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    prices: TcgPlayerPricesCreateNestedOneWithoutTcgplayerInput
  }

  export type TcgPlayerUncheckedCreateWithoutCardInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    pricesId: string
  }

  export type TcgPlayerCreateOrConnectWithoutCardInput = {
    where: TcgPlayerWhereUniqueInput
    create: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
  }

  export type CardSetCreateWithoutCardsInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    legalities?: SetLegalitiesCreateNestedOneWithoutSetInput
  }

  export type CardSetUncheckedCreateWithoutCardsInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    legalities?: SetLegalitiesUncheckedCreateNestedOneWithoutSetInput
  }

  export type CardSetCreateOrConnectWithoutCardsInput = {
    where: CardSetWhereUniqueInput
    create: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
  }

  export type AbilityUpsertWithWhereUniqueWithoutCardInput = {
    where: AbilityWhereUniqueInput
    update: XOR<AbilityUpdateWithoutCardInput, AbilityUncheckedUpdateWithoutCardInput>
    create: XOR<AbilityCreateWithoutCardInput, AbilityUncheckedCreateWithoutCardInput>
  }

  export type AbilityUpdateWithWhereUniqueWithoutCardInput = {
    where: AbilityWhereUniqueInput
    data: XOR<AbilityUpdateWithoutCardInput, AbilityUncheckedUpdateWithoutCardInput>
  }

  export type AbilityUpdateManyWithWhereWithoutCardInput = {
    where: AbilityScalarWhereInput
    data: XOR<AbilityUpdateManyMutationInput, AbilityUncheckedUpdateManyWithoutCardInput>
  }

  export type AbilityScalarWhereInput = {
    AND?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    OR?: AbilityScalarWhereInput[]
    NOT?: AbilityScalarWhereInput | AbilityScalarWhereInput[]
    id?: StringFilter<"Ability"> | string
    cardId?: StringFilter<"Ability"> | string
    name?: StringNullableFilter<"Ability"> | string | null
    text?: StringNullableFilter<"Ability"> | string | null
    type?: StringNullableFilter<"Ability"> | string | null
  }

  export type AttackUpsertWithWhereUniqueWithoutCardInput = {
    where: AttackWhereUniqueInput
    update: XOR<AttackUpdateWithoutCardInput, AttackUncheckedUpdateWithoutCardInput>
    create: XOR<AttackCreateWithoutCardInput, AttackUncheckedCreateWithoutCardInput>
  }

  export type AttackUpdateWithWhereUniqueWithoutCardInput = {
    where: AttackWhereUniqueInput
    data: XOR<AttackUpdateWithoutCardInput, AttackUncheckedUpdateWithoutCardInput>
  }

  export type AttackUpdateManyWithWhereWithoutCardInput = {
    where: AttackScalarWhereInput
    data: XOR<AttackUpdateManyMutationInput, AttackUncheckedUpdateManyWithoutCardInput>
  }

  export type AttackScalarWhereInput = {
    AND?: AttackScalarWhereInput | AttackScalarWhereInput[]
    OR?: AttackScalarWhereInput[]
    NOT?: AttackScalarWhereInput | AttackScalarWhereInput[]
    id?: StringFilter<"Attack"> | string
    cardId?: StringFilter<"Attack"> | string
    name?: StringNullableFilter<"Attack"> | string | null
    cost?: StringNullableListFilter<"Attack">
    convertedEnergyCost?: IntNullableFilter<"Attack"> | number | null
    damage?: StringNullableFilter<"Attack"> | string | null
    text?: StringNullableFilter<"Attack"> | string | null
  }

  export type WeaknessUpsertWithWhereUniqueWithoutCardInput = {
    where: WeaknessWhereUniqueInput
    update: XOR<WeaknessUpdateWithoutCardInput, WeaknessUncheckedUpdateWithoutCardInput>
    create: XOR<WeaknessCreateWithoutCardInput, WeaknessUncheckedCreateWithoutCardInput>
  }

  export type WeaknessUpdateWithWhereUniqueWithoutCardInput = {
    where: WeaknessWhereUniqueInput
    data: XOR<WeaknessUpdateWithoutCardInput, WeaknessUncheckedUpdateWithoutCardInput>
  }

  export type WeaknessUpdateManyWithWhereWithoutCardInput = {
    where: WeaknessScalarWhereInput
    data: XOR<WeaknessUpdateManyMutationInput, WeaknessUncheckedUpdateManyWithoutCardInput>
  }

  export type WeaknessScalarWhereInput = {
    AND?: WeaknessScalarWhereInput | WeaknessScalarWhereInput[]
    OR?: WeaknessScalarWhereInput[]
    NOT?: WeaknessScalarWhereInput | WeaknessScalarWhereInput[]
    id?: StringFilter<"Weakness"> | string
    cardId?: StringFilter<"Weakness"> | string
    type?: StringNullableFilter<"Weakness"> | string | null
    value?: StringNullableFilter<"Weakness"> | string | null
  }

  export type ResistanceUpsertWithWhereUniqueWithoutCardInput = {
    where: ResistanceWhereUniqueInput
    update: XOR<ResistanceUpdateWithoutCardInput, ResistanceUncheckedUpdateWithoutCardInput>
    create: XOR<ResistanceCreateWithoutCardInput, ResistanceUncheckedCreateWithoutCardInput>
  }

  export type ResistanceUpdateWithWhereUniqueWithoutCardInput = {
    where: ResistanceWhereUniqueInput
    data: XOR<ResistanceUpdateWithoutCardInput, ResistanceUncheckedUpdateWithoutCardInput>
  }

  export type ResistanceUpdateManyWithWhereWithoutCardInput = {
    where: ResistanceScalarWhereInput
    data: XOR<ResistanceUpdateManyMutationInput, ResistanceUncheckedUpdateManyWithoutCardInput>
  }

  export type ResistanceScalarWhereInput = {
    AND?: ResistanceScalarWhereInput | ResistanceScalarWhereInput[]
    OR?: ResistanceScalarWhereInput[]
    NOT?: ResistanceScalarWhereInput | ResistanceScalarWhereInput[]
    id?: StringFilter<"Resistance"> | string
    cardId?: StringFilter<"Resistance"> | string
    type?: StringNullableFilter<"Resistance"> | string | null
    value?: StringNullableFilter<"Resistance"> | string | null
  }

  export type CardLegalitiesUpsertWithoutCardInput = {
    update: XOR<CardLegalitiesUpdateWithoutCardInput, CardLegalitiesUncheckedUpdateWithoutCardInput>
    create: XOR<CardLegalitiesCreateWithoutCardInput, CardLegalitiesUncheckedCreateWithoutCardInput>
    where?: CardLegalitiesWhereInput
  }

  export type CardLegalitiesUpdateToOneWithWhereWithoutCardInput = {
    where?: CardLegalitiesWhereInput
    data: XOR<CardLegalitiesUpdateWithoutCardInput, CardLegalitiesUncheckedUpdateWithoutCardInput>
  }

  export type CardLegalitiesUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardLegalitiesUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardImagesUpsertWithoutCardInput = {
    update: XOR<CardImagesUpdateWithoutCardInput, CardImagesUncheckedUpdateWithoutCardInput>
    create: XOR<CardImagesCreateWithoutCardInput, CardImagesUncheckedCreateWithoutCardInput>
    where?: CardImagesWhereInput
  }

  export type CardImagesUpdateToOneWithWhereWithoutCardInput = {
    where?: CardImagesWhereInput
    data: XOR<CardImagesUpdateWithoutCardInput, CardImagesUncheckedUpdateWithoutCardInput>
  }

  export type CardImagesUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardImagesUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    small?: NullableStringFieldUpdateOperationsInput | string | null
    large?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardMarketUpsertWithoutCardInput = {
    update: XOR<CardMarketUpdateWithoutCardInput, CardMarketUncheckedUpdateWithoutCardInput>
    create: XOR<CardMarketCreateWithoutCardInput, CardMarketUncheckedCreateWithoutCardInput>
    where?: CardMarketWhereInput
  }

  export type CardMarketUpdateToOneWithWhereWithoutCardInput = {
    where?: CardMarketWhereInput
    data: XOR<CardMarketUpdateWithoutCardInput, CardMarketUncheckedUpdateWithoutCardInput>
  }

  export type CardMarketUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CardMarketUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    averageSellPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trendPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    germanProLow?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloSell?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloTrend?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPriceExPlus?: NullableFloatFieldUpdateOperationsInput | number | null
    avg1?: NullableFloatFieldUpdateOperationsInput | number | null
    avg7?: NullableFloatFieldUpdateOperationsInput | number | null
    avg30?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg1?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg7?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHoloAvg30?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TcgPlayerUpsertWithoutCardInput = {
    update: XOR<TcgPlayerUpdateWithoutCardInput, TcgPlayerUncheckedUpdateWithoutCardInput>
    create: XOR<TcgPlayerCreateWithoutCardInput, TcgPlayerUncheckedCreateWithoutCardInput>
    where?: TcgPlayerWhereInput
  }

  export type TcgPlayerUpdateToOneWithWhereWithoutCardInput = {
    where?: TcgPlayerWhereInput
    data: XOR<TcgPlayerUpdateWithoutCardInput, TcgPlayerUncheckedUpdateWithoutCardInput>
  }

  export type TcgPlayerUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prices?: TcgPlayerPricesUpdateOneRequiredWithoutTcgplayerNestedInput
  }

  export type TcgPlayerUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pricesId?: StringFieldUpdateOperationsInput | string
  }

  export type CardSetUpsertWithoutCardsInput = {
    update: XOR<CardSetUpdateWithoutCardsInput, CardSetUncheckedUpdateWithoutCardsInput>
    create: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    where?: CardSetWhereInput
  }

  export type CardSetUpdateToOneWithWhereWithoutCardsInput = {
    where?: CardSetWhereInput
    data: XOR<CardSetUpdateWithoutCardsInput, CardSetUncheckedUpdateWithoutCardsInput>
  }

  export type CardSetUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    legalities?: SetLegalitiesUpdateOneWithoutSetNestedInput
  }

  export type CardSetUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    legalities?: SetLegalitiesUncheckedUpdateOneWithoutSetNestedInput
  }

  export type CardCreateWithoutAbilitiesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutAbilitiesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutAbilitiesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutAbilitiesInput, CardUncheckedCreateWithoutAbilitiesInput>
  }

  export type CardUpsertWithoutAbilitiesInput = {
    update: XOR<CardUpdateWithoutAbilitiesInput, CardUncheckedUpdateWithoutAbilitiesInput>
    create: XOR<CardCreateWithoutAbilitiesInput, CardUncheckedCreateWithoutAbilitiesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutAbilitiesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutAbilitiesInput, CardUncheckedUpdateWithoutAbilitiesInput>
  }

  export type CardUpdateWithoutAbilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutAbilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutAttacksInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutAttacksInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutAttacksInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutAttacksInput, CardUncheckedCreateWithoutAttacksInput>
  }

  export type CardUpsertWithoutAttacksInput = {
    update: XOR<CardUpdateWithoutAttacksInput, CardUncheckedUpdateWithoutAttacksInput>
    create: XOR<CardCreateWithoutAttacksInput, CardUncheckedCreateWithoutAttacksInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutAttacksInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutAttacksInput, CardUncheckedUpdateWithoutAttacksInput>
  }

  export type CardUpdateWithoutAttacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutAttacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutWeaknessesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutWeaknessesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutWeaknessesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutWeaknessesInput, CardUncheckedCreateWithoutWeaknessesInput>
  }

  export type CardUpsertWithoutWeaknessesInput = {
    update: XOR<CardUpdateWithoutWeaknessesInput, CardUncheckedUpdateWithoutWeaknessesInput>
    create: XOR<CardCreateWithoutWeaknessesInput, CardUncheckedCreateWithoutWeaknessesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutWeaknessesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutWeaknessesInput, CardUncheckedUpdateWithoutWeaknessesInput>
  }

  export type CardUpdateWithoutWeaknessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutWeaknessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutResistancesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutResistancesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutResistancesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutResistancesInput, CardUncheckedCreateWithoutResistancesInput>
  }

  export type CardUpsertWithoutResistancesInput = {
    update: XOR<CardUpdateWithoutResistancesInput, CardUncheckedUpdateWithoutResistancesInput>
    create: XOR<CardCreateWithoutResistancesInput, CardUncheckedCreateWithoutResistancesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutResistancesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutResistancesInput, CardUncheckedUpdateWithoutResistancesInput>
  }

  export type CardUpdateWithoutResistancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutResistancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutLegalitiesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutLegalitiesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutLegalitiesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutLegalitiesInput, CardUncheckedCreateWithoutLegalitiesInput>
  }

  export type CardUpsertWithoutLegalitiesInput = {
    update: XOR<CardUpdateWithoutLegalitiesInput, CardUncheckedUpdateWithoutLegalitiesInput>
    create: XOR<CardCreateWithoutLegalitiesInput, CardUncheckedCreateWithoutLegalitiesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutLegalitiesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutLegalitiesInput, CardUncheckedUpdateWithoutLegalitiesInput>
  }

  export type CardUpdateWithoutLegalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutLegalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutImagesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutImagesInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutImagesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutImagesInput, CardUncheckedCreateWithoutImagesInput>
  }

  export type CardUpsertWithoutImagesInput = {
    update: XOR<CardUpdateWithoutImagesInput, CardUncheckedUpdateWithoutImagesInput>
    create: XOR<CardCreateWithoutImagesInput, CardUncheckedCreateWithoutImagesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutImagesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutImagesInput, CardUncheckedUpdateWithoutImagesInput>
  }

  export type CardUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardCreateWithoutCardmarketInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutCardmarketInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCardmarketInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardmarketInput, CardUncheckedCreateWithoutCardmarketInput>
  }

  export type CardUpsertWithoutCardmarketInput = {
    update: XOR<CardUpdateWithoutCardmarketInput, CardUncheckedUpdateWithoutCardmarketInput>
    create: XOR<CardCreateWithoutCardmarketInput, CardUncheckedCreateWithoutCardmarketInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCardmarketInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCardmarketInput, CardUncheckedUpdateWithoutCardmarketInput>
  }

  export type CardUpdateWithoutCardmarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutCardmarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type TcgPlayerCreateWithoutPricesInput = {
    id: string
    url?: string | null
    updatedAt?: Date | string | null
    card: CardCreateNestedOneWithoutTcgplayerInput
  }

  export type TcgPlayerUncheckedCreateWithoutPricesInput = {
    id: string
    cardId: string
    url?: string | null
    updatedAt?: Date | string | null
  }

  export type TcgPlayerCreateOrConnectWithoutPricesInput = {
    where: TcgPlayerWhereUniqueInput
    create: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
  }

  export type TcgPlayerUpsertWithoutPricesInput = {
    update: XOR<TcgPlayerUpdateWithoutPricesInput, TcgPlayerUncheckedUpdateWithoutPricesInput>
    create: XOR<TcgPlayerCreateWithoutPricesInput, TcgPlayerUncheckedCreateWithoutPricesInput>
    where?: TcgPlayerWhereInput
  }

  export type TcgPlayerUpdateToOneWithWhereWithoutPricesInput = {
    where?: TcgPlayerWhereInput
    data: XOR<TcgPlayerUpdateWithoutPricesInput, TcgPlayerUncheckedUpdateWithoutPricesInput>
  }

  export type TcgPlayerUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card?: CardUpdateOneRequiredWithoutTcgplayerNestedInput
  }

  export type TcgPlayerUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardCreateWithoutTcgplayerInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    set?: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutTcgplayerInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    setId?: string | null
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutTcgplayerInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutTcgplayerInput, CardUncheckedCreateWithoutTcgplayerInput>
  }

  export type TcgPlayerPricesCreateWithoutTcgplayerInput = {
    id: string
    normalLow?: number | null
    normalMid?: number | null
    normalHigh?: number | null
    normalMarket?: number | null
    normalDirectLow?: number | null
    holofoilLow?: number | null
    holofoilMid?: number | null
    holofoilHigh?: number | null
    holofoilMarket?: number | null
    holofoilDirectLow?: number | null
    reverseHolofoilLow?: number | null
    reverseHolofoilMid?: number | null
    reverseHolofoilHigh?: number | null
    reverseHolofoilMarket?: number | null
    reverseHolofoilDirectLow?: number | null
  }

  export type TcgPlayerPricesUncheckedCreateWithoutTcgplayerInput = {
    id: string
    normalLow?: number | null
    normalMid?: number | null
    normalHigh?: number | null
    normalMarket?: number | null
    normalDirectLow?: number | null
    holofoilLow?: number | null
    holofoilMid?: number | null
    holofoilHigh?: number | null
    holofoilMarket?: number | null
    holofoilDirectLow?: number | null
    reverseHolofoilLow?: number | null
    reverseHolofoilMid?: number | null
    reverseHolofoilHigh?: number | null
    reverseHolofoilMarket?: number | null
    reverseHolofoilDirectLow?: number | null
  }

  export type TcgPlayerPricesCreateOrConnectWithoutTcgplayerInput = {
    where: TcgPlayerPricesWhereUniqueInput
    create: XOR<TcgPlayerPricesCreateWithoutTcgplayerInput, TcgPlayerPricesUncheckedCreateWithoutTcgplayerInput>
  }

  export type CardUpsertWithoutTcgplayerInput = {
    update: XOR<CardUpdateWithoutTcgplayerInput, CardUncheckedUpdateWithoutTcgplayerInput>
    create: XOR<CardCreateWithoutTcgplayerInput, CardUncheckedCreateWithoutTcgplayerInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutTcgplayerInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutTcgplayerInput, CardUncheckedUpdateWithoutTcgplayerInput>
  }

  export type CardUpdateWithoutTcgplayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    set?: CardSetUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutTcgplayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    setId?: NullableStringFieldUpdateOperationsInput | string | null
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
  }

  export type TcgPlayerPricesUpsertWithoutTcgplayerInput = {
    update: XOR<TcgPlayerPricesUpdateWithoutTcgplayerInput, TcgPlayerPricesUncheckedUpdateWithoutTcgplayerInput>
    create: XOR<TcgPlayerPricesCreateWithoutTcgplayerInput, TcgPlayerPricesUncheckedCreateWithoutTcgplayerInput>
    where?: TcgPlayerPricesWhereInput
  }

  export type TcgPlayerPricesUpdateToOneWithWhereWithoutTcgplayerInput = {
    where?: TcgPlayerPricesWhereInput
    data: XOR<TcgPlayerPricesUpdateWithoutTcgplayerInput, TcgPlayerPricesUncheckedUpdateWithoutTcgplayerInput>
  }

  export type TcgPlayerPricesUpdateWithoutTcgplayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TcgPlayerPricesUncheckedUpdateWithoutTcgplayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalLow?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMid?: NullableFloatFieldUpdateOperationsInput | number | null
    normalHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    normalMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    normalDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    holofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilLow?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMid?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilHigh?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilMarket?: NullableFloatFieldUpdateOperationsInput | number | null
    reverseHolofoilDirectLow?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CardCreateWithoutSetInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityCreateNestedManyWithoutCardInput
    attacks?: AttackCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessCreateNestedManyWithoutCardInput
    resistances?: ResistanceCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesCreateNestedOneWithoutCardInput
    images?: CardImagesCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerCreateNestedOneWithoutCardInput
  }

  export type CardUncheckedCreateWithoutSetInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    abilities?: AbilityUncheckedCreateNestedManyWithoutCardInput
    attacks?: AttackUncheckedCreateNestedManyWithoutCardInput
    weaknesses?: WeaknessUncheckedCreateNestedManyWithoutCardInput
    resistances?: ResistanceUncheckedCreateNestedManyWithoutCardInput
    legalities?: CardLegalitiesUncheckedCreateNestedOneWithoutCardInput
    images?: CardImagesUncheckedCreateNestedOneWithoutCardInput
    cardmarket?: CardMarketUncheckedCreateNestedOneWithoutCardInput
    tcgplayer?: TcgPlayerUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutSetInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput>
  }

  export type CardCreateManySetInputEnvelope = {
    data: CardCreateManySetInput | CardCreateManySetInput[]
    skipDuplicates?: boolean
  }

  export type SetLegalitiesCreateWithoutSetInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type SetLegalitiesUncheckedCreateWithoutSetInput = {
    id: string
    unlimited?: string | null
    standard?: string | null
    expanded?: string | null
  }

  export type SetLegalitiesCreateOrConnectWithoutSetInput = {
    where: SetLegalitiesWhereUniqueInput
    create: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
  }

  export type CardUpsertWithWhereUniqueWithoutSetInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutSetInput, CardUncheckedUpdateWithoutSetInput>
    create: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput>
  }

  export type CardUpdateWithWhereUniqueWithoutSetInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutSetInput, CardUncheckedUpdateWithoutSetInput>
  }

  export type CardUpdateManyWithWhereWithoutSetInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutSetInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    supertype?: StringNullableFilter<"Card"> | string | null
    subtypes?: StringNullableListFilter<"Card">
    level?: StringNullableFilter<"Card"> | string | null
    hp?: StringNullableFilter<"Card"> | string | null
    types?: StringNullableListFilter<"Card">
    evolvesFrom?: StringNullableFilter<"Card"> | string | null
    evolvesTo?: StringNullableListFilter<"Card">
    rules?: StringNullableListFilter<"Card">
    flavorText?: StringNullableFilter<"Card"> | string | null
    artist?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    number?: StringFilter<"Card"> | string
    nationalPokedexNumbers?: IntNullableListFilter<"Card">
    setId?: StringNullableFilter<"Card"> | string | null
    retreatCost?: StringNullableListFilter<"Card">
    convertedRetreatCost?: IntNullableFilter<"Card"> | number | null
    createdAt?: DateTimeNullableFilter<"Card"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Card"> | Date | string | null
  }

  export type SetLegalitiesUpsertWithoutSetInput = {
    update: XOR<SetLegalitiesUpdateWithoutSetInput, SetLegalitiesUncheckedUpdateWithoutSetInput>
    create: XOR<SetLegalitiesCreateWithoutSetInput, SetLegalitiesUncheckedCreateWithoutSetInput>
    where?: SetLegalitiesWhereInput
  }

  export type SetLegalitiesUpdateToOneWithWhereWithoutSetInput = {
    where?: SetLegalitiesWhereInput
    data: XOR<SetLegalitiesUpdateWithoutSetInput, SetLegalitiesUncheckedUpdateWithoutSetInput>
  }

  export type SetLegalitiesUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetLegalitiesUncheckedUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlimited?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: NullableStringFieldUpdateOperationsInput | string | null
    expanded?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardSetCreateWithoutLegalitiesInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    cards?: CardCreateNestedManyWithoutSetInput
  }

  export type CardSetUncheckedCreateWithoutLegalitiesInput = {
    id: string
    name?: string | null
    series?: string | null
    printedTotal?: number | null
    total?: number | null
    ptcgoCode?: string | null
    releaseDate?: Date | string | null
    updatedAt?: Date | string | null
    symbol?: string | null
    logo?: string | null
    cards?: CardUncheckedCreateNestedManyWithoutSetInput
  }

  export type CardSetCreateOrConnectWithoutLegalitiesInput = {
    where: CardSetWhereUniqueInput
    create: XOR<CardSetCreateWithoutLegalitiesInput, CardSetUncheckedCreateWithoutLegalitiesInput>
  }

  export type CardSetUpsertWithoutLegalitiesInput = {
    update: XOR<CardSetUpdateWithoutLegalitiesInput, CardSetUncheckedUpdateWithoutLegalitiesInput>
    create: XOR<CardSetCreateWithoutLegalitiesInput, CardSetUncheckedCreateWithoutLegalitiesInput>
    where?: CardSetWhereInput
  }

  export type CardSetUpdateToOneWithWhereWithoutLegalitiesInput = {
    where?: CardSetWhereInput
    data: XOR<CardSetUpdateWithoutLegalitiesInput, CardSetUncheckedUpdateWithoutLegalitiesInput>
  }

  export type CardSetUpdateWithoutLegalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cards?: CardUpdateManyWithoutSetNestedInput
  }

  export type CardSetUncheckedUpdateWithoutLegalitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    series?: NullableStringFieldUpdateOperationsInput | string | null
    printedTotal?: NullableIntFieldUpdateOperationsInput | number | null
    total?: NullableIntFieldUpdateOperationsInput | number | null
    ptcgoCode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    cards?: CardUncheckedUpdateManyWithoutSetNestedInput
  }

  export type AbilityCreateManyCardInput = {
    id: string
    name?: string | null
    text?: string | null
    type?: string | null
  }

  export type AttackCreateManyCardInput = {
    id: string
    name?: string | null
    cost?: AttackCreatecostInput | string[]
    convertedEnergyCost?: number | null
    damage?: string | null
    text?: string | null
  }

  export type WeaknessCreateManyCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type ResistanceCreateManyCardInput = {
    id: string
    type?: string | null
    value?: string | null
  }

  export type AbilityUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbilityUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbilityUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttackUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: AttackUpdatecostInput | string[]
    convertedEnergyCost?: NullableIntFieldUpdateOperationsInput | number | null
    damage?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeaknessUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResistanceUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardCreateManySetInput = {
    id: string
    name: string
    supertype?: string | null
    subtypes?: CardCreatesubtypesInput | string[]
    level?: string | null
    hp?: string | null
    types?: CardCreatetypesInput | string[]
    evolvesFrom?: string | null
    evolvesTo?: CardCreateevolvesToInput | string[]
    rules?: CardCreaterulesInput | string[]
    flavorText?: string | null
    artist?: string | null
    rarity?: string | null
    number: string
    nationalPokedexNumbers?: CardCreatenationalPokedexNumbersInput | number[]
    retreatCost?: CardCreateretreatCostInput | string[]
    convertedRetreatCost?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type CardUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUpdateManyWithoutCardNestedInput
    attacks?: AttackUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUpdateOneWithoutCardNestedInput
    images?: CardImagesUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUpdateOneWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abilities?: AbilityUncheckedUpdateManyWithoutCardNestedInput
    attacks?: AttackUncheckedUpdateManyWithoutCardNestedInput
    weaknesses?: WeaknessUncheckedUpdateManyWithoutCardNestedInput
    resistances?: ResistanceUncheckedUpdateManyWithoutCardNestedInput
    legalities?: CardLegalitiesUncheckedUpdateOneWithoutCardNestedInput
    images?: CardImagesUncheckedUpdateOneWithoutCardNestedInput
    cardmarket?: CardMarketUncheckedUpdateOneWithoutCardNestedInput
    tcgplayer?: TcgPlayerUncheckedUpdateOneWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    supertype?: NullableStringFieldUpdateOperationsInput | string | null
    subtypes?: CardUpdatesubtypesInput | string[]
    level?: NullableStringFieldUpdateOperationsInput | string | null
    hp?: NullableStringFieldUpdateOperationsInput | string | null
    types?: CardUpdatetypesInput | string[]
    evolvesFrom?: NullableStringFieldUpdateOperationsInput | string | null
    evolvesTo?: CardUpdateevolvesToInput | string[]
    rules?: CardUpdaterulesInput | string[]
    flavorText?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    nationalPokedexNumbers?: CardUpdatenationalPokedexNumbersInput | number[]
    retreatCost?: CardUpdateretreatCostInput | string[]
    convertedRetreatCost?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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