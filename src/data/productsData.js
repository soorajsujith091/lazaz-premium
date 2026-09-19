import {
  Building2, Construction, Factory, Zap, Droplets, Grid3X3,
  Paintbrush, TreePine, Monitor, Cog, FlaskConical, Coffee,
  Fuel, Truck, Recycle, Wrench, Container, HardHat
} from 'lucide-react';

export const productsData = [
  { 
    id: 'construction-materials', 
    name: 'Construction Materials', 
    icon: Building2, 
    image: '/construction_materials.png',
    description: 'We supply a wide range of premium construction materials tailored for commercial, industrial, and residential projects. Our materials ensure structural integrity, durability, and compliance with the highest industry standards.',
    features: ['High-grade raw materials', 'Sourced from top manufacturers', 'Bulk supply capabilities', 'On-time delivery to project sites']
  },
  { 
    id: 'steel-rebar', 
    name: 'Steel & Rebar', 
    icon: Construction, 
    image: '/steel_rebar.png',
    description: 'Our steel and rebar products provide the essential framework for robust construction. We offer various grades and sizes suitable for diverse engineering and architectural requirements.',
    features: ['High tensile strength', 'Corrosion-resistant options', 'Custom fabrication available', 'Strict quality control']
  },
  { 
    id: 'cement-concrete', 
    name: 'Cement & Concrete', 
    icon: Factory, 
    image: '/worker-leveling-fresh-floor-with-special-machine.jpg',
    description: 'Reliable cement and ready-mix concrete solutions for foundational and structural applications. Formulated for quick setting and long-lasting strength.',
    features: ['Multiple cement grades', 'Ready-mix concrete delivery', 'Weather-resistant formulations', 'Consistent quality']
  },
  { 
    id: 'crusher-asphalt', 
    name: 'Crusher & Asphalt Materials', 
    icon: HardHat, 
    image: '/heavy-machinery-used-construction-industry-engineering.jpg',
    description: 'Premium quality aggregates, crusher materials, and asphalt for road construction and infrastructure projects. We ensure optimal aggregate grading for maximum compaction.',
    features: ['Various aggregate sizes', 'High-quality bitumen', 'Road base materials', 'Sustainable sourcing']
  },
  { 
    id: 'electrical-materials', 
    name: 'Electrical Materials', 
    icon: Zap, 
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
    description: 'Complete range of electrical components, cables, and fixtures for safe and efficient power distribution in commercial and industrial facilities.',
    features: ['Cables & Wiring', 'Switches & Panels', 'Lighting solutions', 'Safety compliant']
  },
  { 
    id: 'plumbing-materials', 
    name: 'Plumbing Materials', 
    icon: Droplets, 
    image: '/plumbing_materials.png',
    description: 'Durable plumbing pipes, fittings, and accessories designed for high-pressure industrial applications and reliable commercial water management systems.',
    features: ['PVC, CPVC & UPVC pipes', 'Industrial valves', 'Water-saving fixtures', 'Leak-proof technology']
  },
  { 
    id: 'ceramics-tiles', 
    name: 'Ceramics & Tiles', 
    icon: Grid3X3, 
    image: '/ceramics_tiles.png',
    description: 'Aesthetic and heavy-duty ceramics and tiles for flooring and wall cladding. Ideal for both decorative commercial spaces and rugged industrial environments.',
    features: ['Wide range of designs', 'Anti-slip industrial tiles', 'Easy maintenance', 'High durability']
  },
  { 
    id: 'paints-coatings', 
    name: 'Paints & Coatings', 
    icon: Paintbrush, 
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800',
    description: 'Industrial-grade paints and protective coatings designed to withstand harsh environmental conditions while providing excellent coverage and aesthetic appeal.',
    features: ['Anti-corrosive coatings', 'Weather-resistant paints', 'Epoxy flooring solutions', 'Eco-friendly options']
  },
  { 
    id: 'wood-timber', 
    name: 'Wood & Timber', 
    icon: TreePine, 
    image: '/person-working-wood-working-industry-factory.jpg',
    description: 'High-quality wood and timber for formwork, scaffolding, and fine architectural finishes. Sourced responsibly to ensure sustainability and strength.',
    features: ['Structural timber', 'Plywood and MDF', 'Custom cutting services', 'Treated for pest resistance']
  },
  { 
    id: 'office-facilities', 
    name: 'Office Facilities Supply', 
    icon: Monitor, 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive office supplies including furniture, IT equipment, and administrative essentials to keep your site operations running smoothly.',
    features: ['Ergonomic furniture', 'IT hardware & PCs', 'Printers & consumables', 'Stationery']
  },
  { 
    id: 'heavy-equipment-parts', 
    name: 'Heavy Equipment & Machinery Spare Parts', 
    icon: Cog, 
    image: '/scene-construction-site-with-equipment.jpg',
    description: 'Critical OEM and aftermarket spare parts for heavy machinery, ensuring minimal downtime and maximum operational efficiency for your fleet.',
    features: ['Engine components', 'Hydraulic systems', 'Undercarriage parts', 'Filters and lubricants']
  },
  { 
    id: 'chemicals-scientific', 
    name: 'Chemicals & Scientific Trading', 
    icon: FlaskConical, 
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    description: 'Specialized supply of industrial chemicals, laboratory equipment, and scientific instruments for research, manufacturing, and processing facilities.',
    features: ['Industrial solvents', 'Lab grade chemicals', 'Testing equipment', 'Safety gear']
  },
  { 
    id: 'food-beverage', 
    name: 'Food & Beverage Trading', 
    icon: Coffee, 
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    description: 'Reliable distribution of bulk food products and beverages, catering to large-scale catering services, site camps, and commercial hospitality sectors.',
    features: ['Bulk provisions', 'Fresh & frozen goods', 'Beverage supply', 'Strict hygiene standards']
  },
  { 
    id: 'oil-gas-energy', 
    name: 'Oil, Gas & Energy Trading', 
    icon: Fuel, 
    image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800',
    description: 'Specialized materials and equipment serving the demanding requirements of the oil, gas, and renewable energy sectors.',
    features: ['Piping and valves', 'Safety equipment', 'Refinery supplies', 'Renewable energy components']
  },
  { 
    id: 'heavy-rental', 
    name: 'Heavy Rental Equipment', 
    icon: Truck, 
    image: '/lazaz_heavy_equipment.png',
    description: 'Flexible rental solutions for heavy construction and industrial machinery. We provide well-maintained equipment with expert support.',
    features: ['Excavators & Loaders', 'Cranes & Lifts', 'Generators', 'Flexible rental terms']
  },
  { 
    id: 'scrap-waste', 
    name: 'Scrap & Waste Processing', 
    icon: Recycle, 
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    description: 'Efficient industrial scrap management and waste processing solutions designed to maximize recycling and minimize environmental impact.',
    features: ['Metal scrap recovery', 'Industrial waste management', 'Recycling solutions', 'Environmental compliance']
  },
  { 
    id: 'industrial-spare-parts', 
    name: 'Industrial Spare Parts Supply', 
    icon: Wrench, 
    image: '/lazaz_industrial_parts.png',
    description: 'Comprehensive sourcing of industrial spare parts for manufacturing plants and processing facilities to ensure uninterrupted production.',
    features: ['Bearings & Belts', 'Motors & Drives', 'Pneumatic components', 'Rapid delivery']
  },
  { 
    id: 'site-facilities', 
    name: 'Site Facilities', 
    icon: Container, 
    image: '/oil-gas-facility.png',
    description: 'Turnkey site facility solutions including portable cabins, HVAC units, and power generation to establish fully functional temporary work camps.',
    features: ['Portable cabins', 'Generators & AC units', 'Site lighting', 'Sanitary facilities']
  },
];
