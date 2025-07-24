export default function SkillTree() {
  const tiers = [
    {
      tier: 'Spark',
      skills: ['Reality Pulse', 'Memory Whisper']
    },
    {
      tier: 'Luminary',
      skills: ['Realm Weaver', 'Minor Conjuration', 'Dream Ember']
    },
    {
      tier: 'Mystic',
      skills: ['Void Step', 'Sky Dancer', 'Scene Sculptor']
    },
    {
      tier: 'Cosmic',
      skills: ['Time Manipulation', 'Starcaller', 'Infinite Architect']
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg mb-2">Tree of Lucidia</h3>
      <div className="space-y-2">
        {tiers.map((tier) => (
          <div key={tier.tier} className="">
            <h4 className="font-semibold text-purple-700">{tier.tier} Tier</h4>
            <ul className="list-disc list-inside ml-4">
              {tier.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}