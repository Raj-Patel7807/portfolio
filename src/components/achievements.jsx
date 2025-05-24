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
                            <a
                                href="https://codeforces.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={CodeForces}
                                    alt="Codeforces"
                                    title="Codeforces"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://codeforces.com/profile/Raj_Patel_7807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codeforces
                                </a>
                            </p>
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
                            <a
                                href="https://www.codechef.com/users/raj_patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={CodeChef}
                                    alt="CodeChef"
                                    title="CodeChef"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://www.codechef.com/users/raj_patel_7807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codechef
                                </a>
                            </p>
                            <div className="code-profile-rating">
                                <p>
                                    100+ Problems, [⭐⭐⭐] (Max Rating : 1606)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile leetcode">
                        <div className="code-profile-logo">
                            <a
                                href="https://leetcode.com/u/Raj_Patel_7807/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={LeetCode}
                                    alt="LeetCode"
                                    title="LeetCode"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://leetcode.com/u/Raj_Patel_7807/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Leetcode
                                </a>
                            </p>
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
