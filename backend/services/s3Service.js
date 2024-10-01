import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Lazy initialization of the S3 client
let s3Client;

const createS3client = () => {
    if (!s3Client) {
        s3Client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        });
    }
    return s3Client;
};

export const generatePresignedUrl = async (key) => {
    const s3 = createS3client();  // Get the initialized S3 client here
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    });

    try {
        const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
        return presignedUrl;
    } catch (error) {
        console.error('Error generating pre-signed URL:', error);
        throw error;
    }
};

// get image from s3 and convert it to base64
export const getBase64ImageFromS3 = async (key) => {
    const s3 = createS3client();  // Get the initialized S3 client here
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    });

    try {
        const image = await s3.send(command);
        const base64Image = Buffer.from(image.Body).toString('base64');
        return base64Image;
    } catch (error) {
        console.error('Error getting image from s3:', error);
        throw error;
    }
}