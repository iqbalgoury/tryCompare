function compareFiles() {
            const file1 = document.getElementById('file1').value.split('\n');
            const file2 = document.getElementById('file2').innerText.split('\n');
            const file2Element = document.getElementById('file2');
            let highlightedContent = '';

            for (let i = 0; i < file2.length; i++) {
                const words1 = file1[i] ? file1[i].split(' ') : [];
                const words2 = file2[i] ? file2[i].split(' ') : [];
                for (let j = 0; j < words2.length; j++) {
                    if (words1[j] !== words2[j]) {
                        highlightedContent += `<span class="highlight">${words2[j]}</span> `;
                    } else {
                        highlightedContent += `${words2[j]} `;
                    }
                }
                highlightedContent += '\n';
            }

            file2Element.innerHTML = highlightedContent.trim();
        }

        function syncScroll(element1, element2) {
            element1.onscroll = function() {
                element2.scrollTop = element1.scrollTop;
                element2.scrollLeft = element1.scrollLeft;
            };
            element2.onscroll = function() {
                element1.scrollTop = element2.scrollTop;
                element1.scrollLeft = element2.scrollLeft;
            };
        }

        window.onload = function() {
            const file1Element = document.getElementById('file1');
            const file2Element = document.getElementById('file2');
            syncScroll(file1Element, file2Element);
        };
