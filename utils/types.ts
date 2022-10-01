type Blockchain = {
  name: string;
  ticket: string;
  networks: Network[];
}

type Network = {
  name: string;
  ticket: string;
  blockchain_explorer_url: string;
  image: string;
  chain_type: string;
}

export default Blockchain;