
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model AgentVersion
 * 
 */
export type AgentVersion = $Result.DefaultSelection<Prisma.$AgentVersionPayload>
/**
 * Model EvaluationJob
 * 
 */
export type EvaluationJob = $Result.DefaultSelection<Prisma.$EvaluationJobPayload>
/**
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model Run
 * 
 */
export type Run = $Result.DefaultSelection<Prisma.$RunPayload>
/**
 * Model Trace
 * 
 */
export type Trace = $Result.DefaultSelection<Prisma.$TracePayload>
/**
 * Model Classification
 * 
 */
export type Classification = $Result.DefaultSelection<Prisma.$ClassificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Agents
 * const agents = await prisma.agent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentVersion`: Exposes CRUD operations for the **AgentVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentVersions
    * const agentVersions = await prisma.agentVersion.findMany()
    * ```
    */
  get agentVersion(): Prisma.AgentVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluationJob`: Exposes CRUD operations for the **EvaluationJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvaluationJobs
    * const evaluationJobs = await prisma.evaluationJob.findMany()
    * ```
    */
  get evaluationJob(): Prisma.EvaluationJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.run`: Exposes CRUD operations for the **Run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.run.findMany()
    * ```
    */
  get run(): Prisma.RunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trace`: Exposes CRUD operations for the **Trace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traces
    * const traces = await prisma.trace.findMany()
    * ```
    */
  get trace(): Prisma.TraceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classification`: Exposes CRUD operations for the **Classification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifications
    * const classifications = await prisma.classification.findMany()
    * ```
    */
  get classification(): Prisma.ClassificationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Agent: 'Agent',
    AgentVersion: 'AgentVersion',
    EvaluationJob: 'EvaluationJob',
    Scenario: 'Scenario',
    Run: 'Run',
    Trace: 'Trace',
    Classification: 'Classification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agent" | "agentVersion" | "evaluationJob" | "scenario" | "run" | "trace" | "classification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      AgentVersion: {
        payload: Prisma.$AgentVersionPayload<ExtArgs>
        fields: Prisma.AgentVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          findFirst: {
            args: Prisma.AgentVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          findMany: {
            args: Prisma.AgentVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>[]
          }
          create: {
            args: Prisma.AgentVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          createMany: {
            args: Prisma.AgentVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>[]
          }
          delete: {
            args: Prisma.AgentVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          update: {
            args: Prisma.AgentVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          deleteMany: {
            args: Prisma.AgentVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>[]
          }
          upsert: {
            args: Prisma.AgentVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentVersionPayload>
          }
          aggregate: {
            args: Prisma.AgentVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentVersion>
          }
          groupBy: {
            args: Prisma.AgentVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentVersionCountArgs<ExtArgs>
            result: $Utils.Optional<AgentVersionCountAggregateOutputType> | number
          }
        }
      }
      EvaluationJob: {
        payload: Prisma.$EvaluationJobPayload<ExtArgs>
        fields: Prisma.EvaluationJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          findFirst: {
            args: Prisma.EvaluationJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          findMany: {
            args: Prisma.EvaluationJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>[]
          }
          create: {
            args: Prisma.EvaluationJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          createMany: {
            args: Prisma.EvaluationJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>[]
          }
          delete: {
            args: Prisma.EvaluationJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          update: {
            args: Prisma.EvaluationJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationJobPayload>
          }
          aggregate: {
            args: Prisma.EvaluationJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluationJob>
          }
          groupBy: {
            args: Prisma.EvaluationJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationJobCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationJobCountAggregateOutputType> | number
          }
        }
      }
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      Run: {
        payload: Prisma.$RunPayload<ExtArgs>
        fields: Prisma.RunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findFirst: {
            args: Prisma.RunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findMany: {
            args: Prisma.RunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          create: {
            args: Prisma.RunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          createMany: {
            args: Prisma.RunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          delete: {
            args: Prisma.RunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          update: {
            args: Prisma.RunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          deleteMany: {
            args: Prisma.RunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          upsert: {
            args: Prisma.RunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          aggregate: {
            args: Prisma.RunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRun>
          }
          groupBy: {
            args: Prisma.RunGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunCountArgs<ExtArgs>
            result: $Utils.Optional<RunCountAggregateOutputType> | number
          }
        }
      }
      Trace: {
        payload: Prisma.$TracePayload<ExtArgs>
        fields: Prisma.TraceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          findFirst: {
            args: Prisma.TraceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          findMany: {
            args: Prisma.TraceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>[]
          }
          create: {
            args: Prisma.TraceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          createMany: {
            args: Prisma.TraceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>[]
          }
          delete: {
            args: Prisma.TraceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          update: {
            args: Prisma.TraceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          deleteMany: {
            args: Prisma.TraceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>[]
          }
          upsert: {
            args: Prisma.TraceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracePayload>
          }
          aggregate: {
            args: Prisma.TraceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrace>
          }
          groupBy: {
            args: Prisma.TraceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraceCountArgs<ExtArgs>
            result: $Utils.Optional<TraceCountAggregateOutputType> | number
          }
        }
      }
      Classification: {
        payload: Prisma.$ClassificationPayload<ExtArgs>
        fields: Prisma.ClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findFirst: {
            args: Prisma.ClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findMany: {
            args: Prisma.ClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          create: {
            args: Prisma.ClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          createMany: {
            args: Prisma.ClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          delete: {
            args: Prisma.ClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          update: {
            args: Prisma.ClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          deleteMany: {
            args: Prisma.ClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          upsert: {
            args: Prisma.ClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          aggregate: {
            args: Prisma.ClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassification>
          }
          groupBy: {
            args: Prisma.ClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<ClassificationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    agent?: AgentOmit
    agentVersion?: AgentVersionOmit
    evaluationJob?: EvaluationJobOmit
    scenario?: ScenarioOmit
    run?: RunOmit
    trace?: TraceOmit
    classification?: ClassificationOmit
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
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    versions: number
    scenarios: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | AgentCountOutputTypeCountVersionsArgs
    scenarios?: boolean | AgentCountOutputTypeCountScenariosArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentVersionWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountScenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
  }


  /**
   * Count Type AgentVersionCountOutputType
   */

  export type AgentVersionCountOutputType = {
    evaluationJobs: number
    runs: number
  }

  export type AgentVersionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluationJobs?: boolean | AgentVersionCountOutputTypeCountEvaluationJobsArgs
    runs?: boolean | AgentVersionCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * AgentVersionCountOutputType without action
   */
  export type AgentVersionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersionCountOutputType
     */
    select?: AgentVersionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentVersionCountOutputType without action
   */
  export type AgentVersionCountOutputTypeCountEvaluationJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationJobWhereInput
  }

  /**
   * AgentVersionCountOutputType without action
   */
  export type AgentVersionCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }


  /**
   * Count Type EvaluationJobCountOutputType
   */

  export type EvaluationJobCountOutputType = {
    runs: number
  }

  export type EvaluationJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | EvaluationJobCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * EvaluationJobCountOutputType without action
   */
  export type EvaluationJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJobCountOutputType
     */
    select?: EvaluationJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluationJobCountOutputType without action
   */
  export type EvaluationJobCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }


  /**
   * Count Type ScenarioCountOutputType
   */

  export type ScenarioCountOutputType = {
    runs: number
  }

  export type ScenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | ScenarioCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioCountOutputType
     */
    select?: ScenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    name: string
    domain: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    versions?: boolean | Agent$versionsArgs<ExtArgs>
    scenarios?: boolean | Agent$scenariosArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | Agent$versionsArgs<ExtArgs>
    scenarios?: boolean | Agent$scenariosArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      versions: Prisma.$AgentVersionPayload<ExtArgs>[]
      scenarios: Prisma.$ScenarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends Agent$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenarios<T extends Agent$scenariosArgs<ExtArgs> = {}>(args?: Subset<T, Agent$scenariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly domain: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.versions
   */
  export type Agent$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    where?: AgentVersionWhereInput
    orderBy?: AgentVersionOrderByWithRelationInput | AgentVersionOrderByWithRelationInput[]
    cursor?: AgentVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentVersionScalarFieldEnum | AgentVersionScalarFieldEnum[]
  }

  /**
   * Agent.scenarios
   */
  export type Agent$scenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    cursor?: ScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model AgentVersion
   */

  export type AggregateAgentVersion = {
    _count: AgentVersionCountAggregateOutputType | null
    _avg: AgentVersionAvgAggregateOutputType | null
    _sum: AgentVersionSumAggregateOutputType | null
    _min: AgentVersionMinAggregateOutputType | null
    _max: AgentVersionMaxAggregateOutputType | null
  }

  export type AgentVersionAvgAggregateOutputType = {
    version: number | null
    temperature: number | null
  }

  export type AgentVersionSumAggregateOutputType = {
    version: number | null
    temperature: number | null
  }

  export type AgentVersionMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    version: number | null
    systemPrompt: string | null
    model: string | null
    temperature: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentVersionMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    version: number | null
    systemPrompt: string | null
    model: string | null
    temperature: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentVersionCountAggregateOutputType = {
    id: number
    agentId: number
    version: number
    systemPrompt: number
    tools: number
    model: number
    temperature: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentVersionAvgAggregateInputType = {
    version?: true
    temperature?: true
  }

  export type AgentVersionSumAggregateInputType = {
    version?: true
    temperature?: true
  }

  export type AgentVersionMinAggregateInputType = {
    id?: true
    agentId?: true
    version?: true
    systemPrompt?: true
    model?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentVersionMaxAggregateInputType = {
    id?: true
    agentId?: true
    version?: true
    systemPrompt?: true
    model?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentVersionCountAggregateInputType = {
    id?: true
    agentId?: true
    version?: true
    systemPrompt?: true
    tools?: true
    model?: true
    temperature?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentVersion to aggregate.
     */
    where?: AgentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentVersions to fetch.
     */
    orderBy?: AgentVersionOrderByWithRelationInput | AgentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentVersions
    **/
    _count?: true | AgentVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentVersionMaxAggregateInputType
  }

  export type GetAgentVersionAggregateType<T extends AgentVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentVersion[P]>
      : GetScalarType<T[P], AggregateAgentVersion[P]>
  }




  export type AgentVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentVersionWhereInput
    orderBy?: AgentVersionOrderByWithAggregationInput | AgentVersionOrderByWithAggregationInput[]
    by: AgentVersionScalarFieldEnum[] | AgentVersionScalarFieldEnum
    having?: AgentVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentVersionCountAggregateInputType | true
    _avg?: AgentVersionAvgAggregateInputType
    _sum?: AgentVersionSumAggregateInputType
    _min?: AgentVersionMinAggregateInputType
    _max?: AgentVersionMaxAggregateInputType
  }

  export type AgentVersionGroupByOutputType = {
    id: string
    agentId: string
    version: number
    systemPrompt: string
    tools: JsonValue
    model: string
    temperature: number
    createdAt: Date
    updatedAt: Date
    _count: AgentVersionCountAggregateOutputType | null
    _avg: AgentVersionAvgAggregateOutputType | null
    _sum: AgentVersionSumAggregateOutputType | null
    _min: AgentVersionMinAggregateOutputType | null
    _max: AgentVersionMaxAggregateOutputType | null
  }

  type GetAgentVersionGroupByPayload<T extends AgentVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentVersionGroupByOutputType[P]>
            : GetScalarType<T[P], AgentVersionGroupByOutputType[P]>
        }
      >
    >


  export type AgentVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    version?: boolean
    systemPrompt?: boolean
    tools?: boolean
    model?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    evaluationJobs?: boolean | AgentVersion$evaluationJobsArgs<ExtArgs>
    runs?: boolean | AgentVersion$runsArgs<ExtArgs>
    _count?: boolean | AgentVersionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentVersion"]>

  export type AgentVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    version?: boolean
    systemPrompt?: boolean
    tools?: boolean
    model?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentVersion"]>

  export type AgentVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    version?: boolean
    systemPrompt?: boolean
    tools?: boolean
    model?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentVersion"]>

  export type AgentVersionSelectScalar = {
    id?: boolean
    agentId?: boolean
    version?: boolean
    systemPrompt?: boolean
    tools?: boolean
    model?: boolean
    temperature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "version" | "systemPrompt" | "tools" | "model" | "temperature" | "createdAt" | "updatedAt", ExtArgs["result"]["agentVersion"]>
  export type AgentVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    evaluationJobs?: boolean | AgentVersion$evaluationJobsArgs<ExtArgs>
    runs?: boolean | AgentVersion$runsArgs<ExtArgs>
    _count?: boolean | AgentVersionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type AgentVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $AgentVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentVersion"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      evaluationJobs: Prisma.$EvaluationJobPayload<ExtArgs>[]
      runs: Prisma.$RunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      version: number
      systemPrompt: string
      tools: Prisma.JsonValue
      model: string
      temperature: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentVersion"]>
    composites: {}
  }

  type AgentVersionGetPayload<S extends boolean | null | undefined | AgentVersionDefaultArgs> = $Result.GetResult<Prisma.$AgentVersionPayload, S>

  type AgentVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentVersionCountAggregateInputType | true
    }

  export interface AgentVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentVersion'], meta: { name: 'AgentVersion' } }
    /**
     * Find zero or one AgentVersion that matches the filter.
     * @param {AgentVersionFindUniqueArgs} args - Arguments to find a AgentVersion
     * @example
     * // Get one AgentVersion
     * const agentVersion = await prisma.agentVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentVersionFindUniqueArgs>(args: SelectSubset<T, AgentVersionFindUniqueArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentVersionFindUniqueOrThrowArgs} args - Arguments to find a AgentVersion
     * @example
     * // Get one AgentVersion
     * const agentVersion = await prisma.agentVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionFindFirstArgs} args - Arguments to find a AgentVersion
     * @example
     * // Get one AgentVersion
     * const agentVersion = await prisma.agentVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentVersionFindFirstArgs>(args?: SelectSubset<T, AgentVersionFindFirstArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionFindFirstOrThrowArgs} args - Arguments to find a AgentVersion
     * @example
     * // Get one AgentVersion
     * const agentVersion = await prisma.agentVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentVersions
     * const agentVersions = await prisma.agentVersion.findMany()
     * 
     * // Get first 10 AgentVersions
     * const agentVersions = await prisma.agentVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentVersionWithIdOnly = await prisma.agentVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentVersionFindManyArgs>(args?: SelectSubset<T, AgentVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentVersion.
     * @param {AgentVersionCreateArgs} args - Arguments to create a AgentVersion.
     * @example
     * // Create one AgentVersion
     * const AgentVersion = await prisma.agentVersion.create({
     *   data: {
     *     // ... data to create a AgentVersion
     *   }
     * })
     * 
     */
    create<T extends AgentVersionCreateArgs>(args: SelectSubset<T, AgentVersionCreateArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentVersions.
     * @param {AgentVersionCreateManyArgs} args - Arguments to create many AgentVersions.
     * @example
     * // Create many AgentVersions
     * const agentVersion = await prisma.agentVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentVersionCreateManyArgs>(args?: SelectSubset<T, AgentVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentVersions and returns the data saved in the database.
     * @param {AgentVersionCreateManyAndReturnArgs} args - Arguments to create many AgentVersions.
     * @example
     * // Create many AgentVersions
     * const agentVersion = await prisma.agentVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentVersions and only return the `id`
     * const agentVersionWithIdOnly = await prisma.agentVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentVersion.
     * @param {AgentVersionDeleteArgs} args - Arguments to delete one AgentVersion.
     * @example
     * // Delete one AgentVersion
     * const AgentVersion = await prisma.agentVersion.delete({
     *   where: {
     *     // ... filter to delete one AgentVersion
     *   }
     * })
     * 
     */
    delete<T extends AgentVersionDeleteArgs>(args: SelectSubset<T, AgentVersionDeleteArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentVersion.
     * @param {AgentVersionUpdateArgs} args - Arguments to update one AgentVersion.
     * @example
     * // Update one AgentVersion
     * const agentVersion = await prisma.agentVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentVersionUpdateArgs>(args: SelectSubset<T, AgentVersionUpdateArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentVersions.
     * @param {AgentVersionDeleteManyArgs} args - Arguments to filter AgentVersions to delete.
     * @example
     * // Delete a few AgentVersions
     * const { count } = await prisma.agentVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentVersionDeleteManyArgs>(args?: SelectSubset<T, AgentVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentVersions
     * const agentVersion = await prisma.agentVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentVersionUpdateManyArgs>(args: SelectSubset<T, AgentVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentVersions and returns the data updated in the database.
     * @param {AgentVersionUpdateManyAndReturnArgs} args - Arguments to update many AgentVersions.
     * @example
     * // Update many AgentVersions
     * const agentVersion = await prisma.agentVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentVersions and only return the `id`
     * const agentVersionWithIdOnly = await prisma.agentVersion.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentVersion.
     * @param {AgentVersionUpsertArgs} args - Arguments to update or create a AgentVersion.
     * @example
     * // Update or create a AgentVersion
     * const agentVersion = await prisma.agentVersion.upsert({
     *   create: {
     *     // ... data to create a AgentVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentVersion we want to update
     *   }
     * })
     */
    upsert<T extends AgentVersionUpsertArgs>(args: SelectSubset<T, AgentVersionUpsertArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionCountArgs} args - Arguments to filter AgentVersions to count.
     * @example
     * // Count the number of AgentVersions
     * const count = await prisma.agentVersion.count({
     *   where: {
     *     // ... the filter for the AgentVersions we want to count
     *   }
     * })
    **/
    count<T extends AgentVersionCountArgs>(
      args?: Subset<T, AgentVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentVersionAggregateArgs>(args: Subset<T, AgentVersionAggregateArgs>): Prisma.PrismaPromise<GetAgentVersionAggregateType<T>>

    /**
     * Group by AgentVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentVersionGroupByArgs} args - Group by arguments.
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
      T extends AgentVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentVersionGroupByArgs['orderBy'] }
        : { orderBy?: AgentVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentVersion model
   */
  readonly fields: AgentVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluationJobs<T extends AgentVersion$evaluationJobsArgs<ExtArgs> = {}>(args?: Subset<T, AgentVersion$evaluationJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    runs<T extends AgentVersion$runsArgs<ExtArgs> = {}>(args?: Subset<T, AgentVersion$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AgentVersion model
   */
  interface AgentVersionFieldRefs {
    readonly id: FieldRef<"AgentVersion", 'String'>
    readonly agentId: FieldRef<"AgentVersion", 'String'>
    readonly version: FieldRef<"AgentVersion", 'Int'>
    readonly systemPrompt: FieldRef<"AgentVersion", 'String'>
    readonly tools: FieldRef<"AgentVersion", 'Json'>
    readonly model: FieldRef<"AgentVersion", 'String'>
    readonly temperature: FieldRef<"AgentVersion", 'Float'>
    readonly createdAt: FieldRef<"AgentVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentVersion findUnique
   */
  export type AgentVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter, which AgentVersion to fetch.
     */
    where: AgentVersionWhereUniqueInput
  }

  /**
   * AgentVersion findUniqueOrThrow
   */
  export type AgentVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter, which AgentVersion to fetch.
     */
    where: AgentVersionWhereUniqueInput
  }

  /**
   * AgentVersion findFirst
   */
  export type AgentVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter, which AgentVersion to fetch.
     */
    where?: AgentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentVersions to fetch.
     */
    orderBy?: AgentVersionOrderByWithRelationInput | AgentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentVersions.
     */
    cursor?: AgentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentVersions.
     */
    distinct?: AgentVersionScalarFieldEnum | AgentVersionScalarFieldEnum[]
  }

  /**
   * AgentVersion findFirstOrThrow
   */
  export type AgentVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter, which AgentVersion to fetch.
     */
    where?: AgentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentVersions to fetch.
     */
    orderBy?: AgentVersionOrderByWithRelationInput | AgentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentVersions.
     */
    cursor?: AgentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentVersions.
     */
    distinct?: AgentVersionScalarFieldEnum | AgentVersionScalarFieldEnum[]
  }

  /**
   * AgentVersion findMany
   */
  export type AgentVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter, which AgentVersions to fetch.
     */
    where?: AgentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentVersions to fetch.
     */
    orderBy?: AgentVersionOrderByWithRelationInput | AgentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentVersions.
     */
    cursor?: AgentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentVersions.
     */
    distinct?: AgentVersionScalarFieldEnum | AgentVersionScalarFieldEnum[]
  }

  /**
   * AgentVersion create
   */
  export type AgentVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentVersion.
     */
    data: XOR<AgentVersionCreateInput, AgentVersionUncheckedCreateInput>
  }

  /**
   * AgentVersion createMany
   */
  export type AgentVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentVersions.
     */
    data: AgentVersionCreateManyInput | AgentVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentVersion createManyAndReturn
   */
  export type AgentVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * The data used to create many AgentVersions.
     */
    data: AgentVersionCreateManyInput | AgentVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentVersion update
   */
  export type AgentVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentVersion.
     */
    data: XOR<AgentVersionUpdateInput, AgentVersionUncheckedUpdateInput>
    /**
     * Choose, which AgentVersion to update.
     */
    where: AgentVersionWhereUniqueInput
  }

  /**
   * AgentVersion updateMany
   */
  export type AgentVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentVersions.
     */
    data: XOR<AgentVersionUpdateManyMutationInput, AgentVersionUncheckedUpdateManyInput>
    /**
     * Filter which AgentVersions to update
     */
    where?: AgentVersionWhereInput
    /**
     * Limit how many AgentVersions to update.
     */
    limit?: number
  }

  /**
   * AgentVersion updateManyAndReturn
   */
  export type AgentVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * The data used to update AgentVersions.
     */
    data: XOR<AgentVersionUpdateManyMutationInput, AgentVersionUncheckedUpdateManyInput>
    /**
     * Filter which AgentVersions to update
     */
    where?: AgentVersionWhereInput
    /**
     * Limit how many AgentVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentVersion upsert
   */
  export type AgentVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentVersion to update in case it exists.
     */
    where: AgentVersionWhereUniqueInput
    /**
     * In case the AgentVersion found by the `where` argument doesn't exist, create a new AgentVersion with this data.
     */
    create: XOR<AgentVersionCreateInput, AgentVersionUncheckedCreateInput>
    /**
     * In case the AgentVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentVersionUpdateInput, AgentVersionUncheckedUpdateInput>
  }

  /**
   * AgentVersion delete
   */
  export type AgentVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
    /**
     * Filter which AgentVersion to delete.
     */
    where: AgentVersionWhereUniqueInput
  }

  /**
   * AgentVersion deleteMany
   */
  export type AgentVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentVersions to delete
     */
    where?: AgentVersionWhereInput
    /**
     * Limit how many AgentVersions to delete.
     */
    limit?: number
  }

  /**
   * AgentVersion.evaluationJobs
   */
  export type AgentVersion$evaluationJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    where?: EvaluationJobWhereInput
    orderBy?: EvaluationJobOrderByWithRelationInput | EvaluationJobOrderByWithRelationInput[]
    cursor?: EvaluationJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationJobScalarFieldEnum | EvaluationJobScalarFieldEnum[]
  }

  /**
   * AgentVersion.runs
   */
  export type AgentVersion$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * AgentVersion without action
   */
  export type AgentVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentVersion
     */
    select?: AgentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentVersion
     */
    omit?: AgentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentVersionInclude<ExtArgs> | null
  }


  /**
   * Model EvaluationJob
   */

  export type AggregateEvaluationJob = {
    _count: EvaluationJobCountAggregateOutputType | null
    _avg: EvaluationJobAvgAggregateOutputType | null
    _sum: EvaluationJobSumAggregateOutputType | null
    _min: EvaluationJobMinAggregateOutputType | null
    _max: EvaluationJobMaxAggregateOutputType | null
  }

  export type EvaluationJobAvgAggregateOutputType = {
    totalScenarios: number | null
    passedScenarios: number | null
    failedScenarios: number | null
    reliabilityScore: number | null
  }

  export type EvaluationJobSumAggregateOutputType = {
    totalScenarios: number | null
    passedScenarios: number | null
    failedScenarios: number | null
    reliabilityScore: number | null
  }

  export type EvaluationJobMinAggregateOutputType = {
    id: string | null
    agentVersionId: string | null
    status: string | null
    triggerSource: string | null
    totalScenarios: number | null
    passedScenarios: number | null
    failedScenarios: number | null
    reliabilityScore: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationJobMaxAggregateOutputType = {
    id: string | null
    agentVersionId: string | null
    status: string | null
    triggerSource: string | null
    totalScenarios: number | null
    passedScenarios: number | null
    failedScenarios: number | null
    reliabilityScore: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EvaluationJobCountAggregateOutputType = {
    id: number
    agentVersionId: number
    status: number
    triggerSource: number
    totalScenarios: number
    passedScenarios: number
    failedScenarios: number
    reliabilityScore: number
    summaryMetrics: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EvaluationJobAvgAggregateInputType = {
    totalScenarios?: true
    passedScenarios?: true
    failedScenarios?: true
    reliabilityScore?: true
  }

  export type EvaluationJobSumAggregateInputType = {
    totalScenarios?: true
    passedScenarios?: true
    failedScenarios?: true
    reliabilityScore?: true
  }

  export type EvaluationJobMinAggregateInputType = {
    id?: true
    agentVersionId?: true
    status?: true
    triggerSource?: true
    totalScenarios?: true
    passedScenarios?: true
    failedScenarios?: true
    reliabilityScore?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationJobMaxAggregateInputType = {
    id?: true
    agentVersionId?: true
    status?: true
    triggerSource?: true
    totalScenarios?: true
    passedScenarios?: true
    failedScenarios?: true
    reliabilityScore?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EvaluationJobCountAggregateInputType = {
    id?: true
    agentVersionId?: true
    status?: true
    triggerSource?: true
    totalScenarios?: true
    passedScenarios?: true
    failedScenarios?: true
    reliabilityScore?: true
    summaryMetrics?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EvaluationJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationJob to aggregate.
     */
    where?: EvaluationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationJobs to fetch.
     */
    orderBy?: EvaluationJobOrderByWithRelationInput | EvaluationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvaluationJobs
    **/
    _count?: true | EvaluationJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationJobMaxAggregateInputType
  }

  export type GetEvaluationJobAggregateType<T extends EvaluationJobAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluationJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluationJob[P]>
      : GetScalarType<T[P], AggregateEvaluationJob[P]>
  }




  export type EvaluationJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationJobWhereInput
    orderBy?: EvaluationJobOrderByWithAggregationInput | EvaluationJobOrderByWithAggregationInput[]
    by: EvaluationJobScalarFieldEnum[] | EvaluationJobScalarFieldEnum
    having?: EvaluationJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationJobCountAggregateInputType | true
    _avg?: EvaluationJobAvgAggregateInputType
    _sum?: EvaluationJobSumAggregateInputType
    _min?: EvaluationJobMinAggregateInputType
    _max?: EvaluationJobMaxAggregateInputType
  }

  export type EvaluationJobGroupByOutputType = {
    id: string
    agentVersionId: string
    status: string
    triggerSource: string
    totalScenarios: number
    passedScenarios: number
    failedScenarios: number
    reliabilityScore: number | null
    summaryMetrics: JsonValue | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EvaluationJobCountAggregateOutputType | null
    _avg: EvaluationJobAvgAggregateOutputType | null
    _sum: EvaluationJobSumAggregateOutputType | null
    _min: EvaluationJobMinAggregateOutputType | null
    _max: EvaluationJobMaxAggregateOutputType | null
  }

  type GetEvaluationJobGroupByPayload<T extends EvaluationJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationJobGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationJobGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentVersionId?: boolean
    status?: boolean
    triggerSource?: boolean
    totalScenarios?: boolean
    passedScenarios?: boolean
    failedScenarios?: boolean
    reliabilityScore?: boolean
    summaryMetrics?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    runs?: boolean | EvaluationJob$runsArgs<ExtArgs>
    _count?: boolean | EvaluationJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationJob"]>

  export type EvaluationJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentVersionId?: boolean
    status?: boolean
    triggerSource?: boolean
    totalScenarios?: boolean
    passedScenarios?: boolean
    failedScenarios?: boolean
    reliabilityScore?: boolean
    summaryMetrics?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationJob"]>

  export type EvaluationJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentVersionId?: boolean
    status?: boolean
    triggerSource?: boolean
    totalScenarios?: boolean
    passedScenarios?: boolean
    failedScenarios?: boolean
    reliabilityScore?: boolean
    summaryMetrics?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationJob"]>

  export type EvaluationJobSelectScalar = {
    id?: boolean
    agentVersionId?: boolean
    status?: boolean
    triggerSource?: boolean
    totalScenarios?: boolean
    passedScenarios?: boolean
    failedScenarios?: boolean
    reliabilityScore?: boolean
    summaryMetrics?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EvaluationJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentVersionId" | "status" | "triggerSource" | "totalScenarios" | "passedScenarios" | "failedScenarios" | "reliabilityScore" | "summaryMetrics" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["evaluationJob"]>
  export type EvaluationJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    runs?: boolean | EvaluationJob$runsArgs<ExtArgs>
    _count?: boolean | EvaluationJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvaluationJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
  }
  export type EvaluationJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
  }

  export type $EvaluationJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvaluationJob"
    objects: {
      agentVersion: Prisma.$AgentVersionPayload<ExtArgs>
      runs: Prisma.$RunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentVersionId: string
      status: string
      triggerSource: string
      totalScenarios: number
      passedScenarios: number
      failedScenarios: number
      reliabilityScore: number | null
      summaryMetrics: Prisma.JsonValue | null
      errorMessage: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["evaluationJob"]>
    composites: {}
  }

  type EvaluationJobGetPayload<S extends boolean | null | undefined | EvaluationJobDefaultArgs> = $Result.GetResult<Prisma.$EvaluationJobPayload, S>

  type EvaluationJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationJobCountAggregateInputType | true
    }

  export interface EvaluationJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvaluationJob'], meta: { name: 'EvaluationJob' } }
    /**
     * Find zero or one EvaluationJob that matches the filter.
     * @param {EvaluationJobFindUniqueArgs} args - Arguments to find a EvaluationJob
     * @example
     * // Get one EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationJobFindUniqueArgs>(args: SelectSubset<T, EvaluationJobFindUniqueArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvaluationJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationJobFindUniqueOrThrowArgs} args - Arguments to find a EvaluationJob
     * @example
     * // Get one EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationJobFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobFindFirstArgs} args - Arguments to find a EvaluationJob
     * @example
     * // Get one EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationJobFindFirstArgs>(args?: SelectSubset<T, EvaluationJobFindFirstArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobFindFirstOrThrowArgs} args - Arguments to find a EvaluationJob
     * @example
     * // Get one EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationJobFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvaluationJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvaluationJobs
     * const evaluationJobs = await prisma.evaluationJob.findMany()
     * 
     * // Get first 10 EvaluationJobs
     * const evaluationJobs = await prisma.evaluationJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationJobWithIdOnly = await prisma.evaluationJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationJobFindManyArgs>(args?: SelectSubset<T, EvaluationJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvaluationJob.
     * @param {EvaluationJobCreateArgs} args - Arguments to create a EvaluationJob.
     * @example
     * // Create one EvaluationJob
     * const EvaluationJob = await prisma.evaluationJob.create({
     *   data: {
     *     // ... data to create a EvaluationJob
     *   }
     * })
     * 
     */
    create<T extends EvaluationJobCreateArgs>(args: SelectSubset<T, EvaluationJobCreateArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvaluationJobs.
     * @param {EvaluationJobCreateManyArgs} args - Arguments to create many EvaluationJobs.
     * @example
     * // Create many EvaluationJobs
     * const evaluationJob = await prisma.evaluationJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationJobCreateManyArgs>(args?: SelectSubset<T, EvaluationJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvaluationJobs and returns the data saved in the database.
     * @param {EvaluationJobCreateManyAndReturnArgs} args - Arguments to create many EvaluationJobs.
     * @example
     * // Create many EvaluationJobs
     * const evaluationJob = await prisma.evaluationJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvaluationJobs and only return the `id`
     * const evaluationJobWithIdOnly = await prisma.evaluationJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationJobCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvaluationJob.
     * @param {EvaluationJobDeleteArgs} args - Arguments to delete one EvaluationJob.
     * @example
     * // Delete one EvaluationJob
     * const EvaluationJob = await prisma.evaluationJob.delete({
     *   where: {
     *     // ... filter to delete one EvaluationJob
     *   }
     * })
     * 
     */
    delete<T extends EvaluationJobDeleteArgs>(args: SelectSubset<T, EvaluationJobDeleteArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvaluationJob.
     * @param {EvaluationJobUpdateArgs} args - Arguments to update one EvaluationJob.
     * @example
     * // Update one EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationJobUpdateArgs>(args: SelectSubset<T, EvaluationJobUpdateArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvaluationJobs.
     * @param {EvaluationJobDeleteManyArgs} args - Arguments to filter EvaluationJobs to delete.
     * @example
     * // Delete a few EvaluationJobs
     * const { count } = await prisma.evaluationJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationJobDeleteManyArgs>(args?: SelectSubset<T, EvaluationJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvaluationJobs
     * const evaluationJob = await prisma.evaluationJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationJobUpdateManyArgs>(args: SelectSubset<T, EvaluationJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationJobs and returns the data updated in the database.
     * @param {EvaluationJobUpdateManyAndReturnArgs} args - Arguments to update many EvaluationJobs.
     * @example
     * // Update many EvaluationJobs
     * const evaluationJob = await prisma.evaluationJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvaluationJobs and only return the `id`
     * const evaluationJobWithIdOnly = await prisma.evaluationJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvaluationJobUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvaluationJob.
     * @param {EvaluationJobUpsertArgs} args - Arguments to update or create a EvaluationJob.
     * @example
     * // Update or create a EvaluationJob
     * const evaluationJob = await prisma.evaluationJob.upsert({
     *   create: {
     *     // ... data to create a EvaluationJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvaluationJob we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationJobUpsertArgs>(args: SelectSubset<T, EvaluationJobUpsertArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvaluationJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobCountArgs} args - Arguments to filter EvaluationJobs to count.
     * @example
     * // Count the number of EvaluationJobs
     * const count = await prisma.evaluationJob.count({
     *   where: {
     *     // ... the filter for the EvaluationJobs we want to count
     *   }
     * })
    **/
    count<T extends EvaluationJobCountArgs>(
      args?: Subset<T, EvaluationJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvaluationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationJobAggregateArgs>(args: Subset<T, EvaluationJobAggregateArgs>): Prisma.PrismaPromise<GetEvaluationJobAggregateType<T>>

    /**
     * Group by EvaluationJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationJobGroupByArgs} args - Group by arguments.
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
      T extends EvaluationJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationJobGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvaluationJob model
   */
  readonly fields: EvaluationJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvaluationJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentVersion<T extends AgentVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentVersionDefaultArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runs<T extends EvaluationJob$runsArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationJob$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EvaluationJob model
   */
  interface EvaluationJobFieldRefs {
    readonly id: FieldRef<"EvaluationJob", 'String'>
    readonly agentVersionId: FieldRef<"EvaluationJob", 'String'>
    readonly status: FieldRef<"EvaluationJob", 'String'>
    readonly triggerSource: FieldRef<"EvaluationJob", 'String'>
    readonly totalScenarios: FieldRef<"EvaluationJob", 'Int'>
    readonly passedScenarios: FieldRef<"EvaluationJob", 'Int'>
    readonly failedScenarios: FieldRef<"EvaluationJob", 'Int'>
    readonly reliabilityScore: FieldRef<"EvaluationJob", 'Float'>
    readonly summaryMetrics: FieldRef<"EvaluationJob", 'Json'>
    readonly errorMessage: FieldRef<"EvaluationJob", 'String'>
    readonly startedAt: FieldRef<"EvaluationJob", 'DateTime'>
    readonly completedAt: FieldRef<"EvaluationJob", 'DateTime'>
    readonly createdAt: FieldRef<"EvaluationJob", 'DateTime'>
    readonly updatedAt: FieldRef<"EvaluationJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvaluationJob findUnique
   */
  export type EvaluationJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationJob to fetch.
     */
    where: EvaluationJobWhereUniqueInput
  }

  /**
   * EvaluationJob findUniqueOrThrow
   */
  export type EvaluationJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationJob to fetch.
     */
    where: EvaluationJobWhereUniqueInput
  }

  /**
   * EvaluationJob findFirst
   */
  export type EvaluationJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationJob to fetch.
     */
    where?: EvaluationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationJobs to fetch.
     */
    orderBy?: EvaluationJobOrderByWithRelationInput | EvaluationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationJobs.
     */
    cursor?: EvaluationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationJobs.
     */
    distinct?: EvaluationJobScalarFieldEnum | EvaluationJobScalarFieldEnum[]
  }

  /**
   * EvaluationJob findFirstOrThrow
   */
  export type EvaluationJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationJob to fetch.
     */
    where?: EvaluationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationJobs to fetch.
     */
    orderBy?: EvaluationJobOrderByWithRelationInput | EvaluationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationJobs.
     */
    cursor?: EvaluationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationJobs.
     */
    distinct?: EvaluationJobScalarFieldEnum | EvaluationJobScalarFieldEnum[]
  }

  /**
   * EvaluationJob findMany
   */
  export type EvaluationJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationJobs to fetch.
     */
    where?: EvaluationJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationJobs to fetch.
     */
    orderBy?: EvaluationJobOrderByWithRelationInput | EvaluationJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvaluationJobs.
     */
    cursor?: EvaluationJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationJobs.
     */
    distinct?: EvaluationJobScalarFieldEnum | EvaluationJobScalarFieldEnum[]
  }

  /**
   * EvaluationJob create
   */
  export type EvaluationJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * The data needed to create a EvaluationJob.
     */
    data: XOR<EvaluationJobCreateInput, EvaluationJobUncheckedCreateInput>
  }

  /**
   * EvaluationJob createMany
   */
  export type EvaluationJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvaluationJobs.
     */
    data: EvaluationJobCreateManyInput | EvaluationJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationJob createManyAndReturn
   */
  export type EvaluationJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * The data used to create many EvaluationJobs.
     */
    data: EvaluationJobCreateManyInput | EvaluationJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationJob update
   */
  export type EvaluationJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * The data needed to update a EvaluationJob.
     */
    data: XOR<EvaluationJobUpdateInput, EvaluationJobUncheckedUpdateInput>
    /**
     * Choose, which EvaluationJob to update.
     */
    where: EvaluationJobWhereUniqueInput
  }

  /**
   * EvaluationJob updateMany
   */
  export type EvaluationJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvaluationJobs.
     */
    data: XOR<EvaluationJobUpdateManyMutationInput, EvaluationJobUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationJobs to update
     */
    where?: EvaluationJobWhereInput
    /**
     * Limit how many EvaluationJobs to update.
     */
    limit?: number
  }

  /**
   * EvaluationJob updateManyAndReturn
   */
  export type EvaluationJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * The data used to update EvaluationJobs.
     */
    data: XOR<EvaluationJobUpdateManyMutationInput, EvaluationJobUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationJobs to update
     */
    where?: EvaluationJobWhereInput
    /**
     * Limit how many EvaluationJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationJob upsert
   */
  export type EvaluationJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * The filter to search for the EvaluationJob to update in case it exists.
     */
    where: EvaluationJobWhereUniqueInput
    /**
     * In case the EvaluationJob found by the `where` argument doesn't exist, create a new EvaluationJob with this data.
     */
    create: XOR<EvaluationJobCreateInput, EvaluationJobUncheckedCreateInput>
    /**
     * In case the EvaluationJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationJobUpdateInput, EvaluationJobUncheckedUpdateInput>
  }

  /**
   * EvaluationJob delete
   */
  export type EvaluationJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
    /**
     * Filter which EvaluationJob to delete.
     */
    where: EvaluationJobWhereUniqueInput
  }

  /**
   * EvaluationJob deleteMany
   */
  export type EvaluationJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationJobs to delete
     */
    where?: EvaluationJobWhereInput
    /**
     * Limit how many EvaluationJobs to delete.
     */
    limit?: number
  }

  /**
   * EvaluationJob.runs
   */
  export type EvaluationJob$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * EvaluationJob without action
   */
  export type EvaluationJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationJob
     */
    select?: EvaluationJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationJob
     */
    omit?: EvaluationJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationJobInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    prompt: string | null
    category: string | null
    riskType: string | null
    expectedBehavior: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    prompt: string | null
    category: string | null
    riskType: string | null
    expectedBehavior: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    agentId: number
    prompt: number
    category: number
    riskType: number
    expectedBehavior: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScenarioMinAggregateInputType = {
    id?: true
    agentId?: true
    prompt?: true
    category?: true
    riskType?: true
    expectedBehavior?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    agentId?: true
    prompt?: true
    category?: true
    riskType?: true
    expectedBehavior?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    agentId?: true
    prompt?: true
    category?: true
    riskType?: true
    expectedBehavior?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    agentId: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ScenarioCountAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    prompt?: boolean
    category?: boolean
    riskType?: boolean
    expectedBehavior?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    runs?: boolean | Scenario$runsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    prompt?: boolean
    category?: boolean
    riskType?: boolean
    expectedBehavior?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    prompt?: boolean
    category?: boolean
    riskType?: boolean
    expectedBehavior?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    agentId?: boolean
    prompt?: boolean
    category?: boolean
    riskType?: boolean
    expectedBehavior?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "prompt" | "category" | "riskType" | "expectedBehavior" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    runs?: boolean | Scenario$runsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      runs: Prisma.$RunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      prompt: string
      category: string
      riskType: string
      expectedBehavior: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
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
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runs<T extends Scenario$runsArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly agentId: FieldRef<"Scenario", 'String'>
    readonly prompt: FieldRef<"Scenario", 'String'>
    readonly category: FieldRef<"Scenario", 'String'>
    readonly riskType: FieldRef<"Scenario", 'String'>
    readonly expectedBehavior: FieldRef<"Scenario", 'String'>
    readonly metadata: FieldRef<"Scenario", 'Json'>
    readonly createdAt: FieldRef<"Scenario", 'DateTime'>
    readonly updatedAt: FieldRef<"Scenario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario.runs
   */
  export type Scenario$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model Run
   */

  export type AggregateRun = {
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  export type RunAvgAggregateOutputType = {
    durationMs: number | null
  }

  export type RunSumAggregateOutputType = {
    durationMs: number | null
  }

  export type RunMinAggregateOutputType = {
    id: string | null
    evaluationJobId: string | null
    agentVersionId: string | null
    scenarioId: string | null
    status: string | null
    durationMs: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RunMaxAggregateOutputType = {
    id: string | null
    evaluationJobId: string | null
    agentVersionId: string | null
    scenarioId: string | null
    status: string | null
    durationMs: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RunCountAggregateOutputType = {
    id: number
    evaluationJobId: number
    agentVersionId: number
    scenarioId: number
    status: number
    durationMs: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RunAvgAggregateInputType = {
    durationMs?: true
  }

  export type RunSumAggregateInputType = {
    durationMs?: true
  }

  export type RunMinAggregateInputType = {
    id?: true
    evaluationJobId?: true
    agentVersionId?: true
    scenarioId?: true
    status?: true
    durationMs?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RunMaxAggregateInputType = {
    id?: true
    evaluationJobId?: true
    agentVersionId?: true
    scenarioId?: true
    status?: true
    durationMs?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RunCountAggregateInputType = {
    id?: true
    evaluationJobId?: true
    agentVersionId?: true
    scenarioId?: true
    status?: true
    durationMs?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Run to aggregate.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Runs
    **/
    _count?: true | RunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunMaxAggregateInputType
  }

  export type GetRunAggregateType<T extends RunAggregateArgs> = {
        [P in keyof T & keyof AggregateRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRun[P]>
      : GetScalarType<T[P], AggregateRun[P]>
  }




  export type RunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
    orderBy?: RunOrderByWithAggregationInput | RunOrderByWithAggregationInput[]
    by: RunScalarFieldEnum[] | RunScalarFieldEnum
    having?: RunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCountAggregateInputType | true
    _avg?: RunAvgAggregateInputType
    _sum?: RunSumAggregateInputType
    _min?: RunMinAggregateInputType
    _max?: RunMaxAggregateInputType
  }

  export type RunGroupByOutputType = {
    id: string
    evaluationJobId: string
    agentVersionId: string
    scenarioId: string
    status: string
    durationMs: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  type GetRunGroupByPayload<T extends RunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunGroupByOutputType[P]>
            : GetScalarType<T[P], RunGroupByOutputType[P]>
        }
      >
    >


  export type RunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationJobId?: boolean
    agentVersionId?: boolean
    scenarioId?: boolean
    status?: boolean
    durationMs?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    trace?: boolean | Run$traceArgs<ExtArgs>
    classification?: boolean | Run$classificationArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationJobId?: boolean
    agentVersionId?: boolean
    scenarioId?: boolean
    status?: boolean
    durationMs?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationJobId?: boolean
    agentVersionId?: boolean
    scenarioId?: boolean
    status?: boolean
    durationMs?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectScalar = {
    id?: boolean
    evaluationJobId?: boolean
    agentVersionId?: boolean
    scenarioId?: boolean
    status?: boolean
    durationMs?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evaluationJobId" | "agentVersionId" | "scenarioId" | "status" | "durationMs" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["run"]>
  export type RunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    trace?: boolean | Run$traceArgs<ExtArgs>
    classification?: boolean | Run$classificationArgs<ExtArgs>
  }
  export type RunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }
  export type RunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluationJob?: boolean | EvaluationJobDefaultArgs<ExtArgs>
    agentVersion?: boolean | AgentVersionDefaultArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
  }

  export type $RunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Run"
    objects: {
      evaluationJob: Prisma.$EvaluationJobPayload<ExtArgs>
      agentVersion: Prisma.$AgentVersionPayload<ExtArgs>
      scenario: Prisma.$ScenarioPayload<ExtArgs>
      trace: Prisma.$TracePayload<ExtArgs> | null
      classification: Prisma.$ClassificationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evaluationJobId: string
      agentVersionId: string
      scenarioId: string
      status: string
      durationMs: number | null
      errorMessage: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["run"]>
    composites: {}
  }

  type RunGetPayload<S extends boolean | null | undefined | RunDefaultArgs> = $Result.GetResult<Prisma.$RunPayload, S>

  type RunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunCountAggregateInputType | true
    }

  export interface RunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Run'], meta: { name: 'Run' } }
    /**
     * Find zero or one Run that matches the filter.
     * @param {RunFindUniqueArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFindUniqueArgs>(args: SelectSubset<T, RunFindUniqueArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFindUniqueOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFindFirstArgs>(args?: SelectSubset<T, RunFindFirstArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.run.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runWithIdOnly = await prisma.run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFindManyArgs>(args?: SelectSubset<T, RunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Run.
     * @param {RunCreateArgs} args - Arguments to create a Run.
     * @example
     * // Create one Run
     * const Run = await prisma.run.create({
     *   data: {
     *     // ... data to create a Run
     *   }
     * })
     * 
     */
    create<T extends RunCreateArgs>(args: SelectSubset<T, RunCreateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Runs.
     * @param {RunCreateManyArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunCreateManyArgs>(args?: SelectSubset<T, RunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Runs and returns the data saved in the database.
     * @param {RunCreateManyAndReturnArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunCreateManyAndReturnArgs>(args?: SelectSubset<T, RunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Run.
     * @param {RunDeleteArgs} args - Arguments to delete one Run.
     * @example
     * // Delete one Run
     * const Run = await prisma.run.delete({
     *   where: {
     *     // ... filter to delete one Run
     *   }
     * })
     * 
     */
    delete<T extends RunDeleteArgs>(args: SelectSubset<T, RunDeleteArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Run.
     * @param {RunUpdateArgs} args - Arguments to update one Run.
     * @example
     * // Update one Run
     * const run = await prisma.run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunUpdateArgs>(args: SelectSubset<T, RunUpdateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Runs.
     * @param {RunDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunDeleteManyArgs>(args?: SelectSubset<T, RunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunUpdateManyArgs>(args: SelectSubset<T, RunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs and returns the data updated in the database.
     * @param {RunUpdateManyAndReturnArgs} args - Arguments to update many Runs.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunUpdateManyAndReturnArgs>(args: SelectSubset<T, RunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Run.
     * @param {RunUpsertArgs} args - Arguments to update or create a Run.
     * @example
     * // Update or create a Run
     * const run = await prisma.run.upsert({
     *   create: {
     *     // ... data to create a Run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Run we want to update
     *   }
     * })
     */
    upsert<T extends RunUpsertArgs>(args: SelectSubset<T, RunUpsertArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.run.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends RunCountArgs>(
      args?: Subset<T, RunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunAggregateArgs>(args: Subset<T, RunAggregateArgs>): Prisma.PrismaPromise<GetRunAggregateType<T>>

    /**
     * Group by Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunGroupByArgs} args - Group by arguments.
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
      T extends RunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunGroupByArgs['orderBy'] }
        : { orderBy?: RunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Run model
   */
  readonly fields: RunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluationJob<T extends EvaluationJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationJobDefaultArgs<ExtArgs>>): Prisma__EvaluationJobClient<$Result.GetResult<Prisma.$EvaluationJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agentVersion<T extends AgentVersionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentVersionDefaultArgs<ExtArgs>>): Prisma__AgentVersionClient<$Result.GetResult<Prisma.$AgentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trace<T extends Run$traceArgs<ExtArgs> = {}>(args?: Subset<T, Run$traceArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    classification<T extends Run$classificationArgs<ExtArgs> = {}>(args?: Subset<T, Run$classificationArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Run model
   */
  interface RunFieldRefs {
    readonly id: FieldRef<"Run", 'String'>
    readonly evaluationJobId: FieldRef<"Run", 'String'>
    readonly agentVersionId: FieldRef<"Run", 'String'>
    readonly scenarioId: FieldRef<"Run", 'String'>
    readonly status: FieldRef<"Run", 'String'>
    readonly durationMs: FieldRef<"Run", 'Int'>
    readonly errorMessage: FieldRef<"Run", 'String'>
    readonly startedAt: FieldRef<"Run", 'DateTime'>
    readonly completedAt: FieldRef<"Run", 'DateTime'>
    readonly createdAt: FieldRef<"Run", 'DateTime'>
    readonly updatedAt: FieldRef<"Run", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Run findUnique
   */
  export type RunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findUniqueOrThrow
   */
  export type RunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findFirst
   */
  export type RunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findFirstOrThrow
   */
  export type RunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findMany
   */
  export type RunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Runs to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run create
   */
  export type RunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to create a Run.
     */
    data: XOR<RunCreateInput, RunUncheckedCreateInput>
  }

  /**
   * Run createMany
   */
  export type RunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Run createManyAndReturn
   */
  export type RunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run update
   */
  export type RunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to update a Run.
     */
    data: XOR<RunUpdateInput, RunUncheckedUpdateInput>
    /**
     * Choose, which Run to update.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run updateMany
   */
  export type RunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run updateManyAndReturn
   */
  export type RunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run upsert
   */
  export type RunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The filter to search for the Run to update in case it exists.
     */
    where: RunWhereUniqueInput
    /**
     * In case the Run found by the `where` argument doesn't exist, create a new Run with this data.
     */
    create: XOR<RunCreateInput, RunUncheckedCreateInput>
    /**
     * In case the Run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunUpdateInput, RunUncheckedUpdateInput>
  }

  /**
   * Run delete
   */
  export type RunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter which Run to delete.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run deleteMany
   */
  export type RunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Runs to delete
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to delete.
     */
    limit?: number
  }

  /**
   * Run.trace
   */
  export type Run$traceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    where?: TraceWhereInput
  }

  /**
   * Run.classification
   */
  export type Run$classificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    where?: ClassificationWhereInput
  }

  /**
   * Run without action
   */
  export type RunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
  }


  /**
   * Model Trace
   */

  export type AggregateTrace = {
    _count: TraceCountAggregateOutputType | null
    _avg: TraceAvgAggregateOutputType | null
    _sum: TraceSumAggregateOutputType | null
    _min: TraceMinAggregateOutputType | null
    _max: TraceMaxAggregateOutputType | null
  }

  export type TraceAvgAggregateOutputType = {
    turnCount: number | null
    toolCallsCount: number | null
  }

  export type TraceSumAggregateOutputType = {
    turnCount: number | null
    toolCallsCount: number | null
  }

  export type TraceMinAggregateOutputType = {
    id: string | null
    runId: string | null
    turnCount: number | null
    hitTurnLimit: boolean | null
    toolCallsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TraceMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    turnCount: number | null
    hitTurnLimit: boolean | null
    toolCallsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TraceCountAggregateOutputType = {
    id: number
    runId: number
    messages: number
    turnCount: number
    hitTurnLimit: number
    toolCallsCount: number
    rawUsage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TraceAvgAggregateInputType = {
    turnCount?: true
    toolCallsCount?: true
  }

  export type TraceSumAggregateInputType = {
    turnCount?: true
    toolCallsCount?: true
  }

  export type TraceMinAggregateInputType = {
    id?: true
    runId?: true
    turnCount?: true
    hitTurnLimit?: true
    toolCallsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TraceMaxAggregateInputType = {
    id?: true
    runId?: true
    turnCount?: true
    hitTurnLimit?: true
    toolCallsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TraceCountAggregateInputType = {
    id?: true
    runId?: true
    messages?: true
    turnCount?: true
    hitTurnLimit?: true
    toolCallsCount?: true
    rawUsage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TraceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trace to aggregate.
     */
    where?: TraceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traces to fetch.
     */
    orderBy?: TraceOrderByWithRelationInput | TraceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traces
    **/
    _count?: true | TraceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraceMaxAggregateInputType
  }

  export type GetTraceAggregateType<T extends TraceAggregateArgs> = {
        [P in keyof T & keyof AggregateTrace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrace[P]>
      : GetScalarType<T[P], AggregateTrace[P]>
  }




  export type TraceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraceWhereInput
    orderBy?: TraceOrderByWithAggregationInput | TraceOrderByWithAggregationInput[]
    by: TraceScalarFieldEnum[] | TraceScalarFieldEnum
    having?: TraceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraceCountAggregateInputType | true
    _avg?: TraceAvgAggregateInputType
    _sum?: TraceSumAggregateInputType
    _min?: TraceMinAggregateInputType
    _max?: TraceMaxAggregateInputType
  }

  export type TraceGroupByOutputType = {
    id: string
    runId: string
    messages: JsonValue
    turnCount: number
    hitTurnLimit: boolean
    toolCallsCount: number
    rawUsage: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TraceCountAggregateOutputType | null
    _avg: TraceAvgAggregateOutputType | null
    _sum: TraceSumAggregateOutputType | null
    _min: TraceMinAggregateOutputType | null
    _max: TraceMaxAggregateOutputType | null
  }

  type GetTraceGroupByPayload<T extends TraceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraceGroupByOutputType[P]>
            : GetScalarType<T[P], TraceGroupByOutputType[P]>
        }
      >
    >


  export type TraceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    messages?: boolean
    turnCount?: boolean
    hitTurnLimit?: boolean
    toolCallsCount?: boolean
    rawUsage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trace"]>

  export type TraceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    messages?: boolean
    turnCount?: boolean
    hitTurnLimit?: boolean
    toolCallsCount?: boolean
    rawUsage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trace"]>

  export type TraceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    messages?: boolean
    turnCount?: boolean
    hitTurnLimit?: boolean
    toolCallsCount?: boolean
    rawUsage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trace"]>

  export type TraceSelectScalar = {
    id?: boolean
    runId?: boolean
    messages?: boolean
    turnCount?: boolean
    hitTurnLimit?: boolean
    toolCallsCount?: boolean
    rawUsage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TraceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "messages" | "turnCount" | "hitTurnLimit" | "toolCallsCount" | "rawUsage" | "createdAt" | "updatedAt", ExtArgs["result"]["trace"]>
  export type TraceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type TraceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type TraceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }

  export type $TracePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trace"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      messages: Prisma.JsonValue
      turnCount: number
      hitTurnLimit: boolean
      toolCallsCount: number
      rawUsage: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trace"]>
    composites: {}
  }

  type TraceGetPayload<S extends boolean | null | undefined | TraceDefaultArgs> = $Result.GetResult<Prisma.$TracePayload, S>

  type TraceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraceCountAggregateInputType | true
    }

  export interface TraceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trace'], meta: { name: 'Trace' } }
    /**
     * Find zero or one Trace that matches the filter.
     * @param {TraceFindUniqueArgs} args - Arguments to find a Trace
     * @example
     * // Get one Trace
     * const trace = await prisma.trace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraceFindUniqueArgs>(args: SelectSubset<T, TraceFindUniqueArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraceFindUniqueOrThrowArgs} args - Arguments to find a Trace
     * @example
     * // Get one Trace
     * const trace = await prisma.trace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraceFindUniqueOrThrowArgs>(args: SelectSubset<T, TraceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceFindFirstArgs} args - Arguments to find a Trace
     * @example
     * // Get one Trace
     * const trace = await prisma.trace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraceFindFirstArgs>(args?: SelectSubset<T, TraceFindFirstArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceFindFirstOrThrowArgs} args - Arguments to find a Trace
     * @example
     * // Get one Trace
     * const trace = await prisma.trace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraceFindFirstOrThrowArgs>(args?: SelectSubset<T, TraceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traces
     * const traces = await prisma.trace.findMany()
     * 
     * // Get first 10 Traces
     * const traces = await prisma.trace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traceWithIdOnly = await prisma.trace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraceFindManyArgs>(args?: SelectSubset<T, TraceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trace.
     * @param {TraceCreateArgs} args - Arguments to create a Trace.
     * @example
     * // Create one Trace
     * const Trace = await prisma.trace.create({
     *   data: {
     *     // ... data to create a Trace
     *   }
     * })
     * 
     */
    create<T extends TraceCreateArgs>(args: SelectSubset<T, TraceCreateArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traces.
     * @param {TraceCreateManyArgs} args - Arguments to create many Traces.
     * @example
     * // Create many Traces
     * const trace = await prisma.trace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraceCreateManyArgs>(args?: SelectSubset<T, TraceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traces and returns the data saved in the database.
     * @param {TraceCreateManyAndReturnArgs} args - Arguments to create many Traces.
     * @example
     * // Create many Traces
     * const trace = await prisma.trace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traces and only return the `id`
     * const traceWithIdOnly = await prisma.trace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraceCreateManyAndReturnArgs>(args?: SelectSubset<T, TraceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trace.
     * @param {TraceDeleteArgs} args - Arguments to delete one Trace.
     * @example
     * // Delete one Trace
     * const Trace = await prisma.trace.delete({
     *   where: {
     *     // ... filter to delete one Trace
     *   }
     * })
     * 
     */
    delete<T extends TraceDeleteArgs>(args: SelectSubset<T, TraceDeleteArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trace.
     * @param {TraceUpdateArgs} args - Arguments to update one Trace.
     * @example
     * // Update one Trace
     * const trace = await prisma.trace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraceUpdateArgs>(args: SelectSubset<T, TraceUpdateArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traces.
     * @param {TraceDeleteManyArgs} args - Arguments to filter Traces to delete.
     * @example
     * // Delete a few Traces
     * const { count } = await prisma.trace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraceDeleteManyArgs>(args?: SelectSubset<T, TraceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traces
     * const trace = await prisma.trace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraceUpdateManyArgs>(args: SelectSubset<T, TraceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traces and returns the data updated in the database.
     * @param {TraceUpdateManyAndReturnArgs} args - Arguments to update many Traces.
     * @example
     * // Update many Traces
     * const trace = await prisma.trace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Traces and only return the `id`
     * const traceWithIdOnly = await prisma.trace.updateManyAndReturn({
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
    updateManyAndReturn<T extends TraceUpdateManyAndReturnArgs>(args: SelectSubset<T, TraceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trace.
     * @param {TraceUpsertArgs} args - Arguments to update or create a Trace.
     * @example
     * // Update or create a Trace
     * const trace = await prisma.trace.upsert({
     *   create: {
     *     // ... data to create a Trace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trace we want to update
     *   }
     * })
     */
    upsert<T extends TraceUpsertArgs>(args: SelectSubset<T, TraceUpsertArgs<ExtArgs>>): Prisma__TraceClient<$Result.GetResult<Prisma.$TracePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceCountArgs} args - Arguments to filter Traces to count.
     * @example
     * // Count the number of Traces
     * const count = await prisma.trace.count({
     *   where: {
     *     // ... the filter for the Traces we want to count
     *   }
     * })
    **/
    count<T extends TraceCountArgs>(
      args?: Subset<T, TraceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TraceAggregateArgs>(args: Subset<T, TraceAggregateArgs>): Prisma.PrismaPromise<GetTraceAggregateType<T>>

    /**
     * Group by Trace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraceGroupByArgs} args - Group by arguments.
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
      T extends TraceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraceGroupByArgs['orderBy'] }
        : { orderBy?: TraceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TraceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trace model
   */
  readonly fields: TraceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trace model
   */
  interface TraceFieldRefs {
    readonly id: FieldRef<"Trace", 'String'>
    readonly runId: FieldRef<"Trace", 'String'>
    readonly messages: FieldRef<"Trace", 'Json'>
    readonly turnCount: FieldRef<"Trace", 'Int'>
    readonly hitTurnLimit: FieldRef<"Trace", 'Boolean'>
    readonly toolCallsCount: FieldRef<"Trace", 'Int'>
    readonly rawUsage: FieldRef<"Trace", 'Json'>
    readonly createdAt: FieldRef<"Trace", 'DateTime'>
    readonly updatedAt: FieldRef<"Trace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trace findUnique
   */
  export type TraceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter, which Trace to fetch.
     */
    where: TraceWhereUniqueInput
  }

  /**
   * Trace findUniqueOrThrow
   */
  export type TraceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter, which Trace to fetch.
     */
    where: TraceWhereUniqueInput
  }

  /**
   * Trace findFirst
   */
  export type TraceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter, which Trace to fetch.
     */
    where?: TraceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traces to fetch.
     */
    orderBy?: TraceOrderByWithRelationInput | TraceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traces.
     */
    cursor?: TraceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traces.
     */
    distinct?: TraceScalarFieldEnum | TraceScalarFieldEnum[]
  }

  /**
   * Trace findFirstOrThrow
   */
  export type TraceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter, which Trace to fetch.
     */
    where?: TraceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traces to fetch.
     */
    orderBy?: TraceOrderByWithRelationInput | TraceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traces.
     */
    cursor?: TraceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traces.
     */
    distinct?: TraceScalarFieldEnum | TraceScalarFieldEnum[]
  }

  /**
   * Trace findMany
   */
  export type TraceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter, which Traces to fetch.
     */
    where?: TraceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traces to fetch.
     */
    orderBy?: TraceOrderByWithRelationInput | TraceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traces.
     */
    cursor?: TraceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traces.
     */
    distinct?: TraceScalarFieldEnum | TraceScalarFieldEnum[]
  }

  /**
   * Trace create
   */
  export type TraceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * The data needed to create a Trace.
     */
    data: XOR<TraceCreateInput, TraceUncheckedCreateInput>
  }

  /**
   * Trace createMany
   */
  export type TraceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traces.
     */
    data: TraceCreateManyInput | TraceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trace createManyAndReturn
   */
  export type TraceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * The data used to create many Traces.
     */
    data: TraceCreateManyInput | TraceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trace update
   */
  export type TraceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * The data needed to update a Trace.
     */
    data: XOR<TraceUpdateInput, TraceUncheckedUpdateInput>
    /**
     * Choose, which Trace to update.
     */
    where: TraceWhereUniqueInput
  }

  /**
   * Trace updateMany
   */
  export type TraceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traces.
     */
    data: XOR<TraceUpdateManyMutationInput, TraceUncheckedUpdateManyInput>
    /**
     * Filter which Traces to update
     */
    where?: TraceWhereInput
    /**
     * Limit how many Traces to update.
     */
    limit?: number
  }

  /**
   * Trace updateManyAndReturn
   */
  export type TraceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * The data used to update Traces.
     */
    data: XOR<TraceUpdateManyMutationInput, TraceUncheckedUpdateManyInput>
    /**
     * Filter which Traces to update
     */
    where?: TraceWhereInput
    /**
     * Limit how many Traces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trace upsert
   */
  export type TraceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * The filter to search for the Trace to update in case it exists.
     */
    where: TraceWhereUniqueInput
    /**
     * In case the Trace found by the `where` argument doesn't exist, create a new Trace with this data.
     */
    create: XOR<TraceCreateInput, TraceUncheckedCreateInput>
    /**
     * In case the Trace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraceUpdateInput, TraceUncheckedUpdateInput>
  }

  /**
   * Trace delete
   */
  export type TraceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
    /**
     * Filter which Trace to delete.
     */
    where: TraceWhereUniqueInput
  }

  /**
   * Trace deleteMany
   */
  export type TraceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traces to delete
     */
    where?: TraceWhereInput
    /**
     * Limit how many Traces to delete.
     */
    limit?: number
  }

  /**
   * Trace without action
   */
  export type TraceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trace
     */
    select?: TraceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trace
     */
    omit?: TraceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraceInclude<ExtArgs> | null
  }


  /**
   * Model Classification
   */

  export type AggregateClassification = {
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  export type ClassificationAvgAggregateOutputType = {
    confidence: number | null
  }

  export type ClassificationSumAggregateOutputType = {
    confidence: number | null
  }

  export type ClassificationMinAggregateOutputType = {
    id: string | null
    runId: string | null
    passFail: string | null
    failureType: string | null
    confidence: number | null
    reasoning: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassificationMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    passFail: string | null
    failureType: string | null
    confidence: number | null
    reasoning: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassificationCountAggregateOutputType = {
    id: number
    runId: number
    passFail: number
    failureType: number
    confidence: number
    reasoning: number
    rawJudgeOutput: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassificationAvgAggregateInputType = {
    confidence?: true
  }

  export type ClassificationSumAggregateInputType = {
    confidence?: true
  }

  export type ClassificationMinAggregateInputType = {
    id?: true
    runId?: true
    passFail?: true
    failureType?: true
    confidence?: true
    reasoning?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassificationMaxAggregateInputType = {
    id?: true
    runId?: true
    passFail?: true
    failureType?: true
    confidence?: true
    reasoning?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassificationCountAggregateInputType = {
    id?: true
    runId?: true
    passFail?: true
    failureType?: true
    confidence?: true
    reasoning?: true
    rawJudgeOutput?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classification to aggregate.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifications
    **/
    _count?: true | ClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassificationMaxAggregateInputType
  }

  export type GetClassificationAggregateType<T extends ClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassification[P]>
      : GetScalarType<T[P], AggregateClassification[P]>
  }




  export type ClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassificationWhereInput
    orderBy?: ClassificationOrderByWithAggregationInput | ClassificationOrderByWithAggregationInput[]
    by: ClassificationScalarFieldEnum[] | ClassificationScalarFieldEnum
    having?: ClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassificationCountAggregateInputType | true
    _avg?: ClassificationAvgAggregateInputType
    _sum?: ClassificationSumAggregateInputType
    _min?: ClassificationMinAggregateInputType
    _max?: ClassificationMaxAggregateInputType
  }

  export type ClassificationGroupByOutputType = {
    id: string
    runId: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  type GetClassificationGroupByPayload<T extends ClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
        }
      >
    >


  export type ClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    passFail?: boolean
    failureType?: boolean
    confidence?: boolean
    reasoning?: boolean
    rawJudgeOutput?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    passFail?: boolean
    failureType?: boolean
    confidence?: boolean
    reasoning?: boolean
    rawJudgeOutput?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    passFail?: boolean
    failureType?: boolean
    confidence?: boolean
    reasoning?: boolean
    rawJudgeOutput?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | RunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectScalar = {
    id?: boolean
    runId?: boolean
    passFail?: boolean
    failureType?: boolean
    confidence?: boolean
    reasoning?: boolean
    rawJudgeOutput?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "passFail" | "failureType" | "confidence" | "reasoning" | "rawJudgeOutput" | "createdAt" | "updatedAt", ExtArgs["result"]["classification"]>
  export type ClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type ClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }
  export type ClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | RunDefaultArgs<ExtArgs>
  }

  export type $ClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classification"
    objects: {
      run: Prisma.$RunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      passFail: string
      failureType: string
      confidence: number
      reasoning: string
      rawJudgeOutput: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classification"]>
    composites: {}
  }

  type ClassificationGetPayload<S extends boolean | null | undefined | ClassificationDefaultArgs> = $Result.GetResult<Prisma.$ClassificationPayload, S>

  type ClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassificationCountAggregateInputType | true
    }

  export interface ClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classification'], meta: { name: 'Classification' } }
    /**
     * Find zero or one Classification that matches the filter.
     * @param {ClassificationFindUniqueArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassificationFindUniqueArgs>(args: SelectSubset<T, ClassificationFindUniqueArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassificationFindUniqueOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassificationFindFirstArgs>(args?: SelectSubset<T, ClassificationFindFirstArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifications
     * const classifications = await prisma.classification.findMany()
     * 
     * // Get first 10 Classifications
     * const classifications = await prisma.classification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classificationWithIdOnly = await prisma.classification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassificationFindManyArgs>(args?: SelectSubset<T, ClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classification.
     * @param {ClassificationCreateArgs} args - Arguments to create a Classification.
     * @example
     * // Create one Classification
     * const Classification = await prisma.classification.create({
     *   data: {
     *     // ... data to create a Classification
     *   }
     * })
     * 
     */
    create<T extends ClassificationCreateArgs>(args: SelectSubset<T, ClassificationCreateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classifications.
     * @param {ClassificationCreateManyArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassificationCreateManyArgs>(args?: SelectSubset<T, ClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classifications and returns the data saved in the database.
     * @param {ClassificationCreateManyAndReturnArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classification.
     * @param {ClassificationDeleteArgs} args - Arguments to delete one Classification.
     * @example
     * // Delete one Classification
     * const Classification = await prisma.classification.delete({
     *   where: {
     *     // ... filter to delete one Classification
     *   }
     * })
     * 
     */
    delete<T extends ClassificationDeleteArgs>(args: SelectSubset<T, ClassificationDeleteArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classification.
     * @param {ClassificationUpdateArgs} args - Arguments to update one Classification.
     * @example
     * // Update one Classification
     * const classification = await prisma.classification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassificationUpdateArgs>(args: SelectSubset<T, ClassificationUpdateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classifications.
     * @param {ClassificationDeleteManyArgs} args - Arguments to filter Classifications to delete.
     * @example
     * // Delete a few Classifications
     * const { count } = await prisma.classification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassificationDeleteManyArgs>(args?: SelectSubset<T, ClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassificationUpdateManyArgs>(args: SelectSubset<T, ClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications and returns the data updated in the database.
     * @param {ClassificationUpdateManyAndReturnArgs} args - Arguments to update many Classifications.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classification.
     * @param {ClassificationUpsertArgs} args - Arguments to update or create a Classification.
     * @example
     * // Update or create a Classification
     * const classification = await prisma.classification.upsert({
     *   create: {
     *     // ... data to create a Classification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classification we want to update
     *   }
     * })
     */
    upsert<T extends ClassificationUpsertArgs>(args: SelectSubset<T, ClassificationUpsertArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationCountArgs} args - Arguments to filter Classifications to count.
     * @example
     * // Count the number of Classifications
     * const count = await prisma.classification.count({
     *   where: {
     *     // ... the filter for the Classifications we want to count
     *   }
     * })
    **/
    count<T extends ClassificationCountArgs>(
      args?: Subset<T, ClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassificationAggregateArgs>(args: Subset<T, ClassificationAggregateArgs>): Prisma.PrismaPromise<GetClassificationAggregateType<T>>

    /**
     * Group by Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationGroupByArgs} args - Group by arguments.
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
      T extends ClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassificationGroupByArgs['orderBy'] }
        : { orderBy?: ClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classification model
   */
  readonly fields: ClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends RunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RunDefaultArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Classification model
   */
  interface ClassificationFieldRefs {
    readonly id: FieldRef<"Classification", 'String'>
    readonly runId: FieldRef<"Classification", 'String'>
    readonly passFail: FieldRef<"Classification", 'String'>
    readonly failureType: FieldRef<"Classification", 'String'>
    readonly confidence: FieldRef<"Classification", 'Float'>
    readonly reasoning: FieldRef<"Classification", 'String'>
    readonly rawJudgeOutput: FieldRef<"Classification", 'Json'>
    readonly createdAt: FieldRef<"Classification", 'DateTime'>
    readonly updatedAt: FieldRef<"Classification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classification findUnique
   */
  export type ClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findUniqueOrThrow
   */
  export type ClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findFirst
   */
  export type ClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findFirstOrThrow
   */
  export type ClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findMany
   */
  export type ClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter, which Classifications to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification create
   */
  export type ClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Classification.
     */
    data: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
  }

  /**
   * Classification createMany
   */
  export type ClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification createManyAndReturn
   */
  export type ClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classification update
   */
  export type ClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Classification.
     */
    data: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
    /**
     * Choose, which Classification to update.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification updateMany
   */
  export type ClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification updateManyAndReturn
   */
  export type ClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classification upsert
   */
  export type ClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Classification to update in case it exists.
     */
    where: ClassificationWhereUniqueInput
    /**
     * In case the Classification found by the `where` argument doesn't exist, create a new Classification with this data.
     */
    create: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
    /**
     * In case the Classification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
  }

  /**
   * Classification delete
   */
  export type ClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
    /**
     * Filter which Classification to delete.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification deleteMany
   */
  export type ClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifications to delete
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to delete.
     */
    limit?: number
  }

  /**
   * Classification without action
   */
  export type ClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassificationInclude<ExtArgs> | null
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


  export const AgentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const AgentVersionScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    version: 'version',
    systemPrompt: 'systemPrompt',
    tools: 'tools',
    model: 'model',
    temperature: 'temperature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentVersionScalarFieldEnum = (typeof AgentVersionScalarFieldEnum)[keyof typeof AgentVersionScalarFieldEnum]


  export const EvaluationJobScalarFieldEnum: {
    id: 'id',
    agentVersionId: 'agentVersionId',
    status: 'status',
    triggerSource: 'triggerSource',
    totalScenarios: 'totalScenarios',
    passedScenarios: 'passedScenarios',
    failedScenarios: 'failedScenarios',
    reliabilityScore: 'reliabilityScore',
    summaryMetrics: 'summaryMetrics',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EvaluationJobScalarFieldEnum = (typeof EvaluationJobScalarFieldEnum)[keyof typeof EvaluationJobScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    prompt: 'prompt',
    category: 'category',
    riskType: 'riskType',
    expectedBehavior: 'expectedBehavior',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const RunScalarFieldEnum: {
    id: 'id',
    evaluationJobId: 'evaluationJobId',
    agentVersionId: 'agentVersionId',
    scenarioId: 'scenarioId',
    status: 'status',
    durationMs: 'durationMs',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RunScalarFieldEnum = (typeof RunScalarFieldEnum)[keyof typeof RunScalarFieldEnum]


  export const TraceScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    messages: 'messages',
    turnCount: 'turnCount',
    hitTurnLimit: 'hitTurnLimit',
    toolCallsCount: 'toolCallsCount',
    rawUsage: 'rawUsage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TraceScalarFieldEnum = (typeof TraceScalarFieldEnum)[keyof typeof TraceScalarFieldEnum]


  export const ClassificationScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    passFail: 'passFail',
    failureType: 'failureType',
    confidence: 'confidence',
    reasoning: 'reasoning',
    rawJudgeOutput: 'rawJudgeOutput',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassificationScalarFieldEnum = (typeof ClassificationScalarFieldEnum)[keyof typeof ClassificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    domain?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    versions?: AgentVersionListRelationFilter
    scenarios?: ScenarioListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    versions?: AgentVersionOrderByRelationAggregateInput
    scenarios?: ScenarioOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    name?: StringFilter<"Agent"> | string
    domain?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    versions?: AgentVersionListRelationFilter
    scenarios?: ScenarioListRelationFilter
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    domain?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type AgentVersionWhereInput = {
    AND?: AgentVersionWhereInput | AgentVersionWhereInput[]
    OR?: AgentVersionWhereInput[]
    NOT?: AgentVersionWhereInput | AgentVersionWhereInput[]
    id?: StringFilter<"AgentVersion"> | string
    agentId?: StringFilter<"AgentVersion"> | string
    version?: IntFilter<"AgentVersion"> | number
    systemPrompt?: StringFilter<"AgentVersion"> | string
    tools?: JsonFilter<"AgentVersion">
    model?: StringFilter<"AgentVersion"> | string
    temperature?: FloatFilter<"AgentVersion"> | number
    createdAt?: DateTimeFilter<"AgentVersion"> | Date | string
    updatedAt?: DateTimeFilter<"AgentVersion"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    evaluationJobs?: EvaluationJobListRelationFilter
    runs?: RunListRelationFilter
  }

  export type AgentVersionOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    evaluationJobs?: EvaluationJobOrderByRelationAggregateInput
    runs?: RunOrderByRelationAggregateInput
  }

  export type AgentVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_version?: AgentVersionAgentIdVersionCompoundUniqueInput
    AND?: AgentVersionWhereInput | AgentVersionWhereInput[]
    OR?: AgentVersionWhereInput[]
    NOT?: AgentVersionWhereInput | AgentVersionWhereInput[]
    agentId?: StringFilter<"AgentVersion"> | string
    version?: IntFilter<"AgentVersion"> | number
    systemPrompt?: StringFilter<"AgentVersion"> | string
    tools?: JsonFilter<"AgentVersion">
    model?: StringFilter<"AgentVersion"> | string
    temperature?: FloatFilter<"AgentVersion"> | number
    createdAt?: DateTimeFilter<"AgentVersion"> | Date | string
    updatedAt?: DateTimeFilter<"AgentVersion"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    evaluationJobs?: EvaluationJobListRelationFilter
    runs?: RunListRelationFilter
  }, "id" | "agentId_version">

  export type AgentVersionOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentVersionCountOrderByAggregateInput
    _avg?: AgentVersionAvgOrderByAggregateInput
    _max?: AgentVersionMaxOrderByAggregateInput
    _min?: AgentVersionMinOrderByAggregateInput
    _sum?: AgentVersionSumOrderByAggregateInput
  }

  export type AgentVersionScalarWhereWithAggregatesInput = {
    AND?: AgentVersionScalarWhereWithAggregatesInput | AgentVersionScalarWhereWithAggregatesInput[]
    OR?: AgentVersionScalarWhereWithAggregatesInput[]
    NOT?: AgentVersionScalarWhereWithAggregatesInput | AgentVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentVersion"> | string
    agentId?: StringWithAggregatesFilter<"AgentVersion"> | string
    version?: IntWithAggregatesFilter<"AgentVersion"> | number
    systemPrompt?: StringWithAggregatesFilter<"AgentVersion"> | string
    tools?: JsonWithAggregatesFilter<"AgentVersion">
    model?: StringWithAggregatesFilter<"AgentVersion"> | string
    temperature?: FloatWithAggregatesFilter<"AgentVersion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AgentVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentVersion"> | Date | string
  }

  export type EvaluationJobWhereInput = {
    AND?: EvaluationJobWhereInput | EvaluationJobWhereInput[]
    OR?: EvaluationJobWhereInput[]
    NOT?: EvaluationJobWhereInput | EvaluationJobWhereInput[]
    id?: StringFilter<"EvaluationJob"> | string
    agentVersionId?: StringFilter<"EvaluationJob"> | string
    status?: StringFilter<"EvaluationJob"> | string
    triggerSource?: StringFilter<"EvaluationJob"> | string
    totalScenarios?: IntFilter<"EvaluationJob"> | number
    passedScenarios?: IntFilter<"EvaluationJob"> | number
    failedScenarios?: IntFilter<"EvaluationJob"> | number
    reliabilityScore?: FloatNullableFilter<"EvaluationJob"> | number | null
    summaryMetrics?: JsonNullableFilter<"EvaluationJob">
    errorMessage?: StringNullableFilter<"EvaluationJob"> | string | null
    startedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"EvaluationJob"> | Date | string
    updatedAt?: DateTimeFilter<"EvaluationJob"> | Date | string
    agentVersion?: XOR<AgentVersionScalarRelationFilter, AgentVersionWhereInput>
    runs?: RunListRelationFilter
  }

  export type EvaluationJobOrderByWithRelationInput = {
    id?: SortOrder
    agentVersionId?: SortOrder
    status?: SortOrder
    triggerSource?: SortOrder
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrderInput | SortOrder
    summaryMetrics?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentVersion?: AgentVersionOrderByWithRelationInput
    runs?: RunOrderByRelationAggregateInput
  }

  export type EvaluationJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvaluationJobWhereInput | EvaluationJobWhereInput[]
    OR?: EvaluationJobWhereInput[]
    NOT?: EvaluationJobWhereInput | EvaluationJobWhereInput[]
    agentVersionId?: StringFilter<"EvaluationJob"> | string
    status?: StringFilter<"EvaluationJob"> | string
    triggerSource?: StringFilter<"EvaluationJob"> | string
    totalScenarios?: IntFilter<"EvaluationJob"> | number
    passedScenarios?: IntFilter<"EvaluationJob"> | number
    failedScenarios?: IntFilter<"EvaluationJob"> | number
    reliabilityScore?: FloatNullableFilter<"EvaluationJob"> | number | null
    summaryMetrics?: JsonNullableFilter<"EvaluationJob">
    errorMessage?: StringNullableFilter<"EvaluationJob"> | string | null
    startedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"EvaluationJob"> | Date | string
    updatedAt?: DateTimeFilter<"EvaluationJob"> | Date | string
    agentVersion?: XOR<AgentVersionScalarRelationFilter, AgentVersionWhereInput>
    runs?: RunListRelationFilter
  }, "id">

  export type EvaluationJobOrderByWithAggregationInput = {
    id?: SortOrder
    agentVersionId?: SortOrder
    status?: SortOrder
    triggerSource?: SortOrder
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrderInput | SortOrder
    summaryMetrics?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EvaluationJobCountOrderByAggregateInput
    _avg?: EvaluationJobAvgOrderByAggregateInput
    _max?: EvaluationJobMaxOrderByAggregateInput
    _min?: EvaluationJobMinOrderByAggregateInput
    _sum?: EvaluationJobSumOrderByAggregateInput
  }

  export type EvaluationJobScalarWhereWithAggregatesInput = {
    AND?: EvaluationJobScalarWhereWithAggregatesInput | EvaluationJobScalarWhereWithAggregatesInput[]
    OR?: EvaluationJobScalarWhereWithAggregatesInput[]
    NOT?: EvaluationJobScalarWhereWithAggregatesInput | EvaluationJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvaluationJob"> | string
    agentVersionId?: StringWithAggregatesFilter<"EvaluationJob"> | string
    status?: StringWithAggregatesFilter<"EvaluationJob"> | string
    triggerSource?: StringWithAggregatesFilter<"EvaluationJob"> | string
    totalScenarios?: IntWithAggregatesFilter<"EvaluationJob"> | number
    passedScenarios?: IntWithAggregatesFilter<"EvaluationJob"> | number
    failedScenarios?: IntWithAggregatesFilter<"EvaluationJob"> | number
    reliabilityScore?: FloatNullableWithAggregatesFilter<"EvaluationJob"> | number | null
    summaryMetrics?: JsonNullableWithAggregatesFilter<"EvaluationJob">
    errorMessage?: StringNullableWithAggregatesFilter<"EvaluationJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"EvaluationJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"EvaluationJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EvaluationJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EvaluationJob"> | Date | string
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    agentId?: StringFilter<"Scenario"> | string
    prompt?: StringFilter<"Scenario"> | string
    category?: StringFilter<"Scenario"> | string
    riskType?: StringFilter<"Scenario"> | string
    expectedBehavior?: StringFilter<"Scenario"> | string
    metadata?: JsonNullableFilter<"Scenario">
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    runs?: RunListRelationFilter
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    prompt?: SortOrder
    category?: SortOrder
    riskType?: SortOrder
    expectedBehavior?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    runs?: RunOrderByRelationAggregateInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    agentId?: StringFilter<"Scenario"> | string
    prompt?: StringFilter<"Scenario"> | string
    category?: StringFilter<"Scenario"> | string
    riskType?: StringFilter<"Scenario"> | string
    expectedBehavior?: StringFilter<"Scenario"> | string
    metadata?: JsonNullableFilter<"Scenario">
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    runs?: RunListRelationFilter
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    prompt?: SortOrder
    category?: SortOrder
    riskType?: SortOrder
    expectedBehavior?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    agentId?: StringWithAggregatesFilter<"Scenario"> | string
    prompt?: StringWithAggregatesFilter<"Scenario"> | string
    category?: StringWithAggregatesFilter<"Scenario"> | string
    riskType?: StringWithAggregatesFilter<"Scenario"> | string
    expectedBehavior?: StringWithAggregatesFilter<"Scenario"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Scenario">
    createdAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
  }

  export type RunWhereInput = {
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    id?: StringFilter<"Run"> | string
    evaluationJobId?: StringFilter<"Run"> | string
    agentVersionId?: StringFilter<"Run"> | string
    scenarioId?: StringFilter<"Run"> | string
    status?: StringFilter<"Run"> | string
    durationMs?: IntNullableFilter<"Run"> | number | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
    startedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    evaluationJob?: XOR<EvaluationJobScalarRelationFilter, EvaluationJobWhereInput>
    agentVersion?: XOR<AgentVersionScalarRelationFilter, AgentVersionWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    trace?: XOR<TraceNullableScalarRelationFilter, TraceWhereInput> | null
    classification?: XOR<ClassificationNullableScalarRelationFilter, ClassificationWhereInput> | null
  }

  export type RunOrderByWithRelationInput = {
    id?: SortOrder
    evaluationJobId?: SortOrder
    agentVersionId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evaluationJob?: EvaluationJobOrderByWithRelationInput
    agentVersion?: AgentVersionOrderByWithRelationInput
    scenario?: ScenarioOrderByWithRelationInput
    trace?: TraceOrderByWithRelationInput
    classification?: ClassificationOrderByWithRelationInput
  }

  export type RunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    evaluationJobId?: StringFilter<"Run"> | string
    agentVersionId?: StringFilter<"Run"> | string
    scenarioId?: StringFilter<"Run"> | string
    status?: StringFilter<"Run"> | string
    durationMs?: IntNullableFilter<"Run"> | number | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
    startedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    evaluationJob?: XOR<EvaluationJobScalarRelationFilter, EvaluationJobWhereInput>
    agentVersion?: XOR<AgentVersionScalarRelationFilter, AgentVersionWhereInput>
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    trace?: XOR<TraceNullableScalarRelationFilter, TraceWhereInput> | null
    classification?: XOR<ClassificationNullableScalarRelationFilter, ClassificationWhereInput> | null
  }, "id">

  export type RunOrderByWithAggregationInput = {
    id?: SortOrder
    evaluationJobId?: SortOrder
    agentVersionId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RunCountOrderByAggregateInput
    _avg?: RunAvgOrderByAggregateInput
    _max?: RunMaxOrderByAggregateInput
    _min?: RunMinOrderByAggregateInput
    _sum?: RunSumOrderByAggregateInput
  }

  export type RunScalarWhereWithAggregatesInput = {
    AND?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    OR?: RunScalarWhereWithAggregatesInput[]
    NOT?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Run"> | string
    evaluationJobId?: StringWithAggregatesFilter<"Run"> | string
    agentVersionId?: StringWithAggregatesFilter<"Run"> | string
    scenarioId?: StringWithAggregatesFilter<"Run"> | string
    status?: StringWithAggregatesFilter<"Run"> | string
    durationMs?: IntNullableWithAggregatesFilter<"Run"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"Run"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Run"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Run"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
  }

  export type TraceWhereInput = {
    AND?: TraceWhereInput | TraceWhereInput[]
    OR?: TraceWhereInput[]
    NOT?: TraceWhereInput | TraceWhereInput[]
    id?: StringFilter<"Trace"> | string
    runId?: StringFilter<"Trace"> | string
    messages?: JsonFilter<"Trace">
    turnCount?: IntFilter<"Trace"> | number
    hitTurnLimit?: BoolFilter<"Trace"> | boolean
    toolCallsCount?: IntFilter<"Trace"> | number
    rawUsage?: JsonNullableFilter<"Trace">
    createdAt?: DateTimeFilter<"Trace"> | Date | string
    updatedAt?: DateTimeFilter<"Trace"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }

  export type TraceOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    messages?: SortOrder
    turnCount?: SortOrder
    hitTurnLimit?: SortOrder
    toolCallsCount?: SortOrder
    rawUsage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    run?: RunOrderByWithRelationInput
  }

  export type TraceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId?: string
    AND?: TraceWhereInput | TraceWhereInput[]
    OR?: TraceWhereInput[]
    NOT?: TraceWhereInput | TraceWhereInput[]
    messages?: JsonFilter<"Trace">
    turnCount?: IntFilter<"Trace"> | number
    hitTurnLimit?: BoolFilter<"Trace"> | boolean
    toolCallsCount?: IntFilter<"Trace"> | number
    rawUsage?: JsonNullableFilter<"Trace">
    createdAt?: DateTimeFilter<"Trace"> | Date | string
    updatedAt?: DateTimeFilter<"Trace"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }, "id" | "runId">

  export type TraceOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    messages?: SortOrder
    turnCount?: SortOrder
    hitTurnLimit?: SortOrder
    toolCallsCount?: SortOrder
    rawUsage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TraceCountOrderByAggregateInput
    _avg?: TraceAvgOrderByAggregateInput
    _max?: TraceMaxOrderByAggregateInput
    _min?: TraceMinOrderByAggregateInput
    _sum?: TraceSumOrderByAggregateInput
  }

  export type TraceScalarWhereWithAggregatesInput = {
    AND?: TraceScalarWhereWithAggregatesInput | TraceScalarWhereWithAggregatesInput[]
    OR?: TraceScalarWhereWithAggregatesInput[]
    NOT?: TraceScalarWhereWithAggregatesInput | TraceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trace"> | string
    runId?: StringWithAggregatesFilter<"Trace"> | string
    messages?: JsonWithAggregatesFilter<"Trace">
    turnCount?: IntWithAggregatesFilter<"Trace"> | number
    hitTurnLimit?: BoolWithAggregatesFilter<"Trace"> | boolean
    toolCallsCount?: IntWithAggregatesFilter<"Trace"> | number
    rawUsage?: JsonNullableWithAggregatesFilter<"Trace">
    createdAt?: DateTimeWithAggregatesFilter<"Trace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trace"> | Date | string
  }

  export type ClassificationWhereInput = {
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    id?: StringFilter<"Classification"> | string
    runId?: StringFilter<"Classification"> | string
    passFail?: StringFilter<"Classification"> | string
    failureType?: StringFilter<"Classification"> | string
    confidence?: FloatFilter<"Classification"> | number
    reasoning?: StringFilter<"Classification"> | string
    rawJudgeOutput?: JsonNullableFilter<"Classification">
    createdAt?: DateTimeFilter<"Classification"> | Date | string
    updatedAt?: DateTimeFilter<"Classification"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }

  export type ClassificationOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    passFail?: SortOrder
    failureType?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    rawJudgeOutput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    run?: RunOrderByWithRelationInput
  }

  export type ClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId?: string
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    passFail?: StringFilter<"Classification"> | string
    failureType?: StringFilter<"Classification"> | string
    confidence?: FloatFilter<"Classification"> | number
    reasoning?: StringFilter<"Classification"> | string
    rawJudgeOutput?: JsonNullableFilter<"Classification">
    createdAt?: DateTimeFilter<"Classification"> | Date | string
    updatedAt?: DateTimeFilter<"Classification"> | Date | string
    run?: XOR<RunScalarRelationFilter, RunWhereInput>
  }, "id" | "runId">

  export type ClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    passFail?: SortOrder
    failureType?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    rawJudgeOutput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassificationCountOrderByAggregateInput
    _avg?: ClassificationAvgOrderByAggregateInput
    _max?: ClassificationMaxOrderByAggregateInput
    _min?: ClassificationMinOrderByAggregateInput
    _sum?: ClassificationSumOrderByAggregateInput
  }

  export type ClassificationScalarWhereWithAggregatesInput = {
    AND?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    OR?: ClassificationScalarWhereWithAggregatesInput[]
    NOT?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classification"> | string
    runId?: StringWithAggregatesFilter<"Classification"> | string
    passFail?: StringWithAggregatesFilter<"Classification"> | string
    failureType?: StringWithAggregatesFilter<"Classification"> | string
    confidence?: FloatWithAggregatesFilter<"Classification"> | number
    reasoning?: StringWithAggregatesFilter<"Classification"> | string
    rawJudgeOutput?: JsonNullableWithAggregatesFilter<"Classification">
    createdAt?: DateTimeWithAggregatesFilter<"Classification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classification"> | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: AgentVersionCreateNestedManyWithoutAgentInput
    scenarios?: ScenarioCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: AgentVersionUncheckedCreateNestedManyWithoutAgentInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: AgentVersionUpdateManyWithoutAgentNestedInput
    scenarios?: ScenarioUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: AgentVersionUncheckedUpdateManyWithoutAgentNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentVersionCreateInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutVersionsInput
    evaluationJobs?: EvaluationJobCreateNestedManyWithoutAgentVersionInput
    runs?: RunCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionUncheckedCreateInput = {
    id?: string
    agentId: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJobs?: EvaluationJobUncheckedCreateNestedManyWithoutAgentVersionInput
    runs?: RunUncheckedCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutVersionsNestedInput
    evaluationJobs?: EvaluationJobUpdateManyWithoutAgentVersionNestedInput
    runs?: RunUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJobs?: EvaluationJobUncheckedUpdateManyWithoutAgentVersionNestedInput
    runs?: RunUncheckedUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionCreateManyInput = {
    id?: string
    agentId: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationJobCreateInput = {
    id?: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentVersion: AgentVersionCreateNestedOneWithoutEvaluationJobsInput
    runs?: RunCreateNestedManyWithoutEvaluationJobInput
  }

  export type EvaluationJobUncheckedCreateInput = {
    id?: string
    agentVersionId: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutEvaluationJobInput
  }

  export type EvaluationJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentVersion?: AgentVersionUpdateOneRequiredWithoutEvaluationJobsNestedInput
    runs?: RunUpdateManyWithoutEvaluationJobNestedInput
  }

  export type EvaluationJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutEvaluationJobNestedInput
  }

  export type EvaluationJobCreateManyInput = {
    id?: string
    agentVersionId: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioCreateInput = {
    id?: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutScenariosInput
    runs?: RunCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    agentId: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutScenariosNestedInput
    runs?: RunUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioCreateManyInput = {
    id?: string
    agentId: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCreateInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJob: EvaluationJobCreateNestedOneWithoutRunsInput
    agentVersion: AgentVersionCreateNestedOneWithoutRunsInput
    scenario: ScenarioCreateNestedOneWithoutRunsInput
    trace?: TraceCreateNestedOneWithoutRunInput
    classification?: ClassificationCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trace?: TraceUncheckedCreateNestedOneWithoutRunInput
    classification?: ClassificationUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJob?: EvaluationJobUpdateOneRequiredWithoutRunsNestedInput
    agentVersion?: AgentVersionUpdateOneRequiredWithoutRunsNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunsNestedInput
    trace?: TraceUpdateOneWithoutRunNestedInput
    classification?: ClassificationUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trace?: TraceUncheckedUpdateOneWithoutRunNestedInput
    classification?: ClassificationUncheckedUpdateOneWithoutRunNestedInput
  }

  export type RunCreateManyInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraceCreateInput = {
    id?: string
    messages: JsonNullValueInput | InputJsonValue
    turnCount?: number
    hitTurnLimit?: boolean
    toolCallsCount?: number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    run: RunCreateNestedOneWithoutTraceInput
  }

  export type TraceUncheckedCreateInput = {
    id?: string
    runId: string
    messages: JsonNullValueInput | InputJsonValue
    turnCount?: number
    hitTurnLimit?: boolean
    toolCallsCount?: number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutTraceNestedInput
  }

  export type TraceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraceCreateManyInput = {
    id?: string
    runId: string
    messages: JsonNullValueInput | InputJsonValue
    turnCount?: number
    hitTurnLimit?: boolean
    toolCallsCount?: number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationCreateInput = {
    id?: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    run: RunCreateNestedOneWithoutClassificationInput
  }

  export type ClassificationUncheckedCreateInput = {
    id?: string
    runId: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneRequiredWithoutClassificationNestedInput
  }

  export type ClassificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationCreateManyInput = {
    id?: string
    runId: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AgentVersionListRelationFilter = {
    every?: AgentVersionWhereInput
    some?: AgentVersionWhereInput
    none?: AgentVersionWhereInput
  }

  export type ScenarioListRelationFilter = {
    every?: ScenarioWhereInput
    some?: ScenarioWhereInput
    none?: ScenarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type EvaluationJobListRelationFilter = {
    every?: EvaluationJobWhereInput
    some?: EvaluationJobWhereInput
    none?: EvaluationJobWhereInput
  }

  export type RunListRelationFilter = {
    every?: RunWhereInput
    some?: RunWhereInput
    none?: RunWhereInput
  }

  export type EvaluationJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentVersionAgentIdVersionCompoundUniqueInput = {
    agentId: string
    version: number
  }

  export type AgentVersionCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    temperature?: SortOrder
  }

  export type AgentVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentVersionMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentVersionSumOrderByAggregateInput = {
    version?: SortOrder
    temperature?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type AgentVersionScalarRelationFilter = {
    is?: AgentVersionWhereInput
    isNot?: AgentVersionWhereInput
  }

  export type EvaluationJobCountOrderByAggregateInput = {
    id?: SortOrder
    agentVersionId?: SortOrder
    status?: SortOrder
    triggerSource?: SortOrder
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrder
    summaryMetrics?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationJobAvgOrderByAggregateInput = {
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrder
  }

  export type EvaluationJobMaxOrderByAggregateInput = {
    id?: SortOrder
    agentVersionId?: SortOrder
    status?: SortOrder
    triggerSource?: SortOrder
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationJobMinOrderByAggregateInput = {
    id?: SortOrder
    agentVersionId?: SortOrder
    status?: SortOrder
    triggerSource?: SortOrder
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EvaluationJobSumOrderByAggregateInput = {
    totalScenarios?: SortOrder
    passedScenarios?: SortOrder
    failedScenarios?: SortOrder
    reliabilityScore?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    prompt?: SortOrder
    category?: SortOrder
    riskType?: SortOrder
    expectedBehavior?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    prompt?: SortOrder
    category?: SortOrder
    riskType?: SortOrder
    expectedBehavior?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    prompt?: SortOrder
    category?: SortOrder
    riskType?: SortOrder
    expectedBehavior?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EvaluationJobScalarRelationFilter = {
    is?: EvaluationJobWhereInput
    isNot?: EvaluationJobWhereInput
  }

  export type ScenarioScalarRelationFilter = {
    is?: ScenarioWhereInput
    isNot?: ScenarioWhereInput
  }

  export type TraceNullableScalarRelationFilter = {
    is?: TraceWhereInput | null
    isNot?: TraceWhereInput | null
  }

  export type ClassificationNullableScalarRelationFilter = {
    is?: ClassificationWhereInput | null
    isNot?: ClassificationWhereInput | null
  }

  export type RunCountOrderByAggregateInput = {
    id?: SortOrder
    evaluationJobId?: SortOrder
    agentVersionId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RunAvgOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type RunMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluationJobId?: SortOrder
    agentVersionId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RunMinOrderByAggregateInput = {
    id?: SortOrder
    evaluationJobId?: SortOrder
    agentVersionId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RunSumOrderByAggregateInput = {
    durationMs?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RunScalarRelationFilter = {
    is?: RunWhereInput
    isNot?: RunWhereInput
  }

  export type TraceCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    messages?: SortOrder
    turnCount?: SortOrder
    hitTurnLimit?: SortOrder
    toolCallsCount?: SortOrder
    rawUsage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraceAvgOrderByAggregateInput = {
    turnCount?: SortOrder
    toolCallsCount?: SortOrder
  }

  export type TraceMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    turnCount?: SortOrder
    hitTurnLimit?: SortOrder
    toolCallsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraceMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    turnCount?: SortOrder
    hitTurnLimit?: SortOrder
    toolCallsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraceSumOrderByAggregateInput = {
    turnCount?: SortOrder
    toolCallsCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    passFail?: SortOrder
    failureType?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    rawJudgeOutput?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type ClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    passFail?: SortOrder
    failureType?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    passFail?: SortOrder
    failureType?: SortOrder
    confidence?: SortOrder
    reasoning?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassificationSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AgentVersionCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput> | AgentVersionCreateWithoutAgentInput[] | AgentVersionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentVersionCreateOrConnectWithoutAgentInput | AgentVersionCreateOrConnectWithoutAgentInput[]
    createMany?: AgentVersionCreateManyAgentInputEnvelope
    connect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
  }

  export type ScenarioCreateNestedManyWithoutAgentInput = {
    create?: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput> | ScenarioCreateWithoutAgentInput[] | ScenarioUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutAgentInput | ScenarioCreateOrConnectWithoutAgentInput[]
    createMany?: ScenarioCreateManyAgentInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type AgentVersionUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput> | AgentVersionCreateWithoutAgentInput[] | AgentVersionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentVersionCreateOrConnectWithoutAgentInput | AgentVersionCreateOrConnectWithoutAgentInput[]
    createMany?: AgentVersionCreateManyAgentInputEnvelope
    connect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
  }

  export type ScenarioUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput> | ScenarioCreateWithoutAgentInput[] | ScenarioUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutAgentInput | ScenarioCreateOrConnectWithoutAgentInput[]
    createMany?: ScenarioCreateManyAgentInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgentVersionUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput> | AgentVersionCreateWithoutAgentInput[] | AgentVersionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentVersionCreateOrConnectWithoutAgentInput | AgentVersionCreateOrConnectWithoutAgentInput[]
    upsert?: AgentVersionUpsertWithWhereUniqueWithoutAgentInput | AgentVersionUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentVersionCreateManyAgentInputEnvelope
    set?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    disconnect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    delete?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    connect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    update?: AgentVersionUpdateWithWhereUniqueWithoutAgentInput | AgentVersionUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentVersionUpdateManyWithWhereWithoutAgentInput | AgentVersionUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentVersionScalarWhereInput | AgentVersionScalarWhereInput[]
  }

  export type ScenarioUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput> | ScenarioCreateWithoutAgentInput[] | ScenarioUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutAgentInput | ScenarioCreateOrConnectWithoutAgentInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutAgentInput | ScenarioUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ScenarioCreateManyAgentInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutAgentInput | ScenarioUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutAgentInput | ScenarioUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type AgentVersionUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput> | AgentVersionCreateWithoutAgentInput[] | AgentVersionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentVersionCreateOrConnectWithoutAgentInput | AgentVersionCreateOrConnectWithoutAgentInput[]
    upsert?: AgentVersionUpsertWithWhereUniqueWithoutAgentInput | AgentVersionUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentVersionCreateManyAgentInputEnvelope
    set?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    disconnect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    delete?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    connect?: AgentVersionWhereUniqueInput | AgentVersionWhereUniqueInput[]
    update?: AgentVersionUpdateWithWhereUniqueWithoutAgentInput | AgentVersionUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentVersionUpdateManyWithWhereWithoutAgentInput | AgentVersionUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentVersionScalarWhereInput | AgentVersionScalarWhereInput[]
  }

  export type ScenarioUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput> | ScenarioCreateWithoutAgentInput[] | ScenarioUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutAgentInput | ScenarioCreateOrConnectWithoutAgentInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutAgentInput | ScenarioUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ScenarioCreateManyAgentInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutAgentInput | ScenarioUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutAgentInput | ScenarioUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutVersionsInput = {
    create?: XOR<AgentCreateWithoutVersionsInput, AgentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutVersionsInput
    connect?: AgentWhereUniqueInput
  }

  export type EvaluationJobCreateNestedManyWithoutAgentVersionInput = {
    create?: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput> | EvaluationJobCreateWithoutAgentVersionInput[] | EvaluationJobUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutAgentVersionInput | EvaluationJobCreateOrConnectWithoutAgentVersionInput[]
    createMany?: EvaluationJobCreateManyAgentVersionInputEnvelope
    connect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
  }

  export type RunCreateNestedManyWithoutAgentVersionInput = {
    create?: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput> | RunCreateWithoutAgentVersionInput[] | RunUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: RunCreateOrConnectWithoutAgentVersionInput | RunCreateOrConnectWithoutAgentVersionInput[]
    createMany?: RunCreateManyAgentVersionInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type EvaluationJobUncheckedCreateNestedManyWithoutAgentVersionInput = {
    create?: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput> | EvaluationJobCreateWithoutAgentVersionInput[] | EvaluationJobUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutAgentVersionInput | EvaluationJobCreateOrConnectWithoutAgentVersionInput[]
    createMany?: EvaluationJobCreateManyAgentVersionInputEnvelope
    connect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutAgentVersionInput = {
    create?: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput> | RunCreateWithoutAgentVersionInput[] | RunUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: RunCreateOrConnectWithoutAgentVersionInput | RunCreateOrConnectWithoutAgentVersionInput[]
    createMany?: RunCreateManyAgentVersionInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<AgentCreateWithoutVersionsInput, AgentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutVersionsInput
    upsert?: AgentUpsertWithoutVersionsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutVersionsInput, AgentUpdateWithoutVersionsInput>, AgentUncheckedUpdateWithoutVersionsInput>
  }

  export type EvaluationJobUpdateManyWithoutAgentVersionNestedInput = {
    create?: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput> | EvaluationJobCreateWithoutAgentVersionInput[] | EvaluationJobUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutAgentVersionInput | EvaluationJobCreateOrConnectWithoutAgentVersionInput[]
    upsert?: EvaluationJobUpsertWithWhereUniqueWithoutAgentVersionInput | EvaluationJobUpsertWithWhereUniqueWithoutAgentVersionInput[]
    createMany?: EvaluationJobCreateManyAgentVersionInputEnvelope
    set?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    disconnect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    delete?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    connect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    update?: EvaluationJobUpdateWithWhereUniqueWithoutAgentVersionInput | EvaluationJobUpdateWithWhereUniqueWithoutAgentVersionInput[]
    updateMany?: EvaluationJobUpdateManyWithWhereWithoutAgentVersionInput | EvaluationJobUpdateManyWithWhereWithoutAgentVersionInput[]
    deleteMany?: EvaluationJobScalarWhereInput | EvaluationJobScalarWhereInput[]
  }

  export type RunUpdateManyWithoutAgentVersionNestedInput = {
    create?: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput> | RunCreateWithoutAgentVersionInput[] | RunUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: RunCreateOrConnectWithoutAgentVersionInput | RunCreateOrConnectWithoutAgentVersionInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutAgentVersionInput | RunUpsertWithWhereUniqueWithoutAgentVersionInput[]
    createMany?: RunCreateManyAgentVersionInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutAgentVersionInput | RunUpdateWithWhereUniqueWithoutAgentVersionInput[]
    updateMany?: RunUpdateManyWithWhereWithoutAgentVersionInput | RunUpdateManyWithWhereWithoutAgentVersionInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type EvaluationJobUncheckedUpdateManyWithoutAgentVersionNestedInput = {
    create?: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput> | EvaluationJobCreateWithoutAgentVersionInput[] | EvaluationJobUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutAgentVersionInput | EvaluationJobCreateOrConnectWithoutAgentVersionInput[]
    upsert?: EvaluationJobUpsertWithWhereUniqueWithoutAgentVersionInput | EvaluationJobUpsertWithWhereUniqueWithoutAgentVersionInput[]
    createMany?: EvaluationJobCreateManyAgentVersionInputEnvelope
    set?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    disconnect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    delete?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    connect?: EvaluationJobWhereUniqueInput | EvaluationJobWhereUniqueInput[]
    update?: EvaluationJobUpdateWithWhereUniqueWithoutAgentVersionInput | EvaluationJobUpdateWithWhereUniqueWithoutAgentVersionInput[]
    updateMany?: EvaluationJobUpdateManyWithWhereWithoutAgentVersionInput | EvaluationJobUpdateManyWithWhereWithoutAgentVersionInput[]
    deleteMany?: EvaluationJobScalarWhereInput | EvaluationJobScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutAgentVersionNestedInput = {
    create?: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput> | RunCreateWithoutAgentVersionInput[] | RunUncheckedCreateWithoutAgentVersionInput[]
    connectOrCreate?: RunCreateOrConnectWithoutAgentVersionInput | RunCreateOrConnectWithoutAgentVersionInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutAgentVersionInput | RunUpsertWithWhereUniqueWithoutAgentVersionInput[]
    createMany?: RunCreateManyAgentVersionInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutAgentVersionInput | RunUpdateWithWhereUniqueWithoutAgentVersionInput[]
    updateMany?: RunUpdateManyWithWhereWithoutAgentVersionInput | RunUpdateManyWithWhereWithoutAgentVersionInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type AgentVersionCreateNestedOneWithoutEvaluationJobsInput = {
    create?: XOR<AgentVersionCreateWithoutEvaluationJobsInput, AgentVersionUncheckedCreateWithoutEvaluationJobsInput>
    connectOrCreate?: AgentVersionCreateOrConnectWithoutEvaluationJobsInput
    connect?: AgentVersionWhereUniqueInput
  }

  export type RunCreateNestedManyWithoutEvaluationJobInput = {
    create?: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput> | RunCreateWithoutEvaluationJobInput[] | RunUncheckedCreateWithoutEvaluationJobInput[]
    connectOrCreate?: RunCreateOrConnectWithoutEvaluationJobInput | RunCreateOrConnectWithoutEvaluationJobInput[]
    createMany?: RunCreateManyEvaluationJobInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutEvaluationJobInput = {
    create?: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput> | RunCreateWithoutEvaluationJobInput[] | RunUncheckedCreateWithoutEvaluationJobInput[]
    connectOrCreate?: RunCreateOrConnectWithoutEvaluationJobInput | RunCreateOrConnectWithoutEvaluationJobInput[]
    createMany?: RunCreateManyEvaluationJobInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AgentVersionUpdateOneRequiredWithoutEvaluationJobsNestedInput = {
    create?: XOR<AgentVersionCreateWithoutEvaluationJobsInput, AgentVersionUncheckedCreateWithoutEvaluationJobsInput>
    connectOrCreate?: AgentVersionCreateOrConnectWithoutEvaluationJobsInput
    upsert?: AgentVersionUpsertWithoutEvaluationJobsInput
    connect?: AgentVersionWhereUniqueInput
    update?: XOR<XOR<AgentVersionUpdateToOneWithWhereWithoutEvaluationJobsInput, AgentVersionUpdateWithoutEvaluationJobsInput>, AgentVersionUncheckedUpdateWithoutEvaluationJobsInput>
  }

  export type RunUpdateManyWithoutEvaluationJobNestedInput = {
    create?: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput> | RunCreateWithoutEvaluationJobInput[] | RunUncheckedCreateWithoutEvaluationJobInput[]
    connectOrCreate?: RunCreateOrConnectWithoutEvaluationJobInput | RunCreateOrConnectWithoutEvaluationJobInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutEvaluationJobInput | RunUpsertWithWhereUniqueWithoutEvaluationJobInput[]
    createMany?: RunCreateManyEvaluationJobInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutEvaluationJobInput | RunUpdateWithWhereUniqueWithoutEvaluationJobInput[]
    updateMany?: RunUpdateManyWithWhereWithoutEvaluationJobInput | RunUpdateManyWithWhereWithoutEvaluationJobInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutEvaluationJobNestedInput = {
    create?: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput> | RunCreateWithoutEvaluationJobInput[] | RunUncheckedCreateWithoutEvaluationJobInput[]
    connectOrCreate?: RunCreateOrConnectWithoutEvaluationJobInput | RunCreateOrConnectWithoutEvaluationJobInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutEvaluationJobInput | RunUpsertWithWhereUniqueWithoutEvaluationJobInput[]
    createMany?: RunCreateManyEvaluationJobInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutEvaluationJobInput | RunUpdateWithWhereUniqueWithoutEvaluationJobInput[]
    updateMany?: RunUpdateManyWithWhereWithoutEvaluationJobInput | RunUpdateManyWithWhereWithoutEvaluationJobInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutScenariosInput = {
    create?: XOR<AgentCreateWithoutScenariosInput, AgentUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: AgentCreateOrConnectWithoutScenariosInput
    connect?: AgentWhereUniqueInput
  }

  export type RunCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput> | RunCreateWithoutScenarioInput[] | RunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunCreateOrConnectWithoutScenarioInput | RunCreateOrConnectWithoutScenarioInput[]
    createMany?: RunCreateManyScenarioInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput> | RunCreateWithoutScenarioInput[] | RunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunCreateOrConnectWithoutScenarioInput | RunCreateOrConnectWithoutScenarioInput[]
    createMany?: RunCreateManyScenarioInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type AgentUpdateOneRequiredWithoutScenariosNestedInput = {
    create?: XOR<AgentCreateWithoutScenariosInput, AgentUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: AgentCreateOrConnectWithoutScenariosInput
    upsert?: AgentUpsertWithoutScenariosInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutScenariosInput, AgentUpdateWithoutScenariosInput>, AgentUncheckedUpdateWithoutScenariosInput>
  }

  export type RunUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput> | RunCreateWithoutScenarioInput[] | RunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunCreateOrConnectWithoutScenarioInput | RunCreateOrConnectWithoutScenarioInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutScenarioInput | RunUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunCreateManyScenarioInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutScenarioInput | RunUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunUpdateManyWithWhereWithoutScenarioInput | RunUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput> | RunCreateWithoutScenarioInput[] | RunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: RunCreateOrConnectWithoutScenarioInput | RunCreateOrConnectWithoutScenarioInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutScenarioInput | RunUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: RunCreateManyScenarioInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutScenarioInput | RunUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: RunUpdateManyWithWhereWithoutScenarioInput | RunUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type EvaluationJobCreateNestedOneWithoutRunsInput = {
    create?: XOR<EvaluationJobCreateWithoutRunsInput, EvaluationJobUncheckedCreateWithoutRunsInput>
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutRunsInput
    connect?: EvaluationJobWhereUniqueInput
  }

  export type AgentVersionCreateNestedOneWithoutRunsInput = {
    create?: XOR<AgentVersionCreateWithoutRunsInput, AgentVersionUncheckedCreateWithoutRunsInput>
    connectOrCreate?: AgentVersionCreateOrConnectWithoutRunsInput
    connect?: AgentVersionWhereUniqueInput
  }

  export type ScenarioCreateNestedOneWithoutRunsInput = {
    create?: XOR<ScenarioCreateWithoutRunsInput, ScenarioUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunsInput
    connect?: ScenarioWhereUniqueInput
  }

  export type TraceCreateNestedOneWithoutRunInput = {
    create?: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
    connectOrCreate?: TraceCreateOrConnectWithoutRunInput
    connect?: TraceWhereUniqueInput
  }

  export type ClassificationCreateNestedOneWithoutRunInput = {
    create?: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutRunInput
    connect?: ClassificationWhereUniqueInput
  }

  export type TraceUncheckedCreateNestedOneWithoutRunInput = {
    create?: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
    connectOrCreate?: TraceCreateOrConnectWithoutRunInput
    connect?: TraceWhereUniqueInput
  }

  export type ClassificationUncheckedCreateNestedOneWithoutRunInput = {
    create?: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutRunInput
    connect?: ClassificationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvaluationJobUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<EvaluationJobCreateWithoutRunsInput, EvaluationJobUncheckedCreateWithoutRunsInput>
    connectOrCreate?: EvaluationJobCreateOrConnectWithoutRunsInput
    upsert?: EvaluationJobUpsertWithoutRunsInput
    connect?: EvaluationJobWhereUniqueInput
    update?: XOR<XOR<EvaluationJobUpdateToOneWithWhereWithoutRunsInput, EvaluationJobUpdateWithoutRunsInput>, EvaluationJobUncheckedUpdateWithoutRunsInput>
  }

  export type AgentVersionUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<AgentVersionCreateWithoutRunsInput, AgentVersionUncheckedCreateWithoutRunsInput>
    connectOrCreate?: AgentVersionCreateOrConnectWithoutRunsInput
    upsert?: AgentVersionUpsertWithoutRunsInput
    connect?: AgentVersionWhereUniqueInput
    update?: XOR<XOR<AgentVersionUpdateToOneWithWhereWithoutRunsInput, AgentVersionUpdateWithoutRunsInput>, AgentVersionUncheckedUpdateWithoutRunsInput>
  }

  export type ScenarioUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<ScenarioCreateWithoutRunsInput, ScenarioUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutRunsInput
    upsert?: ScenarioUpsertWithoutRunsInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutRunsInput, ScenarioUpdateWithoutRunsInput>, ScenarioUncheckedUpdateWithoutRunsInput>
  }

  export type TraceUpdateOneWithoutRunNestedInput = {
    create?: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
    connectOrCreate?: TraceCreateOrConnectWithoutRunInput
    upsert?: TraceUpsertWithoutRunInput
    disconnect?: TraceWhereInput | boolean
    delete?: TraceWhereInput | boolean
    connect?: TraceWhereUniqueInput
    update?: XOR<XOR<TraceUpdateToOneWithWhereWithoutRunInput, TraceUpdateWithoutRunInput>, TraceUncheckedUpdateWithoutRunInput>
  }

  export type ClassificationUpdateOneWithoutRunNestedInput = {
    create?: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutRunInput
    upsert?: ClassificationUpsertWithoutRunInput
    disconnect?: ClassificationWhereInput | boolean
    delete?: ClassificationWhereInput | boolean
    connect?: ClassificationWhereUniqueInput
    update?: XOR<XOR<ClassificationUpdateToOneWithWhereWithoutRunInput, ClassificationUpdateWithoutRunInput>, ClassificationUncheckedUpdateWithoutRunInput>
  }

  export type TraceUncheckedUpdateOneWithoutRunNestedInput = {
    create?: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
    connectOrCreate?: TraceCreateOrConnectWithoutRunInput
    upsert?: TraceUpsertWithoutRunInput
    disconnect?: TraceWhereInput | boolean
    delete?: TraceWhereInput | boolean
    connect?: TraceWhereUniqueInput
    update?: XOR<XOR<TraceUpdateToOneWithWhereWithoutRunInput, TraceUpdateWithoutRunInput>, TraceUncheckedUpdateWithoutRunInput>
  }

  export type ClassificationUncheckedUpdateOneWithoutRunNestedInput = {
    create?: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
    connectOrCreate?: ClassificationCreateOrConnectWithoutRunInput
    upsert?: ClassificationUpsertWithoutRunInput
    disconnect?: ClassificationWhereInput | boolean
    delete?: ClassificationWhereInput | boolean
    connect?: ClassificationWhereUniqueInput
    update?: XOR<XOR<ClassificationUpdateToOneWithWhereWithoutRunInput, ClassificationUpdateWithoutRunInput>, ClassificationUncheckedUpdateWithoutRunInput>
  }

  export type RunCreateNestedOneWithoutTraceInput = {
    create?: XOR<RunCreateWithoutTraceInput, RunUncheckedCreateWithoutTraceInput>
    connectOrCreate?: RunCreateOrConnectWithoutTraceInput
    connect?: RunWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RunUpdateOneRequiredWithoutTraceNestedInput = {
    create?: XOR<RunCreateWithoutTraceInput, RunUncheckedCreateWithoutTraceInput>
    connectOrCreate?: RunCreateOrConnectWithoutTraceInput
    upsert?: RunUpsertWithoutTraceInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutTraceInput, RunUpdateWithoutTraceInput>, RunUncheckedUpdateWithoutTraceInput>
  }

  export type RunCreateNestedOneWithoutClassificationInput = {
    create?: XOR<RunCreateWithoutClassificationInput, RunUncheckedCreateWithoutClassificationInput>
    connectOrCreate?: RunCreateOrConnectWithoutClassificationInput
    connect?: RunWhereUniqueInput
  }

  export type RunUpdateOneRequiredWithoutClassificationNestedInput = {
    create?: XOR<RunCreateWithoutClassificationInput, RunUncheckedCreateWithoutClassificationInput>
    connectOrCreate?: RunCreateOrConnectWithoutClassificationInput
    upsert?: RunUpsertWithoutClassificationInput
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutClassificationInput, RunUpdateWithoutClassificationInput>, RunUncheckedUpdateWithoutClassificationInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type AgentVersionCreateWithoutAgentInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJobs?: EvaluationJobCreateNestedManyWithoutAgentVersionInput
    runs?: RunCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionUncheckedCreateWithoutAgentInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJobs?: EvaluationJobUncheckedCreateNestedManyWithoutAgentVersionInput
    runs?: RunUncheckedCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionCreateOrConnectWithoutAgentInput = {
    where: AgentVersionWhereUniqueInput
    create: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput>
  }

  export type AgentVersionCreateManyAgentInputEnvelope = {
    data: AgentVersionCreateManyAgentInput | AgentVersionCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ScenarioCreateWithoutAgentInput = {
    id?: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutAgentInput = {
    id?: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutAgentInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput>
  }

  export type ScenarioCreateManyAgentInputEnvelope = {
    data: ScenarioCreateManyAgentInput | ScenarioCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type AgentVersionUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgentVersionWhereUniqueInput
    update: XOR<AgentVersionUpdateWithoutAgentInput, AgentVersionUncheckedUpdateWithoutAgentInput>
    create: XOR<AgentVersionCreateWithoutAgentInput, AgentVersionUncheckedCreateWithoutAgentInput>
  }

  export type AgentVersionUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgentVersionWhereUniqueInput
    data: XOR<AgentVersionUpdateWithoutAgentInput, AgentVersionUncheckedUpdateWithoutAgentInput>
  }

  export type AgentVersionUpdateManyWithWhereWithoutAgentInput = {
    where: AgentVersionScalarWhereInput
    data: XOR<AgentVersionUpdateManyMutationInput, AgentVersionUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentVersionScalarWhereInput = {
    AND?: AgentVersionScalarWhereInput | AgentVersionScalarWhereInput[]
    OR?: AgentVersionScalarWhereInput[]
    NOT?: AgentVersionScalarWhereInput | AgentVersionScalarWhereInput[]
    id?: StringFilter<"AgentVersion"> | string
    agentId?: StringFilter<"AgentVersion"> | string
    version?: IntFilter<"AgentVersion"> | number
    systemPrompt?: StringFilter<"AgentVersion"> | string
    tools?: JsonFilter<"AgentVersion">
    model?: StringFilter<"AgentVersion"> | string
    temperature?: FloatFilter<"AgentVersion"> | number
    createdAt?: DateTimeFilter<"AgentVersion"> | Date | string
    updatedAt?: DateTimeFilter<"AgentVersion"> | Date | string
  }

  export type ScenarioUpsertWithWhereUniqueWithoutAgentInput = {
    where: ScenarioWhereUniqueInput
    update: XOR<ScenarioUpdateWithoutAgentInput, ScenarioUncheckedUpdateWithoutAgentInput>
    create: XOR<ScenarioCreateWithoutAgentInput, ScenarioUncheckedCreateWithoutAgentInput>
  }

  export type ScenarioUpdateWithWhereUniqueWithoutAgentInput = {
    where: ScenarioWhereUniqueInput
    data: XOR<ScenarioUpdateWithoutAgentInput, ScenarioUncheckedUpdateWithoutAgentInput>
  }

  export type ScenarioUpdateManyWithWhereWithoutAgentInput = {
    where: ScenarioScalarWhereInput
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyWithoutAgentInput>
  }

  export type ScenarioScalarWhereInput = {
    AND?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    OR?: ScenarioScalarWhereInput[]
    NOT?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    id?: StringFilter<"Scenario"> | string
    agentId?: StringFilter<"Scenario"> | string
    prompt?: StringFilter<"Scenario"> | string
    category?: StringFilter<"Scenario"> | string
    riskType?: StringFilter<"Scenario"> | string
    expectedBehavior?: StringFilter<"Scenario"> | string
    metadata?: JsonNullableFilter<"Scenario">
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
  }

  export type AgentCreateWithoutVersionsInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenarios?: ScenarioCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutVersionsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutVersionsInput, AgentUncheckedCreateWithoutVersionsInput>
  }

  export type EvaluationJobCreateWithoutAgentVersionInput = {
    id?: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunCreateNestedManyWithoutEvaluationJobInput
  }

  export type EvaluationJobUncheckedCreateWithoutAgentVersionInput = {
    id?: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutEvaluationJobInput
  }

  export type EvaluationJobCreateOrConnectWithoutAgentVersionInput = {
    where: EvaluationJobWhereUniqueInput
    create: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput>
  }

  export type EvaluationJobCreateManyAgentVersionInputEnvelope = {
    data: EvaluationJobCreateManyAgentVersionInput | EvaluationJobCreateManyAgentVersionInput[]
    skipDuplicates?: boolean
  }

  export type RunCreateWithoutAgentVersionInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJob: EvaluationJobCreateNestedOneWithoutRunsInput
    scenario: ScenarioCreateNestedOneWithoutRunsInput
    trace?: TraceCreateNestedOneWithoutRunInput
    classification?: ClassificationCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateWithoutAgentVersionInput = {
    id?: string
    evaluationJobId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trace?: TraceUncheckedCreateNestedOneWithoutRunInput
    classification?: ClassificationUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunCreateOrConnectWithoutAgentVersionInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput>
  }

  export type RunCreateManyAgentVersionInputEnvelope = {
    data: RunCreateManyAgentVersionInput | RunCreateManyAgentVersionInput[]
    skipDuplicates?: boolean
  }

  export type AgentUpsertWithoutVersionsInput = {
    update: XOR<AgentUpdateWithoutVersionsInput, AgentUncheckedUpdateWithoutVersionsInput>
    create: XOR<AgentCreateWithoutVersionsInput, AgentUncheckedCreateWithoutVersionsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutVersionsInput, AgentUncheckedUpdateWithoutVersionsInput>
  }

  export type AgentUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenarios?: ScenarioUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenarios?: ScenarioUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type EvaluationJobUpsertWithWhereUniqueWithoutAgentVersionInput = {
    where: EvaluationJobWhereUniqueInput
    update: XOR<EvaluationJobUpdateWithoutAgentVersionInput, EvaluationJobUncheckedUpdateWithoutAgentVersionInput>
    create: XOR<EvaluationJobCreateWithoutAgentVersionInput, EvaluationJobUncheckedCreateWithoutAgentVersionInput>
  }

  export type EvaluationJobUpdateWithWhereUniqueWithoutAgentVersionInput = {
    where: EvaluationJobWhereUniqueInput
    data: XOR<EvaluationJobUpdateWithoutAgentVersionInput, EvaluationJobUncheckedUpdateWithoutAgentVersionInput>
  }

  export type EvaluationJobUpdateManyWithWhereWithoutAgentVersionInput = {
    where: EvaluationJobScalarWhereInput
    data: XOR<EvaluationJobUpdateManyMutationInput, EvaluationJobUncheckedUpdateManyWithoutAgentVersionInput>
  }

  export type EvaluationJobScalarWhereInput = {
    AND?: EvaluationJobScalarWhereInput | EvaluationJobScalarWhereInput[]
    OR?: EvaluationJobScalarWhereInput[]
    NOT?: EvaluationJobScalarWhereInput | EvaluationJobScalarWhereInput[]
    id?: StringFilter<"EvaluationJob"> | string
    agentVersionId?: StringFilter<"EvaluationJob"> | string
    status?: StringFilter<"EvaluationJob"> | string
    triggerSource?: StringFilter<"EvaluationJob"> | string
    totalScenarios?: IntFilter<"EvaluationJob"> | number
    passedScenarios?: IntFilter<"EvaluationJob"> | number
    failedScenarios?: IntFilter<"EvaluationJob"> | number
    reliabilityScore?: FloatNullableFilter<"EvaluationJob"> | number | null
    summaryMetrics?: JsonNullableFilter<"EvaluationJob">
    errorMessage?: StringNullableFilter<"EvaluationJob"> | string | null
    startedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvaluationJob"> | Date | string | null
    createdAt?: DateTimeFilter<"EvaluationJob"> | Date | string
    updatedAt?: DateTimeFilter<"EvaluationJob"> | Date | string
  }

  export type RunUpsertWithWhereUniqueWithoutAgentVersionInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutAgentVersionInput, RunUncheckedUpdateWithoutAgentVersionInput>
    create: XOR<RunCreateWithoutAgentVersionInput, RunUncheckedCreateWithoutAgentVersionInput>
  }

  export type RunUpdateWithWhereUniqueWithoutAgentVersionInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutAgentVersionInput, RunUncheckedUpdateWithoutAgentVersionInput>
  }

  export type RunUpdateManyWithWhereWithoutAgentVersionInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutAgentVersionInput>
  }

  export type RunScalarWhereInput = {
    AND?: RunScalarWhereInput | RunScalarWhereInput[]
    OR?: RunScalarWhereInput[]
    NOT?: RunScalarWhereInput | RunScalarWhereInput[]
    id?: StringFilter<"Run"> | string
    evaluationJobId?: StringFilter<"Run"> | string
    agentVersionId?: StringFilter<"Run"> | string
    scenarioId?: StringFilter<"Run"> | string
    status?: StringFilter<"Run"> | string
    durationMs?: IntNullableFilter<"Run"> | number | null
    errorMessage?: StringNullableFilter<"Run"> | string | null
    startedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Run"> | Date | string | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
  }

  export type AgentVersionCreateWithoutEvaluationJobsInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutVersionsInput
    runs?: RunCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionUncheckedCreateWithoutEvaluationJobsInput = {
    id?: string
    agentId: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionCreateOrConnectWithoutEvaluationJobsInput = {
    where: AgentVersionWhereUniqueInput
    create: XOR<AgentVersionCreateWithoutEvaluationJobsInput, AgentVersionUncheckedCreateWithoutEvaluationJobsInput>
  }

  export type RunCreateWithoutEvaluationJobInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentVersion: AgentVersionCreateNestedOneWithoutRunsInput
    scenario: ScenarioCreateNestedOneWithoutRunsInput
    trace?: TraceCreateNestedOneWithoutRunInput
    classification?: ClassificationCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateWithoutEvaluationJobInput = {
    id?: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trace?: TraceUncheckedCreateNestedOneWithoutRunInput
    classification?: ClassificationUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunCreateOrConnectWithoutEvaluationJobInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput>
  }

  export type RunCreateManyEvaluationJobInputEnvelope = {
    data: RunCreateManyEvaluationJobInput | RunCreateManyEvaluationJobInput[]
    skipDuplicates?: boolean
  }

  export type AgentVersionUpsertWithoutEvaluationJobsInput = {
    update: XOR<AgentVersionUpdateWithoutEvaluationJobsInput, AgentVersionUncheckedUpdateWithoutEvaluationJobsInput>
    create: XOR<AgentVersionCreateWithoutEvaluationJobsInput, AgentVersionUncheckedCreateWithoutEvaluationJobsInput>
    where?: AgentVersionWhereInput
  }

  export type AgentVersionUpdateToOneWithWhereWithoutEvaluationJobsInput = {
    where?: AgentVersionWhereInput
    data: XOR<AgentVersionUpdateWithoutEvaluationJobsInput, AgentVersionUncheckedUpdateWithoutEvaluationJobsInput>
  }

  export type AgentVersionUpdateWithoutEvaluationJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutVersionsNestedInput
    runs?: RunUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionUncheckedUpdateWithoutEvaluationJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutAgentVersionNestedInput
  }

  export type RunUpsertWithWhereUniqueWithoutEvaluationJobInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutEvaluationJobInput, RunUncheckedUpdateWithoutEvaluationJobInput>
    create: XOR<RunCreateWithoutEvaluationJobInput, RunUncheckedCreateWithoutEvaluationJobInput>
  }

  export type RunUpdateWithWhereUniqueWithoutEvaluationJobInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutEvaluationJobInput, RunUncheckedUpdateWithoutEvaluationJobInput>
  }

  export type RunUpdateManyWithWhereWithoutEvaluationJobInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutEvaluationJobInput>
  }

  export type AgentCreateWithoutScenariosInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: AgentVersionCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutScenariosInput = {
    id?: string
    name: string
    domain: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: AgentVersionUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutScenariosInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutScenariosInput, AgentUncheckedCreateWithoutScenariosInput>
  }

  export type RunCreateWithoutScenarioInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJob: EvaluationJobCreateNestedOneWithoutRunsInput
    agentVersion: AgentVersionCreateNestedOneWithoutRunsInput
    trace?: TraceCreateNestedOneWithoutRunInput
    classification?: ClassificationCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateWithoutScenarioInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trace?: TraceUncheckedCreateNestedOneWithoutRunInput
    classification?: ClassificationUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunCreateOrConnectWithoutScenarioInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput>
  }

  export type RunCreateManyScenarioInputEnvelope = {
    data: RunCreateManyScenarioInput | RunCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type AgentUpsertWithoutScenariosInput = {
    update: XOR<AgentUpdateWithoutScenariosInput, AgentUncheckedUpdateWithoutScenariosInput>
    create: XOR<AgentCreateWithoutScenariosInput, AgentUncheckedCreateWithoutScenariosInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutScenariosInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutScenariosInput, AgentUncheckedUpdateWithoutScenariosInput>
  }

  export type AgentUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: AgentVersionUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: AgentVersionUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type RunUpsertWithWhereUniqueWithoutScenarioInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutScenarioInput, RunUncheckedUpdateWithoutScenarioInput>
    create: XOR<RunCreateWithoutScenarioInput, RunUncheckedCreateWithoutScenarioInput>
  }

  export type RunUpdateWithWhereUniqueWithoutScenarioInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutScenarioInput, RunUncheckedUpdateWithoutScenarioInput>
  }

  export type RunUpdateManyWithWhereWithoutScenarioInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutScenarioInput>
  }

  export type EvaluationJobCreateWithoutRunsInput = {
    id?: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agentVersion: AgentVersionCreateNestedOneWithoutEvaluationJobsInput
  }

  export type EvaluationJobUncheckedCreateWithoutRunsInput = {
    id?: string
    agentVersionId: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationJobCreateOrConnectWithoutRunsInput = {
    where: EvaluationJobWhereUniqueInput
    create: XOR<EvaluationJobCreateWithoutRunsInput, EvaluationJobUncheckedCreateWithoutRunsInput>
  }

  export type AgentVersionCreateWithoutRunsInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutVersionsInput
    evaluationJobs?: EvaluationJobCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionUncheckedCreateWithoutRunsInput = {
    id?: string
    agentId: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJobs?: EvaluationJobUncheckedCreateNestedManyWithoutAgentVersionInput
  }

  export type AgentVersionCreateOrConnectWithoutRunsInput = {
    where: AgentVersionWhereUniqueInput
    create: XOR<AgentVersionCreateWithoutRunsInput, AgentVersionUncheckedCreateWithoutRunsInput>
  }

  export type ScenarioCreateWithoutRunsInput = {
    id?: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutScenariosInput
  }

  export type ScenarioUncheckedCreateWithoutRunsInput = {
    id?: string
    agentId: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioCreateOrConnectWithoutRunsInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutRunsInput, ScenarioUncheckedCreateWithoutRunsInput>
  }

  export type TraceCreateWithoutRunInput = {
    id?: string
    messages: JsonNullValueInput | InputJsonValue
    turnCount?: number
    hitTurnLimit?: boolean
    toolCallsCount?: number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraceUncheckedCreateWithoutRunInput = {
    id?: string
    messages: JsonNullValueInput | InputJsonValue
    turnCount?: number
    hitTurnLimit?: boolean
    toolCallsCount?: number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraceCreateOrConnectWithoutRunInput = {
    where: TraceWhereUniqueInput
    create: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
  }

  export type ClassificationCreateWithoutRunInput = {
    id?: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationUncheckedCreateWithoutRunInput = {
    id?: string
    passFail: string
    failureType: string
    confidence: number
    reasoning: string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassificationCreateOrConnectWithoutRunInput = {
    where: ClassificationWhereUniqueInput
    create: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
  }

  export type EvaluationJobUpsertWithoutRunsInput = {
    update: XOR<EvaluationJobUpdateWithoutRunsInput, EvaluationJobUncheckedUpdateWithoutRunsInput>
    create: XOR<EvaluationJobCreateWithoutRunsInput, EvaluationJobUncheckedCreateWithoutRunsInput>
    where?: EvaluationJobWhereInput
  }

  export type EvaluationJobUpdateToOneWithWhereWithoutRunsInput = {
    where?: EvaluationJobWhereInput
    data: XOR<EvaluationJobUpdateWithoutRunsInput, EvaluationJobUncheckedUpdateWithoutRunsInput>
  }

  export type EvaluationJobUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentVersion?: AgentVersionUpdateOneRequiredWithoutEvaluationJobsNestedInput
  }

  export type EvaluationJobUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentVersionUpsertWithoutRunsInput = {
    update: XOR<AgentVersionUpdateWithoutRunsInput, AgentVersionUncheckedUpdateWithoutRunsInput>
    create: XOR<AgentVersionCreateWithoutRunsInput, AgentVersionUncheckedCreateWithoutRunsInput>
    where?: AgentVersionWhereInput
  }

  export type AgentVersionUpdateToOneWithWhereWithoutRunsInput = {
    where?: AgentVersionWhereInput
    data: XOR<AgentVersionUpdateWithoutRunsInput, AgentVersionUncheckedUpdateWithoutRunsInput>
  }

  export type AgentVersionUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutVersionsNestedInput
    evaluationJobs?: EvaluationJobUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJobs?: EvaluationJobUncheckedUpdateManyWithoutAgentVersionNestedInput
  }

  export type ScenarioUpsertWithoutRunsInput = {
    update: XOR<ScenarioUpdateWithoutRunsInput, ScenarioUncheckedUpdateWithoutRunsInput>
    create: XOR<ScenarioCreateWithoutRunsInput, ScenarioUncheckedCreateWithoutRunsInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutRunsInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutRunsInput, ScenarioUncheckedUpdateWithoutRunsInput>
  }

  export type ScenarioUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutScenariosNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraceUpsertWithoutRunInput = {
    update: XOR<TraceUpdateWithoutRunInput, TraceUncheckedUpdateWithoutRunInput>
    create: XOR<TraceCreateWithoutRunInput, TraceUncheckedCreateWithoutRunInput>
    where?: TraceWhereInput
  }

  export type TraceUpdateToOneWithWhereWithoutRunInput = {
    where?: TraceWhereInput
    data: XOR<TraceUpdateWithoutRunInput, TraceUncheckedUpdateWithoutRunInput>
  }

  export type TraceUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraceUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: JsonNullValueInput | InputJsonValue
    turnCount?: IntFieldUpdateOperationsInput | number
    hitTurnLimit?: BoolFieldUpdateOperationsInput | boolean
    toolCallsCount?: IntFieldUpdateOperationsInput | number
    rawUsage?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUpsertWithoutRunInput = {
    update: XOR<ClassificationUpdateWithoutRunInput, ClassificationUncheckedUpdateWithoutRunInput>
    create: XOR<ClassificationCreateWithoutRunInput, ClassificationUncheckedCreateWithoutRunInput>
    where?: ClassificationWhereInput
  }

  export type ClassificationUpdateToOneWithWhereWithoutRunInput = {
    where?: ClassificationWhereInput
    data: XOR<ClassificationUpdateWithoutRunInput, ClassificationUncheckedUpdateWithoutRunInput>
  }

  export type ClassificationUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    passFail?: StringFieldUpdateOperationsInput | string
    failureType?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    rawJudgeOutput?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCreateWithoutTraceInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJob: EvaluationJobCreateNestedOneWithoutRunsInput
    agentVersion: AgentVersionCreateNestedOneWithoutRunsInput
    scenario: ScenarioCreateNestedOneWithoutRunsInput
    classification?: ClassificationCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateWithoutTraceInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: ClassificationUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunCreateOrConnectWithoutTraceInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutTraceInput, RunUncheckedCreateWithoutTraceInput>
  }

  export type RunUpsertWithoutTraceInput = {
    update: XOR<RunUpdateWithoutTraceInput, RunUncheckedUpdateWithoutTraceInput>
    create: XOR<RunCreateWithoutTraceInput, RunUncheckedCreateWithoutTraceInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutTraceInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutTraceInput, RunUncheckedUpdateWithoutTraceInput>
  }

  export type RunUpdateWithoutTraceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJob?: EvaluationJobUpdateOneRequiredWithoutRunsNestedInput
    agentVersion?: AgentVersionUpdateOneRequiredWithoutRunsNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunsNestedInput
    classification?: ClassificationUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutTraceInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: ClassificationUncheckedUpdateOneWithoutRunNestedInput
  }

  export type RunCreateWithoutClassificationInput = {
    id?: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluationJob: EvaluationJobCreateNestedOneWithoutRunsInput
    agentVersion: AgentVersionCreateNestedOneWithoutRunsInput
    scenario: ScenarioCreateNestedOneWithoutRunsInput
    trace?: TraceCreateNestedOneWithoutRunInput
  }

  export type RunUncheckedCreateWithoutClassificationInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trace?: TraceUncheckedCreateNestedOneWithoutRunInput
  }

  export type RunCreateOrConnectWithoutClassificationInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutClassificationInput, RunUncheckedCreateWithoutClassificationInput>
  }

  export type RunUpsertWithoutClassificationInput = {
    update: XOR<RunUpdateWithoutClassificationInput, RunUncheckedUpdateWithoutClassificationInput>
    create: XOR<RunCreateWithoutClassificationInput, RunUncheckedCreateWithoutClassificationInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutClassificationInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutClassificationInput, RunUncheckedUpdateWithoutClassificationInput>
  }

  export type RunUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJob?: EvaluationJobUpdateOneRequiredWithoutRunsNestedInput
    agentVersion?: AgentVersionUpdateOneRequiredWithoutRunsNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunsNestedInput
    trace?: TraceUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trace?: TraceUncheckedUpdateOneWithoutRunNestedInput
  }

  export type AgentVersionCreateManyAgentInput = {
    id?: string
    version?: number
    systemPrompt: string
    tools: JsonNullValueInput | InputJsonValue
    model?: string
    temperature?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioCreateManyAgentInput = {
    id?: string
    prompt: string
    category: string
    riskType: string
    expectedBehavior: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentVersionUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJobs?: EvaluationJobUpdateManyWithoutAgentVersionNestedInput
    runs?: RunUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJobs?: EvaluationJobUncheckedUpdateManyWithoutAgentVersionNestedInput
    runs?: RunUncheckedUpdateManyWithoutAgentVersionNestedInput
  }

  export type AgentVersionUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    tools?: JsonNullValueInput | InputJsonValue
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    riskType?: StringFieldUpdateOperationsInput | string
    expectedBehavior?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationJobCreateManyAgentVersionInput = {
    id?: string
    status?: string
    triggerSource?: string
    totalScenarios?: number
    passedScenarios?: number
    failedScenarios?: number
    reliabilityScore?: number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunCreateManyAgentVersionInput = {
    id?: string
    evaluationJobId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationJobUpdateWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUpdateManyWithoutEvaluationJobNestedInput
  }

  export type EvaluationJobUncheckedUpdateWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutEvaluationJobNestedInput
  }

  export type EvaluationJobUncheckedUpdateManyWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerSource?: StringFieldUpdateOperationsInput | string
    totalScenarios?: IntFieldUpdateOperationsInput | number
    passedScenarios?: IntFieldUpdateOperationsInput | number
    failedScenarios?: IntFieldUpdateOperationsInput | number
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    summaryMetrics?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunUpdateWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJob?: EvaluationJobUpdateOneRequiredWithoutRunsNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunsNestedInput
    trace?: TraceUpdateOneWithoutRunNestedInput
    classification?: ClassificationUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trace?: TraceUncheckedUpdateOneWithoutRunNestedInput
    classification?: ClassificationUncheckedUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutAgentVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCreateManyEvaluationJobInput = {
    id?: string
    agentVersionId: string
    scenarioId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunUpdateWithoutEvaluationJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentVersion?: AgentVersionUpdateOneRequiredWithoutRunsNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutRunsNestedInput
    trace?: TraceUpdateOneWithoutRunNestedInput
    classification?: ClassificationUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutEvaluationJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trace?: TraceUncheckedUpdateOneWithoutRunNestedInput
    classification?: ClassificationUncheckedUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutEvaluationJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCreateManyScenarioInput = {
    id?: string
    evaluationJobId: string
    agentVersionId: string
    status?: string
    durationMs?: number | null
    errorMessage?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RunUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluationJob?: EvaluationJobUpdateOneRequiredWithoutRunsNestedInput
    agentVersion?: AgentVersionUpdateOneRequiredWithoutRunsNestedInput
    trace?: TraceUpdateOneWithoutRunNestedInput
    classification?: ClassificationUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trace?: TraceUncheckedUpdateOneWithoutRunNestedInput
    classification?: ClassificationUncheckedUpdateOneWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationJobId?: StringFieldUpdateOperationsInput | string
    agentVersionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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