// creating In-Memory DB (hashmaps)

// save('user-1', {fname, lname}) // IDs ke saath users ko store kara sakte hai
// Hashmap (or Map) is a Key-Value pair. We don't know the type of Key & Value
// <> - these are generics
// Key = string & value = string (type). But Value humesha string nhi ho sakti. We want {fname, lname, contact:{mobile}, address: {street, pin, country}, email}. We use `interface` to use complex obj like these as type in TS
// Usually the name of the interface is capital
type UserID = string; // custom type
interface User {
  id: UserID;
  fname: string;
  lname?: string; // '?' indicates optional
  email: string;
  contact: {
    mobile: string;
  };
  address: {
    street: number;
    pin: number;
    country: string;
  };
}
class InMemoryDB {
  // private _db: Map<string, User>;
  // private _db: Map<User["id"], User>; // Key ka type wohi rahega joh User interface mein 'id' ka hoga
  private _db: Map<UserID, User>;

  constructor() {}

  public async insertUser(data: User): Promise<UserID> {
    if (this._db.has(data.id)) {
      throw new Error(`User with ID ${data.id} already exists`);
    }
    this._db.set(data.id, data);
    return data.id;
  }
  // We want `insertUser` to return a Promise & jabh woh promise resolve hojaye toh woh UserID return karein

  public updateUser(id: UserID, updateData: Omit<User, "id">) {
    if (!this._db.has(id)) throw new Error(`User with ID ${id} doesn't exists`);

    this._db.set(id, { ...updateData, id });
  }
}

const myDB = new InMemoryDB();

myDB.insertUser({
  id: "user-1",
  fname: "John",
  lname: "Doe",
  email: "2KlZ4@example.com",
  contact: {
    mobile: "1234567890",
  },
  address: {
    street: 123,
    pin: 123456,
    country: "India",
  },
}); // We need to send all the data that we defined in the User Interface. Only then it will stop giving error
// Agar hum kisi key ko optional bana chahte hai toh we add '?' after the key name. Eg: lname?: string

myDB.updateUser("1", {
  // id: "user-1",
  fname: "John",
  lname: "Doe",
  email: "2KlZ4@example.com",
  contact: {
    mobile: "1234567890",
  },
  address: {
    street: 123,
    pin: 123456,
    country: "India",
  },
}); // Here the 'id' can also get changed. How do we stop the ID from getting updated? We use omit(shown above)
