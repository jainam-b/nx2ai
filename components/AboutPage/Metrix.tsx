import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, SetStateAction } from "react";

export default function Metrics() {
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [successProjects, setSuccessProjects] = useState(0);
  const [awards, setAwards] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      // Animate numbers
      const animateNumber = (setter: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): void; }, target: number, duration: number) => {
        let start = 0;
        const increment = target / (duration / 16); // 16ms per frame for 60fps
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.ceil(start));
          }
        }, 16);
      };

      animateNumber(setSatisfiedClients, 783, 2000); // 2 seconds
      animateNumber(setTotalRevenue, 13000000, 2000); // 2 seconds
      animateNumber(setSuccessProjects, 754, 2000); // 2 seconds
      animateNumber(setAwards, 315, 2000); // 2 seconds
    }
  }, [isInView]);

  return (
    <div className="flex justify-center bg-black text-white w-full">
      <div className="container mx-auto px-4 py-12" ref={ref}>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          {/* Satisfied Clients */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              {satisfiedClients}
            </p>
            <p className="text-gray-400 text-lg">
              Satisfied global<br />
              clients
            </p>
          </motion.div>

          {/* Total Revenue */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              {totalRevenue.toLocaleString()}+
            </p>
            <p className="text-gray-400 text-lg">
              Total<br />
              revenue
            </p>
          </motion.div>

          {/* Success Projects */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              {successProjects}
            </p>
            <p className="text-gray-400 text-lg">
              Finishing success<br />
              projects
            </p>
          </motion.div>

          {/* Awards */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 via-purple-800 to-purple-600 bg-clip-text text-transparent">
              {awards}
            </p>
            <p className="text-gray-400 text-lg">
              International<br />
              awards winning
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}