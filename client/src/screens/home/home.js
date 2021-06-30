import React from "react";
import Layout from "../../components/layout/Layout";
import SearchInput from "../../components/searchinput/SearchInput";

export default function Home() {
  return (
    <Layout>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Home
          </h1> */}
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <SearchInput />
          {/* <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div> */}
        </div>
      </main>
    </Layout>
  );
}
