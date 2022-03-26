export const Header = () => {
  return (
    <div className="flex justify-center bg-secondary sticky top-0 h-16 w-full bg-opacity-90 backdrop-filter-blur z-10">
      <div className="flex justify-between items-center w-full max-w-screen-2xl px-4 sm:px-8 xl:px-12">
        <div className="flex text-sm items-center">
          <h1 className="text-t-primary text-2xl font-medium">
            Animo <strong className="font-semibold">NFT</strong>
          </h1>
        </div>
        <div className="flex gap-4">
          <a
            href="https://opensea.io/collection/animo-nft-2"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            View on OpenSea
          </a>
        </div>
      </div>
    </div>
  );
};
