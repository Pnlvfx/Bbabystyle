import LeaderboardMenu from "../../../../components/leaderboard/LeaderboardMenu";
import TopCommunities from "../../../../components/widget/topcommunities/TopCommunities";
import Widget from "../../../../components/widget/Widget";

const LeaderboardLayout = ({children}: ChildrenProps) => {
  return (
    <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
      <div className="z-[3]">
        <div className="flex h-24 justify-center bg-reddit_dark-brighter">
          <div className="mx-6 box-border flex h-24 max-w-[1200px] flex-grow flex-col justify-center px-4">
            <h1 className="mb-2 text-2xl font-bold leading-6">
              Today&apos;s Top Growing Communities
            </h1>
            <span className="text-xs text-reddit_text-darker">
              Browse bbaby&apos;s top growing communities. Find the top
              communities in your favorite category.
            </span>
          </div>
        </div>
        <div className="mx-auto box-border flex max-w-[1248px] justify-center py-5 px-6 ">
          <LeaderboardMenu />
          {children}
          <div className="ml-8">
            <Widget>
              <TopCommunities />
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardLayout;
