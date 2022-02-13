export type BabyJubJub = {
  seedToPrivateKey: (seed: string) => string,
  packPoint: (unpacked: string[]) => string,
  unpackPoint: (packed: string) => string[],
  ecdh: (privkey: string, pubkey: string) => string,
  privateKeyToPubKey: (privkey: string) => string,
  random: () => string,
}
