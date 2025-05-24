import React from "react";

import "./achievements.css";

import CodeForces from "../assets/CodeForces.png";
import CodeChef from "../assets/CodeChef.png";
import LeetCode from "../assets/LeetCode.png";

export const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <div className="achiev-title">
                    <h1>
                        <u>Achievements</u> 🎯
                    </h1>
                </div>
                <div className="coding-profiles">
                    <div className="code-profile codeforces">
                        <div className="code-profile-logo">
                            <img src={CodeForces} alt="Codeforces" />
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">Codeforces</p>
                            <div className="code-profile-rating">
                                <p>
                                    1100+ Problems, [Specialist] (Max Rating :
                                    1519)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile codechef">
                        <div className="code-profile-logo">
                            <img src={CodeChef} alt="Codechef" />
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">Codechef</p>
                            <div className="code-profile-rating">
                                <p>
                                    100+ Problems, [⭐⭐⭐] (Max Rating : 1606)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile leetcode">
                        <div className="code-profile-logo">
                            <img src={LeetCode} alt="Leetcode" />
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">Leetcode</p>
                            <div className="code-profile-rating">
                                <p>200+ Problems, [] (Max Rating : )</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="coding-achieve">
                    <div className="code-ach">
                        <p>Rank 268 in Codechef Starters 186 (Div. 3)</p>
                    </div>
                    <div className="code-ach">
                        <p>Rank 685 in Codeforces Round 1021 (Div. 2)</p>
                    </div>
                </div>
            </div>
        </>
    );
};
