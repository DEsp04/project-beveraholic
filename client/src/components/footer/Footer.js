import React from "react";

export default function Footer() {
  return (
    <footer class="h-10">
      <div>
        <p class="flex border-t border-gray-500   flex items-baseline pr-8 pl-8 pt-2 text-xs flex-col md:items-center pt-1">
          © Copyright {new Date().getFullYear()} Beveraholic All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
