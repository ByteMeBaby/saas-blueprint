import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export function setupDynamoDb() {
  const config: DynamoDBClientConfig = {
    region: "fakeRegion",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    ...(process.env.NODE_ENV === "development" && {
      endpoint: "http://ddb-local:8000",
    }),
  };

  const client = DynamoDBDocument.from(new DynamoDB(config), {
    marshallOptions: {
      convertEmptyValues: true,
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    },
  });

  return client;
}

export default async function GET() {
  const client = setupDynamoDb();

  try {
    const Items = await client.get({
      TableName: "test",
      Key: {
        pk: "test",
        sk: "test",
      },
    });

    if (Items) {
      return new Response(
        JSON.stringify({
          status: 200,
          data: Items,
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        status: 404,
        error: "User not found",
      }),
      {
        status: 404,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  } catch (error) {
    console.log("error", error);
    return new Response(
      JSON.stringify({
        status: 500,
        error: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }
}
