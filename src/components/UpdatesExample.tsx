import React from 'react';

// Example component showing how to add updates
// You can copy this structure to add new updates to your site

const UpdatesExample = () => {
  // Example updates array - you can modify this to add new updates
  const updates = [
    {
      id: 1,
      title: "v2.2 Released",
      description: "Added new Azure Latch auto-farm scripts and improved GUI",
      timestamp: "2 hours ago",
      type: "release", // release, update, feature, fix
      color: "green"
    },
    {
      id: 2,
      title: "New Script Category",
      description: "Added PvP scripts section with 10+ new Azure Latch combat scripts",
      timestamp: "1 day ago",
      type: "feature",
      color: "blue"
    },
    {
      id: 3,
      title: "Bug Fixes",
      description: "Fixed compatibility issues with latest Azure Latch update",
      timestamp: "3 days ago",
      type: "fix",
      color: "purple"
    },
    {
      id: 4,
      title: "Community Scripts",
      description: "Added 5 community-contributed Azure Latch scripts",
      timestamp: "1 week ago",
      type: "update",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-500 text-green-400",
      blue: "border-blue-500 text-blue-400",
      purple: "border-purple-500 text-purple-400",
      yellow: "border-yellow-500 text-yellow-400",
      red: "border-red-500 text-red-400"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
        Latest Updates
      </h2>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className={`border-l-4 pl-4 ${getColorClasses(update.color)}`}>
            <h3 className="text-white font-semibold text-sm">{update.title}</h3>
            <p className="text-gray-400 text-xs">{update.description}</p>
            <span className={`text-xs ${getColorClasses(update.color).split(' ')[1]}`}>
              {update.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesExample;

/* 
HOW TO ADD NEW UPDATES:

1. To add a new update, simply add a new object to the updates array above:

{
  id: 5, // increment the ID
  title: "Your Update Title",
  description: "Description of what was updated/added/fixed",
  timestamp: "time ago (e.g., '1 hour ago', '2 days ago')",
  type: "release", // release, update, feature, fix
  color: "green" // green, blue, purple, yellow, red
}

2. Color meanings:
   - green: Major releases, new versions
   - blue: New features, additions
   - purple: Bug fixes, improvements
   - yellow: Community updates, minor changes
   - red: Important notices, breaking changes

3. To use this component in your main App.tsx, import it and add it to any tab:

import UpdatesExample from './components/UpdatesExample';

// Then in your JSX:
<UpdatesExample />

4. You can also create multiple update components for different sections:
   - ScriptUpdates.tsx (for script-specific updates)
   - SystemUpdates.tsx (for system/website updates)
   - CommunityUpdates.tsx (for community-related updates)
*/