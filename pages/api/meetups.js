import { MongoClient, ServerApiVersion } from 'mongodb';

async function handler(req, res) {
  const user = 'username';
  const password = 'password';
  const uri = `mongodb+srv://${user}:${password}@cluster0.ev7av.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  if (req.method === 'POST') {
    const data = req.body;

    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  } else {
    // Get all meetups from mongodb collection 'meetups'
    try {
      const db = client.db('meetups');

      const meetupsCollection = await db.collection('meetups');

      const data = await meetupsCollection.find().toArray();

      client.close();

      res.status(200).send(data);
    } catch (err) {
      client.close();

      res.status(500).send({ error: err.message });
    }
  }
  return;
}

export default handler;
